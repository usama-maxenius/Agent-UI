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
  const [params] = useSearchParams();

  const [userData, setUserData] = useState([
    {
      title: 'Gender',
      subTitle: 'none',
    },
    {
      title: 'First name',
      subTitle: 'None',
    },
    {
      title: 'Last name',
      subTitle: 'None',
    },
    {
      title: 'HS graduation year',
      subTitle: 'None',
    },
    {
      title: 'US Degree',
      subTitle: 'None',
    },
    {
      title: 'US Citizen',
      subTitle: 'None',
    },
    {
      title: 'Education Level',
      subTitle: 'None',
    },
    {
      title: 'Internet Access',
      subTitle: 'None',
    },
    {
      title: 'Year born',
      subTitle: 'None',
    },
    {
      title: 'US Military',
      subTitle: 'None',
    },
    {
      title: 'School in past 6 months',
      subTitle: 'None',
    },
    {
      title: '',
      subTitle: '',
    },
    {
      title: 'Primary interest',
      subTitle: 'None',
    },
    {
      title: 'Additional interest',
      subTitle: 'None',
    },
    {
      title: 'Additional interest',
      subTitle: 'None',
    },
    {
      title: 'Preference',
      subTitle: 'None',
    },
    {
      title: 'Enrollment timeline',
      subTitle: 'None',
    },
    {
      title: '',
      subTitle: '',
    },
    {
      title: 'Phone number',
      subTitle: 'None',
    },
    {
      title: 'Time to contact',
      subTitle: 'None',
    },
    {
      title: '',
      subTitle: '',
    },
    {
      title: 'Email',
      subTitle: 'None',
    },
    {
      title: '',
      subTitle: '',
    },
    {
      title: '',
      subTitle: '',
    },
    {
      title: 'Street address',
      subTitle: 'None',
    },
    {
      title: 'City',
      subTitle: 'None',
    },
    {
      title: 'State',
      subTitle: 'None',
    },
    {
      title: 'Zip Code',
      subTitle: 'None',
    },
  ]);

  const getUserDetail = localStorage.getItem('form');
  const parsedUserDetails = getUserDetail && JSON.parse(getUserDetail);
  const parsedUserDetail = useRef(parsedUserDetails);

  useEffect(() => {
    setUserData(
      (prev) => (
        { ...prev },
        [
          {
            title: 'Gender',
            subTitle:
              searchDetails?.gender === undefined
                ? params?.get('gender') !== null
                  ? params?.get('gender')
                  : parsedUserDetail.current.gender
                  ? parsedUserDetail.current.gender
                  : 'None'
                : searchDetails?.gender.length > 0
                ? searchDetails?.gender === 'm'
                  ? 'male'
                  : 'female'
                : parsedUserDetail.current.gender
                ? parsedUserDetail.current.gender
                : 'None',
          },
          {
            title: 'First name',
            subTitle:
              searchDetails?.first_name === undefined
                ? params?.get('first_name') !== null
                  ? params?.get('first_name')
                  : parsedUserDetail.current.first_name
                  ? parsedUserDetail.current.first_name
                  : 'None'
                : searchDetails?.first_name.length > 0
                ? searchDetails?.first_name
                : parsedUserDetail.current.first_name
                ? parsedUserDetail.current.first_name
                : 'None',
          },
          {
            title: 'Last name',
            subTitle:
              searchDetails?.last_name === undefined
                ? params?.get('last_name') !== null
                  ? params?.get('last_name')
                  : parsedUserDetail.last_name
                  ? parsedUserDetail.last_name
                  : 'None'
                : searchDetails?.last_name?.length > 0
                ? searchDetails?.last_name
                : parsedUserDetail.last_name
                ? parsedUserDetail.last_name
                : 'None',
          },
          {
            title: 'HS graduation year',
            subTitle:
              searchDetails?.hsyear === undefined
                ? params?.get('high_school_graduation_year') !== null
                  ? params?.get('high_school_graduation_year')
                  : parsedUserDetail.hsyear
                  ? parsedUserDetail.hsyear
                  : 'None'
                : searchDetails?.hsyear >= 0
                ? searchDetails?.hsyear
                : parsedUserDetail.hsyear
                ? parsedUserDetail.hsyear
                : 'None',
          },
          {
            title: 'US Degree',
            subTitle:
              searchDetails?.graduated_in_us === undefined
                ? params?.get('graduated_in_us') !== null
                  ? params?.get('graduated_in_us')
                  : parsedUserDetail.graduated_in_us
                  ? parsedUserDetail.graduated_in_us
                  : 'None'
                : searchDetails?.graduated_in_us?.length > 0
                ? searchDetails?.graduated_in_us
                : parsedUserDetail.graduated_in_us
                ? parsedUserDetail.graduated_in_us
                : 'None',
          },
          {
            title: 'US Citizen',
            subTitle:
              searchDetails?.us_citizen === undefined
                ? params?.get('us_citizen') !== null
                  ? params?.get('us_citizen')
                  : parsedUserDetail.us_citizen
                  ? parsedUserDetail.us_citizen
                  : 'None'
                : searchDetails?.us_citizen.length > 0
                ? searchDetails?.us_citizen
                : parsedUserDetail.us_citizen
                ? parsedUserDetail.us_citizen
                : 'None',
          },
          {
            title: 'Education Level',
            subTitle:
              searchDetails?.current_education_level === undefined
                ? params?.get('current_education_level') !== null
                  ? params?.get('current_education_level')
                  : parsedUserDetail.current_education_level
                  ? parsedUserDetail.current_education_level
                  : 'None'
                : searchDetails?.current_education_level.length > 0
                ? searchDetails?.current_education_level
                : parsedUserDetail.current_education_level
                ? parsedUserDetail.current_education_level
                : 'None',
          },
          {
            title: 'Internet Access',
            subTitle:
              searchDetails?.computer_internet_access === undefined
                ? params?.get('computer_internet_access') !== null
                  ? params?.get('computer_internet_access')
                  : parsedUserDetail.computer_internet_access
                  ? parsedUserDetail.computer_internet_access
                  : 'None'
                : searchDetails?.computer_internet_access.length > 0
                ? searchDetails?.computer_internet_access
                : parsedUserDetail.computer_internet_access
                ? parsedUserDetail.computer_internet_access
                : 'None',
          },
          {
            title: 'Year born',
            subTitle:
              searchDetails?.age === undefined
                ? params?.get('age') !== null
                  ? params?.get('age')
                  : parsedUserDetail.age
                  ? parsedUserDetail.age
                  : 'None'
                : searchDetails?.age >= 0
                ? searchDetails?.age
                : parsedUserDetail.age
                ? parsedUserDetail.age
                : 'None',
          },
          {
            title: 'US Military',
            subTitle:
              searchDetails?.military_status === undefined
                ? params?.get('military') !== null
                  ? params?.get('military')
                  : parsedUserDetail.military
                  ? parsedUserDetail.military
                  : 'None'
                : searchDetails?.military_status?.length > 0
                ? searchDetails?.military_status
                : parsedUserDetail.military
                ? parsedUserDetail.military
                : 'None',
          },
          {
            title: 'School in past 6 months',
            subTitle:
              searchDetails?.is_contacted_by_school === undefined
                ? params?.get('is_contacted_by_school') !== null
                  ? params?.get('is_contacted_by_school')
                  : parsedUserDetail.is_contacted_by_school
                  ? parsedUserDetail.is_contacted_by_school
                  : 'None'
                : searchDetails?.is_contacted_by_school?.length > 0
                ? searchDetails?.is_contacted_by_school === '0'
                  ? 'yes'
                  : 'no'
                : parsedUserDetail.is_contacted_by_school
                ? parsedUserDetail.is_contacted_by_school
                : 'None',
          },
          {
            title: '',
            subTitle: '',
          },
          {
            title: 'Primary interest',
            subTitle:
              searchDetails?.areas_of_interest === undefined
                ? params?.get('areas_of_interest') !== null
                  ? params?.get('areas_of_interest')
                  : parsedUserDetail.areas_of_interest
                  ? parsedUserDetail.areas_of_interest
                  : 'None'
                : searchDetails?.areas_of_interest?.length > 0
                ? searchDetails?.areas_of_interest
                : parsedUserDetail.areas_of_interest
                ? parsedUserDetail.areas_of_interest
                : 'None',
          },
          {
            title: 'Additional interest',
            subTitle:
              searchDetails?.another_areas_of_interest === undefined
                ? params?.get('another_areas_of_interest') !== null
                  ? params?.get('another_areas_of_interest')
                  : parsedUserDetail.another_areas_of_interest
                  ? parsedUserDetail.another_areas_of_interest
                  : 'None'
                : searchDetails?.another_areas_of_interest?.length > 0
                ? searchDetails?.another_areas_of_interest
                : parsedUserDetail.another_areas_of_interest
                ? parsedUserDetail.another_areas_of_interest
                : 'None',
          },
          {
            title: 'Additional interest',
            subTitle:
              searchDetails?.any_other_areas_of_interest === undefined
                ? params?.get('any_other_areas_of_interest') !== null
                  ? params?.get('any_other_areas_of_interest')
                  : parsedUserDetail.any_other_areas_of_interest
                  ? parsedUserDetail.any_other_areas_of_interest
                  : 'None'
                : searchDetails?.any_other_areas_of_interest?.length > 0
                ? searchDetails?.any_other_areas_of_interest
                : parsedUserDetail.any_other_areas_of_interest
                ? parsedUserDetail.any_other_areas_of_interest
                : 'None',
          },
          {
            title: 'Preference',
            subTitle:
              searchDetails?.online_or_campus === undefined
                ? params?.get('online_or_campus') !== null
                  ? params?.get('online_or_campus')
                  : parsedUserDetail.online_or_campus
                  ? parsedUserDetail.online_or_campus
                  : 'None'
                : searchDetails?.online_or_campus?.length > 0
                ? searchDetails?.online_or_campus
                : parsedUserDetail.online_or_campus
                ? parsedUserDetail.online_or_campus
                : 'None',
          },
          {
            title: 'Enrollment timeline',
            subTitle:
              searchDetails?.can_complete_enrollment === undefined
                ? params?.get('can_complete_enrollment') !== null
                  ? params?.get('can_complete_enrollment')
                  : parsedUserDetail.can_complete_enrollment
                  ? parsedUserDetail.can_complete_enrollment
                  : 'None'
                : searchDetails?.can_complete_enrollment?.length > 0
                ? searchDetails?.can_complete_enrollment
                : parsedUserDetail.can_complete_enrollment
                ? parsedUserDetail.can_complete_enrollment
                : 'None',
          },
          {
            title: '',
            subTitle: '',
          },
          {
            title: 'Phone number',
            subTitle:
              searchDetails?.phone === undefined
                ? params?.get('phone_number') !== null
                  ? params?.get('phone_number')
                  : parsedUserDetail.phone
                  ? parsedUserDetail.phone
                  : 'None'
                : searchDetails?.phone?.length > 0
                ? searchDetails?.phone
                : parsedUserDetail.phone
                ? parsedUserDetail.phone
                : 'None',
          },
          {
            title: 'Time to contact',
            subTitle:
              searchDetails?.time_to_call === undefined
                ? params?.get('time_to_call') !== null
                  ? params?.get('time_to_call')
                  : parsedUserDetail.time_to_call
                  ? parsedUserDetail.time_to_call
                  : 'None'
                : searchDetails?.time_to_call?.length > 0
                ? searchDetails?.time_to_call
                : parsedUserDetail.time_to_call
                ? parsedUserDetail.time_to_call
                : 'None',
          },
          {
            title: '',
            subTitle: '',
          },
          {
            title: 'Email',
            subTitle:
              searchDetails?.email === undefined
                ? params?.get('email') !== null
                  ? params?.get('email')
                  : parsedUserDetail.email
                  ? parsedUserDetail.email
                  : 'None'
                : searchDetails?.email?.length > 0
                ? searchDetails?.email
                : parsedUserDetail.email
                ? parsedUserDetail.email
                : 'None',
          },
          {
            title: '',
            subTitle: '',
          },
          {
            title: '',
            subTitle: '',
          },
          {
            title: 'Street address',
            subTitle:
              searchDetails?.address_line1 === undefined
                ? params?.get('address1') !== null
                  ? params?.get('address1')
                  : parsedUserDetail.address1
                  ? parsedUserDetail.address1
                  : 'None'
                : searchDetails?.address_line1?.length > 0
                ? searchDetails?.address_line1
                : parsedUserDetail.address1
                ? parsedUserDetail.address1
                : 'None',
          },
          {
            title: 'City',
            subTitle:
              searchDetails?.city === undefined
                ? params?.get('city') !== null
                  ? params?.get('city')
                  : parsedUserDetail.city
                  ? parsedUserDetail.city
                  : 'None'
                : searchDetails?.city?.length > 0
                ? searchDetails?.city
                : parsedUserDetail.city
                ? parsedUserDetail.city
                : 'None',
          },
          {
            title: 'State',
            subTitle:
              searchDetails?.state === undefined
                ? params?.get('state') !== null
                  ? params?.get('state')
                  : parsedUserDetail.state
                  ? parsedUserDetail.state
                  : 'None'
                : searchDetails?.state?.length > 0
                ? searchDetails?.state
                : parsedUserDetail.state
                ? parsedUserDetail.state
                : 'None',
          },
          {
            title: 'Zip Code',
            subTitle:
              searchDetails?.zip_code === undefined
                ? params?.get('zip') !== null
                  ? params?.get('zip')
                  : parsedUserDetail.zip_code
                  ? parsedUserDetail.zip_code
                  : 'None'
                : searchDetails?.zip_code?.length > 0
                ? searchDetails?.zip_code
                : parsedUserDetail.zip_code
                ? parsedUserDetail.zip_code
                : 'None',
          },
        ]
      )
    );
    // }
  }, [searchDetails, parsedUserDetail]);

  return (
    <MainWrapper>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          {userData.map((item, key) => {
            return (
              <Grid item xs={4} key={key}>
                <ItemWrapper>
                  <RegularPoppin title>{item.title}</RegularPoppin>
                  <RegularPoppin description>{item.subTitle}</RegularPoppin>
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
