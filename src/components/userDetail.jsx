import React from 'react';
import {
  MainWrapper,
  RegularPoppin,
  ItemWrapper,
} from './styled/userDetails.style';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const data = [
  {
    title: 'Gender',
    subTitle: 'Male',
  },
  {
    title: 'First name',
    subTitle: 'Angel',
  },
  {
    title: 'Last name',
    subTitle: 'Rubio',
  },
  {
    title: 'HS graduation year',
    subTitle: '2022',
  },
  {
    title: 'US Degree',
    subTitle: 'yes',
  },
  {
    title: 'US Citizen',
    subTitle: 'Yes',
  },
  {
    title: 'Education Level',
    subTitle: 'Masters',
  },
  {
    title: 'Internet Access',
    subTitle: 'Yes',
  },
  {
    title: 'Year born',
    subTitle: '1990',
  },
  {
    title: 'US Military',
    subTitle: 'No',
  },
  {
    title: 'School in past 6 months',
    subTitle: 'Yes',
  },
  {
    title: '',
    subTitle: '',
  },
  {
    title: 'Primary interest',
    subTitle: 'Books',
  },
  {
    title: 'Additional interest',
    subTitle: 'Gaming',
  },
  {
    title: 'Additional interest',
    subTitle: 'None',
  },
  {
    title: 'Preference',
    subTitle: 'Done',
  },
  {
    title: 'Enrolment timeline',
    subTitle: 'September',
  },
  {
    title: '',
    subTitle: '',
  },
  {
    title: 'Enrolment timeline',
    subTitle: '929-205-3200',
  },
  {
    title: 'Time to contact',
    subTitle: 'any time',
  },
  {
    title: '',
    subTitle: '',
  },
  {
    title: 'Email',
    subTitle: 'Angel.rubio@gmail.com',
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
    subTitle: '14th Street',
  },
  {
    title: 'City',
    subTitle: 'New York',
  },
  {
    title: 'State',
    subTitle: 'New York',
  },
  {
    title: 'Zip Code',
    subTitle: '10001',
  },
];
const UserDetails = () => {
  return (
    <MainWrapper>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          {data.map((item, key) => {
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
