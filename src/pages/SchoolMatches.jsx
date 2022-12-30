/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import SchoolToProceed from '../components/SchoolToProceed';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, useSearchParams } from 'react-router-dom';
import DisclosureCallerDetails from '../components/disclosureCallerDetails';
import DisclosureHelp from '../components/disclosureHelp';
import DisclosureSecurity from '../components/disclosureSecurity';
import MatchingWarmTransfer from '../components/MatchingWarmTransfer';
import RightDrawer from '../components/rightDrawer';
import SubmitMatch from '../components/submitMatch';
import WarningPopOver from '../components/warningPopOver';
import { ResultSchools } from '../store/action/searchAPI';
import { useContextCustom } from '../store/context';

const LeftContentWrapper = styled('div')((props) => ({
  paddingLeft: props.expand ? 160 : 87,
  paddingRight: 40,
  paddingTop: '65px',
  backgroundColor: '#F5F5F5',
  height: '105vh',
  overflowY: 'hidden',
  filter: props.popup && 'blur(5px)',
}));

const RightContentWrapper = styled('div')(() => ({
  paddingRight: '5%',
  paddingTop: '65px',
  backgroundColor: '#FAFAFA',
  height: '100%',
}));

const Education = () => {
  const [popup, setPopUp] = useState(false);
  const { state } = useContextCustom();
  let [searchParams] = useSearchParams();
  let { schoolsList, selectedSchools } = useSelector(
    (store) => store.InitReducer
  );
  const dispatch = useDispatch();

  let element = document.getElementById('main-wrapper');

  if (element?.classList?.contains('main-page')) {
    element?.classList?.remove('main-page');
  }

  element?.classList?.add('school-page');

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(ResultSchools(searchParams.get('search')));
    }, 2500);

    const timeoutInterval = setTimeout(() => {
      clearInterval(interval);
    }, 180000);

    return () => {
      clearInterval(interval);
      clearInterval(timeoutInterval);
    };

    // if (!schoolsList) {
    //   dispatch(ResultSchools(searchParams.get('search')));
    // }
  }, [schoolsList]);

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
              {/* <Outlet /> */}
              {selectedSchools.length ? <SubmitMatch /> : <SchoolToProceed />}
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
