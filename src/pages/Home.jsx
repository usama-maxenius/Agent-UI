import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import React from 'react';
import { MainWrapper } from '../components/styled/wecomeNote.style';
import UserDetails from '../components/userDetail';
import WelcomeNotes from '../components/welcomeNotes';
import { useContextCustom } from '../store/context';

const LeftContentWrapper = styled('div')(({ expand }) => ({
  paddingLeft: expand ? 160 : 87,
  paddingTop: '65px',
  backgroundColor: '#F5F5F5',
  height: '100%',
}));
const RightContentWrapper = styled('div')(() => ({
  paddingRight: '5%',
  paddingTop: '65px',
  backgroundColor: '#FAFAFA',
  height: '100%',
}));
const Home = () => {
  let expand = useContextCustom().state.expand;

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, height: '100%' }}>
        <Grid container sx={{ height: '100%' }}>
          <Grid item xs={6}>
            <LeftContentWrapper expand={expand}>
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
