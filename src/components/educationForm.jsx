/* eslint-disable no-unused-vars */
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded';
import Grid from '@mui/material/Grid';
import React, { Fragment, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { getAllCities, getAllStates } from '../store/action';
import { searchSchools } from '../store/action/searchAPI';
import constant from '../store/constant';
import { useContextCustom } from '../store/context';
import FormCard from './Card';
import FinishedNotes from './finishedNotes';
import {
  FormHeader,
  IconButton,
  IconWrapper,
  MainWrapper,
  MediumPoppin,
} from './styled/educationForm.style';

let BottomNoteWrapper = styled.div`
  padding: 10px;
  margin-bottom: 100px;
`;
function generateArrayOfYears(firstString) {
  var max = new Date().getFullYear();
  var min = max - 47;
  var years = [{ name: firstString, value: '0' }];

  for (var i = max; i >= min; i--) {
    years.push({ name: i, value: i });
  }
  return years;
}

let data = [
  {
    title: 'Firstly, what year did you graduate from high school?',
    options: generateArrayOfYears('High School Graduation year'),
    dropdown: true,
    name: 'hsyear',
  },
  {
    title: 'And that was in the US?',
    options: [
      { name: 'Graduated in the US?', value: '0' },
      { name: 'Yes', value: 'yes' },
      { name: 'No', value: 'no' },
    ],
    dropdown: true,
    name: 'graduated_in_us',
  },
  {
    title: 'And just to check, you are a US Citizen?',
    options: [
      { name: 'US Citizen?', value: '0' },
      { name: 'Yes', value: 'yes' },
      { name: 'No', value: 'no' },
    ],
    dropdown: true,
    name: 'us_citizen',
  },
  {
    title:
      'Great, can I ask is high school the highest level of education you’ve completed?',
    options: [
      { name: 'Highest level of education', value: '0' },
      { name: 'Doctoral', value: 'Doctoral' },
      { name: 'Masters', value: 'Masters' },
      { name: 'Bachelors', value: 'Bachelors' },
      { name: 'Associates', value: 'Associates' },
      {
        name: 'Some College 31-60 Credits',
        value: 'Some College 31-60 Credits',
      },
      {
        name: 'Some College 11-30 Credits',
        value: 'Some College 11-30 Credits',
      },
      { name: 'Some College 1-10 Credits', value: 'Some College 1-10 Credits' },
      { name: 'High School Diploma', value: 'High School Diploma' },
      { name: 'GED', value: 'GED' },
      {
        name: 'No High School Diploma or GED',
        value: 'No High School Diploma or GED',
      },
    ],
    dropdown: true,
    name: 'current_education_level',
  },
  {
    title: 'Do you have unrestricted access to a computer and internet?',
    options: [
      { name: 'Internet access?', value: '0' },
      { name: 'Yes', value: 'yes' },
      { name: 'No', value: 'no' },
    ],
    dropdown: true,
    name: 'computer_internet_access',
    iconWifi: true,
  },
];
let personalDetails = [
  {
    title: 'And what year were you born?',
    options: generateArrayOfYears('Birth Year'),
    dropdown: true,
    name: 'age',
    iconCalendar: true,
  },
  {
    title: 'Are you associated with the military at all?',
    options: [
      { name: 'Military association', value: '0' },
      { name: 'Yes', value: 'yes' },
      { name: 'No', value: 'no' },
    ],
    dropdown: true,
    name: 'military_status',
    iconMilitary: true,
  },
  {
    title:
      'Okay, and have you been in contact with any Schools in the past 6 months?',
    options: [
      { name: 'In contact with schools?', value: '2' },
      { name: 'Yes', value: '0' },
      { name: 'No', value: '1' },
    ],
    name: 'is_contacted_by_school',
    dropdown: true,
  },
];
let enrolment = [
  {
    title: 'Please tell me the area of study you’re interested in:',
    options: [
      { name: 'Area of study', value: 'Area of study' },
      { name: 'Art & Design', value: 'Art & Design' },
      { name: 'Business', value: 'Business' },
      { name: 'Computers & Technology', value: 'Computers & Technology' },
      { name: 'Criminal Justice', value: 'Criminal Justice' },
      { name: 'Culinary', value: 'Culinary' },
      { name: 'Education & Teaching', value: 'Education & Teaching' },
      { name: 'Entertainment', value: 'Entertainment' },
      { name: 'Health & Wellness', value: 'Health & Wellness' },
      { name: 'Hospitality', value: 'Hospitality' },
      { name: 'Language', value: 'Language' },
      { name: 'Legal & Paralegal', value: 'Legal & Paralegal' },
      { name: 'Liberal Arts', value: 'Liberal Arts' },
      {
        name: 'Massage And Physical Therapy',
        value: 'Massage And Physical Therapy',
      },
      { name: 'Nursing', value: 'Nursing' },
      { name: 'Psychology And Counseling', value: 'Psychology And Counseling' },
      { name: 'Religious Studies', value: 'Religious Studies' },
      { name: 'Science & Engineering', value: 'Science & Engineering' },
      { name: 'Trade & Vo-Tech', value: 'Trade & Vo-Tech' },
    ],
    dropdown: true,
    name: 'areas_of_interest',
  },
  {
    title:
      'Aside from <interest> is there another area of study you’re interested in?',
    options: [
      { name: 'Area of study', value: 'Area of study' },
      { name: 'Art & Design', value: 'Art & Design' },
      { name: 'Business', value: 'Business' },
      { name: 'Computers & Technology', value: 'Computers & Technology' },
      { name: 'Criminal Justice', value: 'Criminal Justice' },
      { name: 'Culinary', value: 'Culinary' },
      { name: 'Education & Teaching', value: 'Education & Teaching' },
      { name: 'Entertainment', value: 'Entertainment' },
      { name: 'Health & Wellness', value: 'Health & Wellness' },
      { name: 'Hospitality', value: 'Hospitality' },
      { name: 'Language', value: 'Language' },
      { name: 'Legal & Paralegal', value: 'Legal & Paralegal' },
      { name: 'Liberal Arts', value: 'Liberal Arts' },
      {
        name: 'Massage And Physical Therapy',
        value: 'Massage And Physical Therapy',
      },
      { name: 'Nursing', value: 'Nursing' },
      { name: 'Psychology And Counseling', value: 'Psychology And Counseling' },
      { name: 'Religious Studies', value: 'Religious Studies' },
      { name: 'Science & Engineering', value: 'Science & Engineering' },
      { name: 'Trade & Vo-Tech', value: 'Trade & Vo-Tech' },
    ],
    dropdown: true,
    name: 'another_areas_of_interest',
  },
  {
    title: 'Any other area of study?',
    options: [
      { name: 'Area of study', value: 'Area of study' },
      { name: 'Art & Design', value: 'Art & Design' },
      { name: 'Business', value: 'Business' },
      { name: 'Computers & Technology', value: 'Computers & Technology' },
      { name: 'Criminal Justice', value: 'Criminal Justice' },
      { name: 'Culinary', value: 'Culinary' },
      { name: 'Education & Teaching', value: 'Education & Teaching' },
      { name: 'Entertainment', value: 'Entertainment' },
      { name: 'Health & Wellness', value: 'Health & Wellness' },
      { name: 'Hospitality', value: 'Hospitality' },
      { name: 'Language', value: 'Language' },
      { name: 'Legal & Paralegal', value: 'Legal & Paralegal' },
      { name: 'Liberal Arts', value: 'Liberal Arts' },
      {
        name: 'Massage And Physical Therapy',
        value: 'Massage And Physical Therapy',
      },
      { name: 'Nursing', value: 'Nursing' },
      { name: 'Psychology And Counseling', value: 'Psychology And Counseling' },
      { name: 'Religious Studies', value: 'Religious Studies' },
      { name: 'Science & Engineering', value: 'Science & Engineering' },
      { name: 'Trade & Vo-Tech', value: 'Trade & Vo-Tech' },
    ],
    dropdown: true,
    name: 'any_other_areas_of_interest',
  },
  {
    title:
      'Wow, great! And when you go back to school, are you looking for campus, online, or would you consider both options?',
    options: [
      { name: 'Location preference', value: '0' },
      { name: 'Either', value: 'either' },
      { name: 'Online', value: 'Online' },
      { name: 'Campus', value: 'Campus' },
    ],
    dropdown: true,
    name: 'online_or_campus',
  },
  {
    title:
      'If you found the right school and program, would you be ready within 3 months?',
    options: [
      { name: 'Enrolment timeline', value: '0' },
      { name: 'Yes', value: 'yes' },
      { name: 'No', value: 'no' },
    ],
    dropdown: true,
    name: 'can_complete_enrollment',
    iconCalendar: true,
  },
];
let contact = [
  {
    options: [
      { name: 'Gender', value: '1' },
      { name: 'Male', value: 'm' },
      { name: 'Female', value: 'f' },
    ],
    isDouble: true,
    name1: 'gender',
    name2: 'first_name',
    iconHidden: true,
  },
  {
    title: 'Just to check how your last name is spelled',
    ticked: true,
    bottomLine: true,
    name: 'last_name',
    placeholder: 'Your last name',
  },
  {
    title:
      'In case we get disconnected is this the correct number so that I can call you back?',
    ticked: true,
    name: 'phone',
    placeholder: 'Your phone number',
  },
  {
    title:
      'Perfect, and when would be the best time for you to receive a call?',
    options: [
      { name: 'Time to contact', value: '1' },
      { name: 'Morning', value: 'morning' },
      { name: 'Noon', value: 'noon' },
      { name: 'Afternoon', value: 'afternoon' },
      { name: 'Evening', value: 'evening' },
    ],
    dropdown: true,
    name: 'time_to_call',
    iconClock: true,
  },
  {
    title:
      'Great, now, before we get to the schools, is this your best email address?',
    ticked: true,
    name: 'email',
    placeholder: 'Your email',
  },
  {
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
  },
];

const EducationForm = () => {
  const { dispatch } = useContextCustom();
  const navigation = useNavigate();
  let [state, setState] = useState({
    gender: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address_line1: '',
    city: '',
    state: '',
    zip_code: '',
    computer_internet_access: '',
    age: '',
    hsyear: '',
    current_education_level: '',
    us_citizen: '',
    military_status: '',
    online_or_campus: '',
    preferred_enrollment: '',
    is_contacted_by_school: '',
    graduated_in_us: '',
    time_to_call: '',
    areas_of_interest: '',
    another_areas_of_interest: '',
    any_other_areas_of_interest: '',
  });
  let dispatchRedux = useDispatch();
  useEffect(() => {
    dispatchRedux(getAllStates());
    dispatchRedux(getAllCities('Alabama'));
  }, []);

  const searchHandler = (e) => {
    e.preventDefault();
    dispatchRedux(searchSchools(state, navigation));
  };

  return (
    <MainWrapper>
      <Grid container>
        <Grid item xs={6}>
          <FormHeader>
            <MediumPoppin>Education</MediumPoppin>
          </FormHeader>
        </Grid>
        <Grid item xs={6}>
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
            <FormCard item={item} setState={setState} state={state} />
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
            <FormCard item={item} setState={setState} state={state} />
          </Fragment>
        );
      })}
      <Grid container>
        <Grid item xs={12}>
          <FormHeader>
            <MediumPoppin>Enrolment & interests</MediumPoppin>
          </FormHeader>
        </Grid>
      </Grid>
      {enrolment.map((item, key) => {
        return (
          <Fragment key={key}>
            <FormCard item={item} setState={setState} state={state} />
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
            <FormCard item={item} setState={setState} state={state} />
          </Fragment>
        );
      })}
      <BottomNoteWrapper>
        <FinishedNotes searchHandler={searchHandler} />
      </BottomNoteWrapper>
    </MainWrapper>
  );
};

export default EducationForm;
