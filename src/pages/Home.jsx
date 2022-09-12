import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import UserDetails from '../components/userDetail';
import WelcomeNotes from '../components/welcomeNotes';
import { MainWrapper } from '../components/styled/wecomeNote.style';

const LeftContentWrapper = styled('div')(() => ({
  paddingLeft: 90,
  paddingTop: '65px',
  backgroundColor: '#F5F5F5',
  height: '100vh',
}));
const RightContentWrapper = styled('div')(() => ({
  paddingRight: '5%',
  paddingTop: '65px',
  backgroundColor: '#FAFAFA',
  height: '100vh',
}));
const Home = () => {
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
              <MainWrapper>
                <WelcomeNotes />
              </MainWrapper>
            </RightContentWrapper>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Home;
