import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import SchoolToProceed from '../components/SchoolToProceed';
import MatchingWarmTransfer from '../components/MatchingWarmTransfer';

const LeftContentWrapper = styled('div')(() => ({
  paddingLeft: 90,
  paddingRight: 40,
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
              <MatchingWarmTransfer />
            </LeftContentWrapper>
          </Grid>
          <Grid item xs={6}>
            <RightContentWrapper>
              <SchoolToProceed />
            </RightContentWrapper>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Education;
