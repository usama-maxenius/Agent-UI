import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import SchoolToProceed from '../components/SchoolToProceed';
import MatchingWarmTransfer from '../components/MatchingWarmTransfer';
import { Outlet } from 'react-router-dom';
import WarningPopOver from '../components/warningPopOver';

const LeftContentWrapper = styled('div')((props) => ({
  paddingLeft: 90,
  paddingRight: 40,
  paddingTop: '65px',
  backgroundColor: '#F5F5F5',
  height: '100vh',
  overflowY: 'hidden',
  filter: props.popup && 'blur(5px)',
}));

const RightContentWrapper = styled('div')(() => ({
  paddingRight: '5%',
  paddingTop: '65px',
  backgroundColor: '#FAFAFA',
  height: '100vh',
}));

const Education = () => {
  const [popup, setPopUp] = useState(false);

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={6}>
            <LeftContentWrapper popup={popup}>
              <MatchingWarmTransfer setPopUp={setPopUp} />
            </LeftContentWrapper>
            <WarningPopOver popup={popup} setPopUp={setPopUp} />
          </Grid>
          <Grid item xs={6}>
            <RightContentWrapper>
              <Outlet />
            </RightContentWrapper>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Education;
