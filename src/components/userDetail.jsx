import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  ItemWrapper,
  MainWrapper,
  // eslint-disable-next-line prettier/prettier
  RegularPoppin,
} from './styled/userDetails.style';

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

  const [userData, setUserData] = useState([
    {
      title: 'Gender',
      subTitle: 'None',
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

  useEffect(() => {
    if (searchDetails !== undefined)
      setUserData([
        {
          title: 'Gender',
          subTitle:
            searchDetails.gender.length > 0
              ? searchDetails.gender === 'm'
                ? 'male'
                : 'female'
              : 'None',
        },
        {
          title: 'First name',
          subTitle:
            searchDetails.first_name.length > 0
              ? searchDetails.first_name
              : 'None',
        },
        {
          title: 'Last name',
          subTitle:
            searchDetails.last_name.length > 0
              ? searchDetails.last_name
              : 'None',
        },
        {
          title: 'HS graduation year',
          subTitle: searchDetails?.hsyear >= 0 ? searchDetails?.hsyear : 'None',
        },
        {
          title: 'US Degree',
          subTitle:
            searchDetails.graduated_in_us?.length > 0
              ? searchDetails.graduated_in_us
              : 'None',
        },
        {
          title: 'US Citizen',
          subTitle:
            searchDetails?.us_citizen.length > 0
              ? searchDetails?.us_citizen
              : 'None',
        },
        {
          title: 'Education Level',
          subTitle:
            searchDetails?.current_education_level.length > 0
              ? searchDetails.current_education_level
              : 'None',
        },
        {
          title: 'Internet Access',
          subTitle:
            searchDetails?.computer_internet_access.length > 0
              ? searchDetails.computer_internet_access
              : 'None',
        },
        {
          title: 'Year born',
          subTitle: searchDetails.age >= 0 ? searchDetails.age : 'None',
        },
        {
          title: 'US Military',
          subTitle:
            searchDetails.military_status?.length > 0
              ? searchDetails.military_status
              : 'None',
        },
        {
          title: 'School in past 6 months',
          subTitle:
            searchDetails.is_contacted_by_school?.length > 0
              ? searchDetails.is_contacted_by_school === '0'
                ? 'yes'
                : 'no'
              : 'None',
        },
        {
          title: '',
          subTitle: '',
        },
        {
          title: 'Primary interest',
          subTitle:
            searchDetails.areas_of_interest?.length > 0
              ? searchDetails.areas_of_interest
              : 'None',
        },
        {
          title: 'Additional interest',
          subTitle:
            searchDetails.another_areas_of_interest?.length > 0
              ? searchDetails.another_areas_of_interest
              : 'None',
        },
        {
          title: 'Additional interest',
          subTitle:
            searchDetails.any_other_areas_of_interest?.length > 0
              ? searchDetails.any_other_areas_of_interest
              : 'None',
        },
        {
          title: 'Preference',
          subTitle:
            searchDetails.online_or_campus?.length > 0
              ? searchDetails.online_or_campus
              : 'None',
        },
        {
          title: 'Enrollment timeline',
          subTitle:
            searchDetails?.can_complete_enrollment?.length > 0
              ? searchDetails?.can_complete_enrollment
              : 'None',
        },
        {
          title: '',
          subTitle: '',
        },
        {
          title: 'Phone number',
          subTitle:
            searchDetails.phone?.length > 0 ? searchDetails.phone : 'None',
        },
        {
          title: 'Time to contact',
          subTitle:
            searchDetails.time_to_call?.length > 0
              ? searchDetails.time_to_call
              : 'None',
        },
        {
          title: '',
          subTitle: '',
        },
        {
          title: 'Email',
          subTitle:
            searchDetails.email?.length > 0 ? searchDetails.email : 'None',
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
            searchDetails.address_line1?.length > 0
              ? searchDetails.address_line1
              : 'None',
        },
        {
          title: 'City',
          subTitle:
            searchDetails.city?.length > 0 ? searchDetails.city : 'None',
        },
        {
          title: 'State',
          subTitle:
            searchDetails.state?.length > 0 ? searchDetails.state : 'None',
        },
        {
          title: 'Zip Code',
          subTitle:
            searchDetails.zip_code?.length > 0
              ? searchDetails.zip_code
              : 'None',
        },
      ]);
  }, [searchDetails]);

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
