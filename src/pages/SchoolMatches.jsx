import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import SchoolToProceed from '../components/SchoolToProceed';
import MatchingWarmTransfer from '../components/MatchingWarmTransfer';
import { Outlet } from 'react-router-dom';
import WarningPopOver from '../components/warningPopOver';
import RightDrawer from '../components/rightDrawer';
import DisclosureHelp from '../components/disclosureHelp';
import DisclosureSecurity from '../components/disclosureSecurity';
import { useContextCustom } from '../store/context';
import DisclosureCallerDetails from '../components/disclosureCallerDetails';

const LeftContentWrapper = styled('div')((props) => ({
  paddingLeft: props.expand ? 160 : 87,
  paddingRight: 40,
  paddingTop: '65px',
  backgroundColor: '#F5F5F5',
  height: '768px',
  overflowY: 'hidden',
  filter: props.popup && 'blur(5px)',
}));

const RightContentWrapper = styled('div')(() => ({
  paddingRight: '5%',
  paddingTop: '65px',
  backgroundColor: '#FAFAFA',
  height: '768px',
}));

const Education = () => {
  const [popup, setPopUp] = useState(false);
  const { state } = useContextCustom();

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={6}>
            <LeftContentWrapper popup={popup} expand={state.expand}>
              <MatchingWarmTransfer setPopUp={setPopUp} />
            </LeftContentWrapper>
            <WarningPopOver popup={popup} setPopUp={setPopUp} />
          </Grid>
          <Grid item xs={6}>
            <RightContentWrapper>
              <Outlet />
            </RightContentWrapper>
            <RightDrawer>
              {state.isSecurityDrawer && <DisclosureSecurity />}
              {state.isHelperDrawer && <DisclosureHelp />}
              {state.isCallerDrawer && <DisclosureCallerDetails />}
            </RightDrawer>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Education;
