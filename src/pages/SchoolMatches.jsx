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
import OffersTab from '../components/offers';
import { mergeSchoolPrograms } from '../helper/mergeSchoolPrograms';
import { useSchoolResults } from '../hooks/useOffers';

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
  const dispatch = useDispatch();
  const { data } = useSchoolResults();
  const { state } = useContextCustom();
  const [isSelected, setIsSelected] = useState({
    directOffers: false,
    warmOffers: false,
    externalOffers: false,
  });
  let [searchParams] = useSearchParams();
  const [offers, setOffers] = useState({
    directOffers: [],
    warmOffers: [],
    externalOffers: [],
  });
  let { schoolsList, selectedSchools } = useSelector(
    (store) => store.InitReducer
  );

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

  useEffect(() => {
    (async () => {
      if (data) {
        let warmOffers = data?.filter(
          (item) => item.result_type === 'transfer' && item
        );
        warmOffers = warmOffers?.length
          ? mergeSchoolPrograms(warmOffers)
          : warmOffers;

        let externalOffers = data?.filter(
          (item) =>
            item.result_type !== 'lead' && item.result_type !== 'transfer'
        );
        externalOffers = externalOffers?.length
          ? mergeSchoolPrograms(externalOffers)
          : externalOffers;

        let directOffers = data?.filter((item) => item.result_type === 'lead');
        directOffers = directOffers?.length
          ? mergeSchoolPrograms(directOffers)
          : directOffers;
        directOffers?.forEach((item) => {
          item.selected = item.selected ?? false;
          item.selected_program = item.selected_program ?? null;
        });

        setOffers({
          ...offers,
          directOffers,
          warmOffers,
          externalOffers,
        });
      }
    })();
  }, [data]);

  useEffect(() => {
    const isSelectedDirect = offers.directOffers.find((o) => o.selected);
    setIsSelected({
      ...isSelected,
      directOffers: isSelectedDirect,
    });
  }, [offers]);

  const updateDirectOffersHandler = React.useCallback((val) => {
    setOffers({
      ...offers,
      directOffers: val,
    });
  }, []);

  let element = document.getElementById('main-wrapper');

  if (element?.classList?.contains('main-page')) {
    element?.classList?.remove('main-page');
  }

  element?.classList?.add('school-page');
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container>
          <Grid item xs={6}>
            <LeftContentWrapper popup={popup} expand={state.expand}>
              <OffersTab
                state={offers}
                updateHandler={updateDirectOffersHandler}
              />
              {/* <MatchingWarmTransfer setPopUp={setPopUp} /> */}
            </LeftContentWrapper>
            <WarningPopOver popup={popup} setPopUp={setPopUp} />
          </Grid>
          <Grid item xs={6}>
            <RightContentWrapper>
              {/* <Outlet /> */}
              {isSelected.directOffers ? (
                <SubmitMatch state={offers.directOffers} />
              ) : (
                <SchoolToProceed />
              )}
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
