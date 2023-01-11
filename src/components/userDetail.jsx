/* eslint-disable no-unused-vars */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  ItemWrapper,
  MainWrapper,
  // eslint-disable-next-line prettier/prettier
  RegularPoppin,
} from './styled/userDetails.style';
import { useSearchParams } from 'react-router-dom';
// import { useContextCustom } from '../store/scrollContext';
import { scrollIntoView } from '../hooks/useScrollForm';

// const data = [
//   {
//     title: 'Gender',
//     subTitle: 'Male',
//   },
//   {
//     title: 'First name',
//     subTitle: 'Angel',
//   },
//   {
//     title: 'Last name',
//     subTitle: 'Rubio',
//   },
//   {
//     title: 'HS graduation year',
//     subTitle: '2022',
//   },
//   {
//     title: 'US Degree',
//     subTitle: 'yes',
//   },
//   {
//     title: 'US Citizen',
//     subTitle: 'Yes',
//   },
//   {
//     title: 'Education Level',
//     subTitle: 'Masters',
//   },
//   {
//     title: 'Internet Access',
//     subTitle: 'Yes',
//   },
//   {
//     title: 'Year born',
//     subTitle: '1990',
//   },
//   {
//     title: 'US Military',
//     subTitle: 'No',
//   },
//   {
//     title: 'School in past 6 months',
//     subTitle: 'Yes',
//   },
//   {
//     title: '',
//     subTitle: '',
//   },
//   {
//     title: 'Primary interest',
//     subTitle: 'Books',
//   },
//   {
//     title: 'Additional interest',
//     subTitle: 'Gaming',
//   },
//   {
//     title: 'Additional interest',
//     subTitle: 'None',
//   },
//   {
//     title: 'Preference',
//     subTitle: 'Done',
//   },
//   {
//     title: 'Enrollment timeline',
//     subTitle: 'September',
//   },
//   {
//     title: '',
//     subTitle: '',
//   },
//   {
//     title: 'Phone number',
//     subTitle: '929-205-3200',
//   },
//   {
//     title: 'Time to contact',
//     subTitle: 'any time',
//   },
//   {
//     title: '',
//     subTitle: '',
//   },
//   {
//     title: 'Email',
//     subTitle: 'Angel.rubio@gmail.com',
//   },
//   {
//     title: '',
//     subTitle: '',
//   },
//   {
//     title: '',
//     subTitle: '',
//   },
//   {
//     title: 'Street address',
//     subTitle: '14th Street',
//   },
//   {
//     title: 'City',
//     subTitle: 'New York',
//   },
//   {
//     title: 'State',
//     subTitle: 'New York',
//   },
//   {
//     title: 'Zip Code',
//     subTitle: '10001',
//   },
// ];

const UserDetails = () => {
  const { searchDetails } = useSelector((store) => store.InitReducer);
  const { paramDetails } = useSelector((state) => state.SearchDetail);
  const [userData, setUserData] = useState([]);
  // const [params] = useSearchParams();

  // const [userData, setUserData] = useState([
  //   {
  //     title: 'Gender',
  //     subTitle: 'none',
  //   },
  //   {
  //     title: 'First name',
  //     subTitle: 'None',
  //   },
  //   {
  //     title: 'Last name',
  //     subTitle: 'None',
  //   },
  //   {
  //     title: 'HS graduation year',
  //     subTitle: 'None',
  //   },
  //   {
  //     title: 'US Degree',
  //     subTitle: 'None',
  //   },
  //   {
  //     title: 'US Citizen',
  //     subTitle: 'None',
  //   },
  //   {
  //     title: 'Education Level',
  //     subTitle: 'None',
  //   },
  //   {
  //     title: 'Internet Access',
  //     subTitle: 'None',
  //   },
  //   {
  //     title: 'Year born',
  //     subTitle: 'None',
  //   },
  //   {
  //     title: 'US Military',
  //     subTitle: 'None',
  //   },
  //   {
  //     title: 'School in past 6 months',
  //     subTitle: 'None',
  //   },
  //   {
  //     title: '',
  //     subTitle: '',
  //   },
  //   {
  //     title: 'Primary interest',
  //     subTitle: 'None',
  //   },
  //   {
  //     title: 'Additional interest',
  //     subTitle: 'None',
  //   },
  //   {
  //     title: 'Additional interest',
  //     subTitle: 'None',
  //   },
  //   {
  //     title: 'Preference',
  //     subTitle: 'None',
  //   },
  //   {
  //     title: 'Enrollment timeline',
  //     subTitle: 'None',
  //   },
  //   {
  //     title: '',
  //     subTitle: '',
  //   },
  //   {
  //     title: 'Phone number',
  //     subTitle: 'None',
  //   },
  //   {
  //     title: 'Time to contact',
  //     subTitle: 'None',
  //   },
  //   {
  //     title: '',
  //     subTitle: '',
  //   },
  //   {
  //     title: 'Email',
  //     subTitle: 'None',
  //   },
  //   {
  //     title: '',
  //     subTitle: '',
  //   },
  //   {
  //     title: '',
  //     subTitle: '',
  //   },
  //   {
  //     title: 'Street address',
  //     subTitle: 'None',
  //   },
  //   {
  //     title: 'City',
  //     subTitle: 'None',
  //   },
  //   {
  //     title: 'State',
  //     subTitle: 'None',
  //   },
  //   {
  //     title: 'Zip Code',
  //     subTitle: 'None',
  //   },
  // ]);

  // const parsedUserDetail = paramDetails;

  // useEffect(() => {
  //   // if (searchDetails !== undefined) {

  //   setUserData(
  //     (prev) => (
  //       { ...prev },
  //       [
  //         {
  //           title: 'Gender',
  //           subTitle:
  //             searchDetails?.gender === undefined
  //               ? parsedUserDetail.gender !== null
  //                 ? parsedUserDetail.gender
  //                 : parsedUserDetail?.gender
  //                 ? parsedUserDetail?.gender
  //                 : 'None'
  //               : searchDetails?.gender.length > 0
  //               ? searchDetails?.gender === 'm'
  //                 ? 'male'
  //                 : 'female'
  //               : parsedUserDetail?.gender
  //               ? parsedUserDetail?.gender
  //               : 'None',
  //         },
  //         {
  //           title: 'First name',
  //           subTitle:
  //             searchDetails?.first_name === undefined
  //               ? parsedUserDetail.first_name !== null
  //                 ? parsedUserDetail.first_name
  //                 : parsedUserDetail?.first_name
  //                 ? parsedUserDetail?.first_name
  //                 : 'None'
  //               : searchDetails?.first_name.length > 0
  //               ? searchDetails?.first_name
  //               : parsedUserDetail?.first_name
  //               ? parsedUserDetail?.first_name
  //               : 'None',
  //         },
  //         {
  //           title: 'Last name',
  //           subTitle:
  //             searchDetails?.last_name === undefined
  //               ? parsedUserDetail?.last_name !== null
  //                 ? parsedUserDetail?.last_name
  //                 : parsedUserDetail?.last_name
  //                 ? parsedUserDetail?.last_name
  //                 : 'None'
  //               : searchDetails?.last_name?.length > 0
  //               ? searchDetails?.last_name
  //               : parsedUserDetail?.last_name
  //               ? parsedUserDetail?.last_name
  //               : 'None',
  //         },
  //         {
  //           title: 'HS graduation year',
  //           subTitle:
  //             searchDetails?.hsyear === undefined
  //               ? parsedUserDetail?.hsyear !== null
  //                 ? parsedUserDetail?.hsyear
  //                 : parsedUserDetail?.hsyear
  //                 ? parsedUserDetail?.hsyear
  //                 : 'None'
  //               : searchDetails?.hsyear >= 0
  //               ? searchDetails?.hsyear
  //               : parsedUserDetail?.hsyear
  //               ? parsedUserDetail?.hsyear
  //               : 'None',
  //         },
  //         {
  //           title: 'US Degree',
  //           subTitle:
  //             searchDetails?.graduated_in_us === undefined
  //               ? parsedUserDetail?.graduated_in_us !== null
  //                 ? parsedUserDetail?.graduated_in_us
  //                 : parsedUserDetail?.graduated_in_us
  //                 ? parsedUserDetail?.graduated_in_us
  //                 : 'None'
  //               : searchDetails?.graduated_in_us?.length > 0
  //               ? searchDetails?.graduated_in_us
  //               : parsedUserDetail?.graduated_in_us
  //               ? parsedUserDetail?.graduated_in_us
  //               : 'None',
  //         },
  //         {
  //           title: 'US Citizen',
  //           subTitle:
  //             searchDetails?.us_citizen === undefined
  //               ? parsedUserDetail?.us_citizen !== null
  //                 ? parsedUserDetail?.us_citizen
  //                 : parsedUserDetail?.us_citizen
  //                 ? parsedUserDetail?.us_citizen
  //                 : 'None'
  //               : searchDetails?.us_citizen.length > 0
  //               ? searchDetails?.us_citizen
  //               : parsedUserDetail?.us_citizen
  //               ? parsedUserDetail?.us_citizen
  //               : 'None',
  //         },
  //         {
  //           title: 'Education Level',
  //           subTitle:
  //             searchDetails?.current_education_level === undefined
  //               ? parsedUserDetail?.current_education_level !== null
  //                 ? parsedUserDetail?.current_education_level
  //                 : parsedUserDetail?.current_education_level
  //                 ? parsedUserDetail?.current_education_level
  //                 : 'None'
  //               : searchDetails?.current_education_level.length > 0
  //               ? searchDetails?.current_education_level
  //               : parsedUserDetail?.current_education_level
  //               ? parsedUserDetail?.current_education_level
  //               : 'None',
  //         },
  //         {
  //           title: 'Internet Access',
  //           subTitle:
  //             searchDetails?.computer_internet_access === undefined
  //               ? parsedUserDetail?.computer_internet_access !== null
  //                 ? parsedUserDetail?.computer_internet_access
  //                 : parsedUserDetail?.computer_internet_access
  //                 ? parsedUserDetail?.computer_internet_access
  //                 : 'None'
  //               : searchDetails?.computer_internet_access.length > 0
  //               ? searchDetails?.computer_internet_access
  //               : parsedUserDetail?.computer_internet_access
  //               ? parsedUserDetail?.computer_internet_access
  //               : 'None',
  //         },
  //         {
  //           title: 'Year born',
  //           subTitle:
  //             searchDetails?.age === undefined
  //               ? parsedUserDetail?.age !== null
  //                 ? parsedUserDetail?.age
  //                 : parsedUserDetail?.age
  //                 ? parsedUserDetail?.age
  //                 : 'None'
  //               : searchDetails?.age >= 0
  //               ? searchDetails?.age
  //               : parsedUserDetail?.age
  //               ? parsedUserDetail?.age
  //               : 'None',
  //         },
  //         {
  //           title: 'US Military',
  //           subTitle:
  //             searchDetails?.military_status === undefined
  //               ? parsedUserDetail?.military !== null
  //                 ? parsedUserDetail?.military
  //                 : parsedUserDetail?.military
  //                 ? parsedUserDetail?.military
  //                 : 'None'
  //               : searchDetails?.military_status?.length > 0
  //               ? searchDetails?.military_status
  //               : parsedUserDetail?.military
  //               ? parsedUserDetail?.military
  //               : 'None',
  //         },
  //         {
  //           title: 'School in past 6 months',
  //           subTitle:
  //             searchDetails?.is_contacted_by_school === undefined
  //               ? parsedUserDetail?.is_contacted_by_school !== null
  //                 ? parsedUserDetail?.is_contacted_by_school
  //                 : parsedUserDetail?.is_contacted_by_school
  //                 ? parsedUserDetail?.is_contacted_by_school
  //                 : 'None'
  //               : searchDetails?.is_contacted_by_school?.length > 0
  //               ? searchDetails?.is_contacted_by_school === '0'
  //                 ? 'yes'
  //                 : 'no'
  //               : parsedUserDetail?.is_contacted_by_school
  //               ? parsedUserDetail?.is_contacted_by_school
  //               : 'None',
  //         },
  //         {
  //           title: '',
  //           subTitle: '',
  //         },
  //         {
  //           title: 'Primary interest',
  //           subTitle:
  //             searchDetails?.areas_of_interest === undefined
  //               ? parsedUserDetail?.areas_of_interest !== null
  //                 ? parsedUserDetail?.areas_of_interest
  //                 : parsedUserDetail?.areas_of_interest
  //                 ? parsedUserDetail?.areas_of_interest
  //                 : 'None'
  //               : searchDetails?.areas_of_interest?.length > 0
  //               ? searchDetails?.areas_of_interest
  //               : parsedUserDetail?.areas_of_interest
  //               ? parsedUserDetail?.areas_of_interest
  //               : 'None',
  //         },
  //         {
  //           title: 'Additional interest',
  //           subTitle:
  //             searchDetails?.another_areas_of_interest === undefined
  //               ? parsedUserDetail?.another_areas_of_interest !== null
  //                 ? parsedUserDetail?.another_areas_of_interest
  //                 : parsedUserDetail?.another_areas_of_interest
  //                 ? parsedUserDetail?.another_areas_of_interest
  //                 : 'None'
  //               : searchDetails?.another_areas_of_interest?.length > 0
  //               ? searchDetails?.another_areas_of_interest
  //               : parsedUserDetail?.another_areas_of_interest
  //               ? parsedUserDetail?.another_areas_of_interest
  //               : 'None',
  //         },
  //         {
  //           title: 'Additional interest',
  //           subTitle:
  //             searchDetails?.any_other_areas_of_interest === undefined
  //               ? parsedUserDetail?.any_other_areas_of_interest !== null
  //                 ? parsedUserDetail?.any_other_areas_of_interest
  //                 : parsedUserDetail?.any_other_areas_of_interest
  //                 ? parsedUserDetail?.any_other_areas_of_interest
  //                 : 'None'
  //               : searchDetails?.any_other_areas_of_interest?.length > 0
  //               ? searchDetails?.any_other_areas_of_interest
  //               : parsedUserDetail?.any_other_areas_of_interest
  //               ? parsedUserDetail?.any_other_areas_of_interest
  //               : 'None',
  //         },
  //         {
  //           title: 'Preference',
  //           subTitle:
  //             searchDetails?.online_or_campus === undefined
  //               ? parsedUserDetail?.online_or_campus !== null
  //                 ? parsedUserDetail?.online_or_campus
  //                 : parsedUserDetail?.online_or_campus
  //                 ? parsedUserDetail?.online_or_campus
  //                 : 'None'
  //               : searchDetails?.online_or_campus?.length > 0
  //               ? searchDetails?.online_or_campus
  //               : parsedUserDetail?.online_or_campus
  //               ? parsedUserDetail?.online_or_campus
  //               : 'None',
  //         },
  //         {
  //           title: 'Enrollment timeline',
  //           subTitle:
  //             searchDetails?.can_complete_enrollment === undefined
  //               ? parsedUserDetail?.can_complete_enrollment !== null
  //                 ? parsedUserDetail?.can_complete_enrollment
  //                 : parsedUserDetail?.can_complete_enrollment
  //                 ? parsedUserDetail?.can_complete_enrollment
  //                 : 'None'
  //               : searchDetails?.can_complete_enrollment?.length > 0
  //               ? searchDetails?.can_complete_enrollment
  //               : parsedUserDetail?.can_complete_enrollment
  //               ? parsedUserDetail?.can_complete_enrollment
  //               : 'None',
  //         },
  //         {
  //           title: '',
  //           subTitle: '',
  //         },
  //         {
  //           title: 'Phone number',
  //           subTitle:
  //             searchDetails?.phone === undefined
  //               ? parsedUserDetail?.phone !== null
  //                 ? parsedUserDetail?.phone
  //                 : parsedUserDetail?.phone
  //                 ? parsedUserDetail?.phone
  //                 : 'None'
  //               : searchDetails?.phone?.length > 0
  //               ? searchDetails?.phone
  //               : parsedUserDetail?.phone
  //               ? parsedUserDetail?.phone
  //               : 'None',
  //         },
  //         {
  //           title: 'Time to contact',
  //           subTitle:
  //             searchDetails?.time_to_call === undefined
  //               ? parsedUserDetail?.time_to_call !== null
  //                 ? parsedUserDetail?.time_to_call
  //                 : parsedUserDetail?.time_to_call
  //                 ? parsedUserDetail?.time_to_call
  //                 : 'None'
  //               : searchDetails?.time_to_call?.length > 0
  //               ? searchDetails?.time_to_call
  //               : parsedUserDetail?.time_to_call
  //               ? parsedUserDetail?.time_to_call
  //               : 'None',
  //         },
  //         {
  //           title: '',
  //           subTitle: '',
  //         },
  //         {
  //           title: 'Email',
  //           subTitle:
  //             searchDetails?.email === undefined
  //               ? parsedUserDetail?.email !== null
  //                 ? parsedUserDetail?.email
  //                 : parsedUserDetail?.email
  //                 ? parsedUserDetail?.email
  //                 : 'None'
  //               : searchDetails?.email?.length > 0
  //               ? searchDetails?.email
  //               : parsedUserDetail?.email
  //               ? parsedUserDetail?.email
  //               : 'None',
  //         },
  //         {
  //           title: '',
  //           subTitle: '',
  //         },
  //         {
  //           title: '',
  //           subTitle: '',
  //         },
  //         {
  //           title: 'Street address',
  //           subTitle:
  //             searchDetails?.address_line1 === undefined
  //               ? parsedUserDetail?.address1 !== null
  //                 ? parsedUserDetail?.address1
  //                 : parsedUserDetail?.address1
  //                 ? parsedUserDetail?.address1
  //                 : 'None'
  //               : searchDetails?.address_line1?.length > 0
  //               ? searchDetails?.address_line1
  //               : parsedUserDetail?.address1
  //               ? parsedUserDetail?.address1
  //               : 'None',
  //         },
  //         {
  //           title: 'City',
  //           subTitle:
  //             searchDetails?.city === undefined
  //               ? parsedUserDetail?.city !== null
  //                 ? parsedUserDetail?.city
  //                 : parsedUserDetail?.city
  //                 ? parsedUserDetail?.city
  //                 : 'None'
  //               : searchDetails?.city?.length > 0
  //               ? searchDetails?.city
  //               : parsedUserDetail?.city
  //               ? parsedUserDetail?.city
  //               : 'None',
  //         },
  //         {
  //           title: 'State',
  //           subTitle:
  //             searchDetails?.state === undefined
  //               ? parsedUserDetail?.state !== null
  //                 ? parsedUserDetail?.state
  //                 : parsedUserDetail?.state
  //                 ? parsedUserDetail?.state
  //                 : 'None'
  //               : searchDetails?.state?.length > 0
  //               ? searchDetails?.state
  //               : parsedUserDetail?.state
  //               ? parsedUserDetail?.state
  //               : 'None',
  //         },
  //         {
  //           title: 'Zip Code',
  //           subTitle:
  //             searchDetails?.zip_code === undefined
  //               ? parsedUserDetail?.zip_code !== null
  //                 ? parsedUserDetail?.zip_code
  //                 : parsedUserDetail?.zip_code
  //                 ? parsedUserDetail?.zip_code
  //                 : 'None'
  //               : searchDetails?.zip_code?.length > 0
  //               ? searchDetails?.zip_code
  //               : parsedUserDetail?.zip_code
  //               ? parsedUserDetail?.zip_code
  //               : 'None',
  //         },
  //       ]
  //     )
  //   );

  //   // }
  // }, [searchDetails, parsedUserDetail]);

  useEffect(() => {
    setUserData();
  }, [paramDetails]);

  return (
    <MainWrapper>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          {paramDetails &&
            Object.keys(paramDetails).map((key) => {
              return (
                <Grid item xs={4} key={key}>
                  <ItemWrapper onClick={() => scrollIntoView(key)}>
                    <RegularPoppin title="true">
                      {key.replaceAll('_', ' ')}
                    </RegularPoppin>
                    <RegularPoppin values="true" description>
                      {paramDetails[key] ? paramDetails[key] : 'none'}
                    </RegularPoppin>
                  </ItemWrapper>
                </Grid>
              );
            })}
        </Grid>
      </Box>
    </MainWrapper>
  );
};

export default UserDetails;
