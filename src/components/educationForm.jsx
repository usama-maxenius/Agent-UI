/* eslint-disable no-useless-escape */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import AccessTimeRoundedIcon from '@mui/icons-material/AccessTimeRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import MilitaryTechRoundedIcon from '@mui/icons-material/MilitaryTechRounded';
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded';
import SchoolRoundedIcon from '@mui/icons-material/SchoolRounded';
import WifiRoundedIcon from '@mui/icons-material/WifiRounded';
import Grid from '@mui/material/Grid';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { getAllCities, getAllStates } from '../store/action';
import { searchSchools } from '../store/action/searchAPI';
import { searchData } from '../store/action/userDetailAction';

import constant from '../store/constant';
import { useContextCustom } from '../store/context';
import FormCard from './Card';
import FinishedNotes from './finishedNotes';

import {
  FormHeader,
  IconButton,
  IconWrapper,
  MainWrapper,
  // eslint-disable-next-line prettier/prettier
  MediumPoppin,
} from './styled/educationForm.style';
import { useSelector } from 'react-redux';

let BottomNoteWrapper = styled.div`
  padding: 10px;
  margin-bottom: 100px;
`;
function generateArrayOfYears(firstString) {
  var max = new Date().getFullYear();
  var min = max - 47;
  var years = [{ OptionLabel: firstString, OptionValue: '0' }];

  for (var i = max; i >= min; i--) {
    years.push({ OptionLabel: i, OptionValue: i });
  }
  return years;
}

let data = [
  {
    title: 'Firstly, what year did you graduate from high school?',
    options: generateArrayOfYears('High School Graduation year'),
    dropdown: true,
    name: 'hsyear',
    styleClasses: 'mt-[26px]',
    // Icon: <Icon />
    Icon: <SchoolRoundedIcon />,
  },
  {
    title: 'And that was in the US?',
    options: [
      { OptionLabel: 'Graduated in the US?', OptionValue: '0' },
      { OptionLabel: 'Yes', OptionValue: 'yes' },
      { OptionLabel: 'No', OptionValue: 'no' },
    ],
    dropdown: true,
    name: 'graduated_in_us',
    name1: 'graduated_in_us',
    styleClasses: ' mt-[26px]',
    Icon: <SchoolRoundedIcon />,
  },
  {
    title: 'And just to check, you are a US Citizen?',
    options: [
      { OptionLabel: 'US Citizen?', OptionValue: '0' },
      { OptionLabel: 'Yes', OptionValue: 'yes' },
      { OptionLabel: 'No', OptionValue: 'no' },
    ],
    dropdown: true,
    name: 'us_citizen',
    name1: 'us_citizen',
    styleClasses: ' mt-[26px]',
    Icon: <SchoolRoundedIcon />,
  },
  {
    title:
      'Great, can I ask is high school the highest level of education you’ve completed?',
    options: [
      { OptionLabel: 'Highest level of education', OptionValue: '0' },
      { OptionLabel: 'Doctoral', OptionValue: 'Doctoral' },
      { OptionLabel: 'Masters', OptionValue: 'Masters' },
      { OptionLabel: 'Bachelors', OptionValue: 'Bachelors' },
      { OptionLabel: 'Associates', OptionValue: 'Associates' },
      {
        name: 'Some College 31-60 Credits',
        OptionValue: 'Some College 31-60 Credits',
      },
      {
        name: 'Some College 11-30 Credits',
        OptionValue: 'Some College 11-30 Credits',
      },
      {
        OptionLabel: 'Some College 1-10 Credits',
        OptionValue: 'Some College 1-10 Credits',
      },
      {
        OptionLabel: 'High School Diploma',
        OptionValue: 'High School Diploma',
      },
      { OptionLabel: 'GED', OptionValue: 'GED' },
      {
        name: 'No High School Diploma or GED',
        OptionValue: 'No High School Diploma or GED',
      },
    ],
    dropdown: true,
    name: 'current_education_level',
    styleClasses: ' mt-[26px]',
    Icon: <SchoolRoundedIcon />,
  },
  {
    title: 'Do you have unrestricted access to a computer and internet?',
    options: [
      { OptionLabel: 'Internet access?', OptionValue: '0' },
      { OptionLabel: 'Yes', OptionValue: 'yes' },
      { OptionLabel: 'No', OptionValue: 'no' },
    ],
    dropdown: true,
    name: 'computer_internet_access',
    name1: 'computer_internet_access',
    iconWifi: true,
    styleClasses: ' mt-[26px]',
    Icon: <WifiRoundedIcon />,
  },
];
let personalDetails = [
  {
    id: 0,
    title: 'And what year were you born?',
    options: generateArrayOfYears('Birth Year'),
    dropdown: true,
    name: 'age',
    iconCalendar: true,
    styleClasses: ' mt-[26px]',
    Icon: <CalendarMonthRoundedIcon />,
  },
  {
    id: 1,

    title: 'Are you associated with the military at all?',
    options: [
      { OptionLabel: 'Military association', OptionValue: '0' },
      { OptionLabel: 'Yes', OptionValue: 'yes' },
      { OptionLabel: 'No', OptionValue: 'no' },
    ],
    dropdown: true,
    name: 'military_status',
    name1: 'military_status',
    iconMilitary: true,
    styleClasses: ' mt-[26px]',
    Icon: <MilitaryTechRoundedIcon />,
  },
  {
    id: 3,

    title:
      'Okay, and have you been in contact with any Schools in the past 6 months?',
    options: [
      { OptionLabel: 'In contact with schools?', OptionValue: '2' },
      { OptionLabel: 'Yes', OptionValue: '0' },
      { OptionLabel: 'No', OptionValue: '1' },
    ],
    name: 'is_contacted_by_school',
    name1: 'is_contacted_by_school',
    dropdown: true,
    styleClasses: ' mt-[26px]',
    Icon: <SchoolRoundedIcon />,
  },
];
let enrolment = [
  {
    id: 0,
    title: 'Please tell me the area of study you’re interested in:',
    options: [
      { OptionLabel: 'Area of study', OptionValue: 'Area of study' },
      { OptionLabel: 'Art & Design', OptionValue: 'Art & Design' },
      { OptionLabel: 'Business', OptionValue: 'Business' },
      {
        OptionLabel: 'Computers & Technology',
        OptionValue: 'Computers & Technology',
      },
      { OptionLabel: 'Criminal Justice', OptionValue: 'Criminal Justice' },
      { OptionLabel: 'Culinary', OptionValue: 'Culinary' },
      {
        OptionLabel: 'Education & Teaching',
        OptionValue: 'Education & Teaching',
      },
      { OptionLabel: 'Entertainment', OptionValue: 'Entertainment' },
      { OptionLabel: 'Health & Wellness', OptionValue: 'Health & Wellness' },
      { OptionLabel: 'Hospitality', OptionValue: 'Hospitality' },
      { OptionLabel: 'Language', OptionValue: 'Language' },
      { OptionLabel: 'Legal & Paralegal', OptionValue: 'Legal & Paralegal' },
      { OptionLabel: 'Liberal Arts', OptionValue: 'Liberal Arts' },
      {
        name: 'Massage And Physical Therapy',
        OptionValue: 'Massage And Physical Therapy',
      },
      { OptionLabel: 'Nursing', OptionValue: 'Nursing' },
      {
        OptionLabel: 'Psychology And Counseling',
        OptionValue: 'Psychology And Counseling',
      },
      { OptionLabel: 'Religious Studies', OptionValue: 'Religious Studies' },
      {
        OptionLabel: 'Science & Engineering',
        OptionValue: 'Science & Engineering',
      },
      { OptionLabel: 'Trade & Vo-Tech', OptionValue: 'Trade & Vo-Tech' },
    ],
    dropdown: true,
    name: 'areas_of_interest',
    styleClasses: ' mt-[26px]',
    Icon: <SchoolRoundedIcon />,
  },
  {
    id: 1,

    title:
      'Aside from above interest is there another area of study you’re interested in?',
    options: [
      { OptionLabel: 'Additional area of study', OptionValue: 'Area of study' },
      { OptionLabel: 'Art & Design', OptionValue: 'Art & Design' },
      { OptionLabel: 'Business', OptionValue: 'Business' },
      {
        OptionLabel: 'Computers & Technology',
        OptionValue: 'Computers & Technology',
      },
      { OptionLabel: 'Criminal Justice', OptionValue: 'Criminal Justice' },
      { OptionLabel: 'Culinary', OptionValue: 'Culinary' },
      {
        OptionLabel: 'Education & Teaching',
        OptionValue: 'Education & Teaching',
      },
      { OptionLabel: 'Entertainment', OptionValue: 'Entertainment' },
      { OptionLabel: 'Health & Wellness', OptionValue: 'Health & Wellness' },
      { OptionLabel: 'Hospitality', OptionValue: 'Hospitality' },
      { OptionLabel: 'Language', OptionValue: 'Language' },
      { OptionLabel: 'Legal & Paralegal', OptionValue: 'Legal & Paralegal' },
      { OptionLabel: 'Liberal Arts', OptionValue: 'Liberal Arts' },
      {
        name: 'Massage And Physical Therapy',
        OptionValue: 'Massage And Physical Therapy',
      },
      { OptionLabel: 'Nursing', OptionValue: 'Nursing' },
      {
        OptionLabel: 'Psychology And Counseling',
        OptionValue: 'Psychology And Counseling',
      },
      { OptionLabel: 'Religious Studies', OptionValue: 'Religious Studies' },
      {
        OptionLabel: 'Science & Engineering',
        OptionValue: 'Science & Engineering',
      },
      { OptionLabel: 'Trade & Vo-Tech', OptionValue: 'Trade & Vo-Tech' },
    ],
    dropdown: true,
    name: 'another_areas_of_interest',
    styleClasses: ' mt-[26px]',
    Icon: <SchoolRoundedIcon />,
  },
  {
    id: 2,

    title: 'Any other area of study?',
    options: [
      { OptionLabel: 'Additional area of study', OptionValue: 'Area of study' },
      { OptionLabel: 'Art & Design', OptionValue: 'Art & Design' },
      { OptionLabel: 'Business', OptionValue: 'Business' },
      {
        OptionLabel: 'Computers & Technology',
        OptionValue: 'Computers & Technology',
      },
      { OptionLabel: 'Criminal Justice', OptionValue: 'Criminal Justice' },
      { OptionLabel: 'Culinary', OptionValue: 'Culinary' },
      {
        OptionLabel: 'Education & Teaching',
        OptionValue: 'Education & Teaching',
      },
      { OptionLabel: 'Entertainment', OptionValue: 'Entertainment' },
      { OptionLabel: 'Health & Wellness', OptionValue: 'Health & Wellness' },
      { OptionLabel: 'Hospitality', OptionValue: 'Hospitality' },
      { OptionLabel: 'Language', OptionValue: 'Language' },
      { OptionLabel: 'Legal & Paralegal', OptionValue: 'Legal & Paralegal' },
      { OptionLabel: 'Liberal Arts', OptionValue: 'Liberal Arts' },
      {
        name: 'Massage And Physical Therapy',
        OptionValue: 'Massage And Physical Therapy',
      },
      { OptionLabel: 'Nursing', OptionValue: 'Nursing' },
      {
        OptionLabel: 'Psychology And Counseling',
        OptionValue: 'Psychology And Counseling',
      },
      { OptionLabel: 'Religious Studies', OptionValue: 'Religious Studies' },
      {
        OptionLabel: 'Science & Engineering',
        OptionValue: 'Science & Engineering',
      },
      { OptionLabel: 'Trade & Vo-Tech', OptionValue: 'Trade & Vo-Tech' },
    ],
    dropdown: true,
    name: 'any_other_areas_of_interest',
    styleClasses: ' mt-[26px]',
    Icon: <SchoolRoundedIcon />,
  },
  {
    id: 3,

    title:
      'Wow, great! And when you go back to school, are you looking for campus, online, or would you consider both options?',
    options: [
      { OptionLabel: 'Location preference', OptionValue: '0' },
      { OptionLabel: 'Either', OptionValue: 'either' },
      { OptionLabel: 'Online', OptionValue: 'Online' },
      { OptionLabel: 'Campus', OptionValue: 'Campus' },
    ],
    dropdown: true,
    name: 'online_or_campus',
    styleClasses: ' mt-[26px]',
    Icon: <SchoolRoundedIcon />,
  },
  {
    id: 4,

    title:
      'If you found the right school and program, would you be ready within 3 months?',
    options: [
      { OptionLabel: 'Enrollment timeline', OptionValue: '0' },
      { OptionLabel: 'Yes', OptionValue: 'yes' },
      { OptionLabel: 'No', OptionValue: 'no' },
    ],
    dropdown: true,
    name: 'can_complete_enrollment',
    name1: 'can_complete_enrollment',
    iconCalendar: true,
    styleClasses: ' mt-[26px]',
    Icon: <CalendarMonthRoundedIcon />,
  },
];
let contact = [
  {
    id: 0,
    options: [
      { OptionLabel: 'Gender', OptionValue: '1' },
      { OptionLabel: 'Male', OptionValue: 'm' },
      { OptionLabel: 'Female', OptionValue: 'f' },
    ],
    isDouble: true,
    name1: 'gender',
    name2: 'first_name',
    iconHidden: true,
    styleClasses: 'w-[83%]',
    styleHeight: 'mt-[26px]',
    genderWidth: true,
  },
  {
    id: 1,

    title: 'Just to check how your last name is spelled',
    ticked: true,
    bottomLine: true,
    name: 'last_name',
    placeholder: 'Your last name',
    styleClasses: ' mt-[26px] w-[83%]',
  },
  {
    id: 2,

    title:
      'In case we get disconnected is this the correct number so that I can call you back?',
    ticked: true,
    name: 'phone',
    placeholder: 'Your phone number',
    styleClasses: ' mt-[26px] w-[83%]',
  },
  {
    id: 3,

    title:
      'Perfect, and when would be the best time for you to receive a call?',
    options: [
      { OptionLabel: 'Time to contact', OptionValue: '1' },
      { OptionLabel: 'Morning', OptionValue: 'morning' },
      { OptionLabel: 'Noon', OptionValue: 'noon' },
      { OptionLabel: 'Afternoon', OptionValue: 'afternoon' },
      { OptionLabel: 'Evening', OptionValue: 'evening' },
    ],
    dropdown: true,
    name: 'time_to_call',
    iconClock: true,
    styleClasses: ' mt-[26px]',
    Icon: <AccessTimeRoundedIcon />,
  },
  {
    id: 4,

    title:
      'Great, now, before we get to the schools, is this your best email address?',
    ticked: true,
    name: 'email',
    placeholder: 'Your email',
    styleClasses: 'mt-[26px] w-[83%]',
  },
  {
    id: 5,

    title: 'Great, and lastly is what is your address?',
    dropdown: true,
    HomeIcon: true,
    isDouble: false,
    doubleHalf: true,
    placeholder: 'Street address',
    name: 'state',
    HomeIconName: 'address_line1',
    name1: 'city',
    name2: 'zip_code',
    iconHidden: true,
    placeholderZip: 'Zip code',
    typeZip: 'number',
    styleClasses: 'flex flex-col justify-between',
    styleHeight: 'h-[200px]',
    options: [],
    agentWidth: true,
    zipWidth: true,
  },
];

const Button = styled('div')(() => ({
  width: '388px',
  color: '#f5f5f5',
  borderRadius: '25px',
  backgroundColor: ' #2541b2',
  font: 'normal normal 600 22px/30px IBM Plex Sans',
  textAlign: 'center',
  padding: '11px',
  marginTop: '42px',
  border: '0px',
  outline: '0px',
  cursor: 'pointer',
}));

const EducationForm = (props) => {
  const { state, setState } = props;

  const { paramDetails } = useSelector((state) => state.SearchDetail);

  const { dispatch } = useContextCustom();
  const navigation = useNavigate();

  // const [params] = useSearchParams();
  // const [persistData, setPersistData] = useState({});
  // useEffect(() => {
  //   params.forEach((param) =>
  //     setState((prev) => ({ ...prev, [state[param]]: state[param] }))
  //   );
  // }, [params]);

  // const persistLocalData = localStorage.getItem('form');
  // const userDetailDatas = JSON.parse(persistLocalData);

  // const userDetailData = useRef(userDetailDatas);

  // useEffect(() => {
  //   setPersistData(userDetailData.current);
  // }, [userDetailData]);

  // useEffect(() => {
  //   const obj = state;
  //   persistData &&
  //     Object.keys(persistData).forEach((key) => {
  //       obj[key] = state[key].length ? state[key] : persistData[key];
  //     });

  //   setState(obj);
  // }, [persistData]);

  const [showPopup, setShowPopup] = useState(false);

  let dispatchRedux = useDispatch();
  useEffect(() => {
    dispatchRedux(getAllStates());
    dispatchRedux(getAllCities('Alabama'));
  }, []);

  const searchHandler = (e) => {
    e.preventDefault();
    const checkString = /^[A-Za-z\s]+$/;

    const phoneNo = /(\d{0,3})(\d{0,3})(\d{0,4})/im;

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,9})+$/;
    const zipRegex = /^\d{5}(-\d{4})?$/;

    if (
      paramDetails.first_name.length > 0 &&
      paramDetails.first_name.match(checkString) &&
      paramDetails.last_name.length > 0 &&
      paramDetails.last_name.match(checkString) &&
      paramDetails.email.length > 0 &&
      paramDetails.email.match(emailRegex) &&
      paramDetails.phone.length > 0 &&
      paramDetails.phone.replace(/\D/g, '').match(phoneNo) &&
      paramDetails.address_line1.length > 0 &&
      paramDetails.city.length > 0 &&
      paramDetails.state.length > 0
    ) {
      const supplier_trustedform_token = document.getElementById(
        'xxTrustedFormToken_0'
      );
      const supplier_trustedform_url = document.getElementById(
        'xxTrustedFormCertUrl_0'
      );
      const supplier_jornaya_leadid = document.getElementById('leadid_token');

      const trustedForm = {
        supplier_trustedform_token: supplier_trustedform_token?.value,
        supplier_trustedform_url: supplier_trustedform_url?.value,
        supplier_jornaya_leadid: supplier_jornaya_leadid?.value,
      };

      dispatchRedux(searchSchools(paramDetails, trustedForm, navigation));

      dispatchRedux({
        type: 'SELECTED_SCHOOL',
        payload: null,
      });
    } else {
      setShowPopup(true);
    }
  };

  const dispatchHandler = (data) => {
    if (data?.is_contacted_by_school.includes('1')) {
      data.is_contacted_by_school = 'No';
    }
    if (data?.is_contacted_by_school.includes('0')) {
      data.is_contacted_by_school = 'Yes';
    }

    if (data?.gender.includes('m')) {
      data.gender = 'Male';
    }
    if (data?.gender.includes('f')) {
      data.gender = 'Female';
    }
    const checkString = /^[A-Za-z\s]+$/;

    if (!data?.last_name.match(checkString)) {
      data.last_name = '';
    }
    if (!data?.first_name.match(checkString)) {
      data.first_name = '';
    }

    dispatchRedux(searchData(data));
  };

  return (
    <>
      <MainWrapper>
        <form>
          <Grid container>
            <Grid item xs={6}>
              <FormHeader>
                <MediumPoppin>Education</MediumPoppin>
              </FormHeader>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{
                display: 'flex',
                justifyContent: 'right',
                alignItems: 'right',
              }}
            >
              <IconWrapper>
                <IconButton
                  onClick={() => {
                    dispatch({
                      type: constant.HELP_DRAWER,
                    });
                  }}
                >
                  <LiveHelpRoundedIcon />
                </IconButton>
                <IconButton
                  onClick={() => {
                    dispatch({
                      type: constant.SECURITY_DRAWER,
                    });
                  }}
                >
                  <PolicyRoundedIcon />
                </IconButton>
              </IconWrapper>
            </Grid>
          </Grid>
          {data.map((item, key) => {
            return (
              <Fragment key={key}>
                <FormCard
                  myKey={item.id}
                  item={item}
                  setState={dispatchHandler}
                  state={paramDetails}
                />
              </Fragment>
            );
          })}
          <Grid container>
            <Grid item xs={12}>
              <FormHeader>
                <MediumPoppin>Personal information</MediumPoppin>
              </FormHeader>
            </Grid>
          </Grid>
          {personalDetails.map((item, key) => {
            return (
              <Fragment key={key}>
                <FormCard
                  myKey={item.id}
                  item={item}
                  setState={dispatchHandler}
                  state={paramDetails}
                />
              </Fragment>
            );
          })}
          <Grid container>
            <Grid item xs={12}>
              <FormHeader>
                <MediumPoppin>Enrollment & interests</MediumPoppin>
              </FormHeader>
            </Grid>
          </Grid>
          {enrolment.map((item, key) => {
            return (
              <Fragment key={key}>
                <FormCard
                  myKey={item.id}
                  item={item}
                  setState={dispatchHandler}
                  state={paramDetails}
                />
              </Fragment>
            );
          })}
          <Grid container>
            <Grid item xs={12}>
              <FormHeader>
                <MediumPoppin>Contact information</MediumPoppin>
              </FormHeader>
            </Grid>
          </Grid>
          {contact.map((item, key) => {
            return (
              <Fragment key={key}>
                <FormCard
                  myKey={item.id}
                  item={item}
                  setState={dispatchHandler}
                  state={paramDetails}
                />
              </Fragment>
            );
          })}
          <BottomNoteWrapper>
            <FinishedNotes searchHandler={searchHandler} />
          </BottomNoteWrapper>
        </form>
      </MainWrapper>
      {showPopup && (
        <Transition appear show={showPopup} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setShowPopup(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-bold leading-6 text-gray-900"
                    >
                      Warning
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-lg text-gray-500">
                        You need to fill out all the fields.
                      </p>
                    </div>

                    <div className="mt-4">
                      <Button
                        onClick={() => {
                          setShowPopup(false);
                        }}
                      >
                        Close
                      </Button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      )}
    </>
  );
};

export default EducationForm;
