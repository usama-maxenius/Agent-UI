import React, { useState } from 'react';
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
  const [value, setValue] = useState({
    gender: '',
    first_name: '',
    last_name: '',
    email: '',
    phone: '',
    address_line1: '',
    city: '',
    state: '',
    zip_code: '',
    computer_internet_access: '',
    age: '',
    hsyear: '',
    current_education_level: '',
    us_citizen: '',
    military_status: '',
    online_or_campus: '',
    can_complete_enrollment: '',
    is_contacted_by_school: '',
    graduated_in_us: '',
    time_to_call: '',
    areas_of_interest: '',
    another_areas_of_interest: '',
    any_other_areas_of_interest: '',
  });

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
              {mode ? (
                <CallerDetails state={value} setState={setValue} />
              ) : (
                <EducationForm state={value} setState={setValue} />
              )}
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
