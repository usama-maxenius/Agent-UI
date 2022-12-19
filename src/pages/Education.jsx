import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import UserDetails from '../components/userDetail';
import EducationForm from '../components/educationForm';
import RightDrawer from '../components/rightDrawer';
import DisclosureHelp from '../components/disclosureHelp';
import DisclosureSecurity from '../components/disclosureSecurity';
import { useContextCustom } from '../store/context';
import { useSelector } from 'react-redux';

import CallerDetails from '../components/CallerDetails';

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
  height: '100vh',
}));
const Education = () => {
  const { state } = useContextCustom();
  let { mode } = useSelector((store) => store.InitReducer);
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={6}>
            <LeftContentWrapper expand={state.expand}>
              <UserDetails />
            </LeftContentWrapper>
          </Grid>
          <Grid item xs={6}>
            <RightContentWrapper>
              {mode ? <CallerDetails /> : <EducationForm />}
            </RightContentWrapper>
            <RightDrawer>
              {state.isSecurityDrawer && <DisclosureSecurity />}
              {state.isHelperDrawer && <DisclosureHelp />}
            </RightDrawer>
          </Grid>
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Education;
