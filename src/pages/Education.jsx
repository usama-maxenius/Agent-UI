import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import UserDetails from '../components/userDetail';
import EducationForm from '../components/educationForm';

const LeftContentWrapper = styled('div')(() => ({
  paddingLeft: 90,
  paddingTop: '65px',
  backgroundColor: '#F5F5F5',
  height: 'calc(100vh - 65px )',
}));
const RightContentWrapper = styled('div')(() => ({
  paddingRight: '5%',
  paddingTop: '65px',
  backgroundColor: '#FAFAFA',
  height: 'calc(100vh - 65px )',
}));
const Education = () => {
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={6}>
            <LeftContentWrapper>
              <UserDetails />
            </LeftContentWrapper>
          </Grid>
          <Grid item xs={6}>
            <RightContentWrapper>
              <EducationForm />
            </RightContentWrapper>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Education;
