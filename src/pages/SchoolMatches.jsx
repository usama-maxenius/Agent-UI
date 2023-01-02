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
import { warmTransfersData } from '../data/warmTransferData';
// import { filterAndMergeOffers } from '../helper/offersFilteration';

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
  const [selectedTab, setSelectedTab] = useState(1);

  const [isSelected, setIsSelected] = useState({
    directOffers: false,
    warmTransfers: false,
    externalOffers: false,
  });
  let [searchParams] = useSearchParams();
  const [offers, setOffers] = useState({
    directOffers: [],
    warmTransfers: [],
    externalOffers: [],
  });
  let { schoolsList } = useSelector((store) => store.InitReducer);

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
        warmOffers?.forEach((item) => {
          item.selected = item.selected ?? false;
          item.selected_program = item.selected_program ?? null;
          item.required = item.required ?? false;
        });

        let externalOffers = data?.filter(
          (item) =>
            item.result_type !== 'lead' && item.result_type !== 'transfer'
        );
        externalOffers = externalOffers?.length
          ? mergeSchoolPrograms(externalOffers)
          : externalOffers;
        externalOffers?.forEach((item) => {
          item.selected = item.selected ?? false;
          item.selected_program = item.selected_program ?? null;
          item.required = item.required ?? false;
        });

        let directOffers = data?.filter((item) => item.result_type === 'lead');
        directOffers = directOffers?.length
          ? mergeSchoolPrograms(directOffers)
          : directOffers;
        directOffers?.forEach((item) => {
          item.selected = item.selected ?? false;
          item.selected_program = item.selected_program ?? null;
          item.required = item.required ?? false;
        });

        setOffers({
          ...offers,
          directOffers,
          warmTransfers: warmOffers,
          externalOffers,
        });
      }
    })();
  }, [data]);

  useEffect(() => {
    // (async () => {
    //   if (schoolsList) await filterAndMergeOffers(schoolsList, offers);
    // })();
  }, [schoolsList]);

  useEffect(() => {
    if (selectedTab === 0) {
      return setIsSelected((prev) => ({
        ...prev,
        warmTransfers: offers.warmTransfers.some((o) => o.selected),
        directOffers: false,
        externalOffers: false,
      }));
    }
    if (selectedTab === 1) {
      console.log(offers.directOffers.some((o) => o.selected));
      return setIsSelected((prev) => ({
        ...prev,
        warmTransfers: false,
        directOffers: offers.directOffers.some((o) => o.selected),
        externalOffers: false,
      }));
    }
    if (selectedTab === 2) {
      return setIsSelected((prev) => ({
        ...prev,
        directOffers: false,
        warmTransfers: false,
        externalOffers: offers.externalOffers.some((o) => o.selected),
      }));
    }
  }, [offers, selectedTab]);

  const updateDirectOffersHandler = React.useCallback((val) => {
    if (val[0]?.result_type === 'transfer') {
      return setOffers((prev) => ({
        ...prev,
        warmTransfers: val,
      }));
    } else if (val[0]?.result_type === 'lead') {
      return setOffers((prev) => ({
        ...prev,
        directOffers: val,
      }));
    } else {
      return setOffers((prev) => ({
        ...prev,
        externalOffers: val,
      }));
    }
  }, []);

  const updateSelectedTabHandler = React.useCallback(
    (val) => setSelectedTab(val),
    []
  );
  const updatePopupHandler = React.useCallback((val) => setPopUp(val), []);
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
                selectedTab={selectedTab}
                updateHandler={updateDirectOffersHandler}
                updateSelectedTabHandler={updateSelectedTabHandler}
                updatePopupHandler={updatePopupHandler}
              />
            </LeftContentWrapper>
            <WarningPopOver popup={popup} setPopUp={setPopUp} />
          </Grid>
          <Grid item xs={6}>
            <RightContentWrapper>
              {selectedTab === 0 ? (
                isSelected.warmTransfers ? (
                  <SubmitMatch
                    state={offers.warmTransfers}
                    keyName="transfer"
                  />
                ) : (
                  <SchoolToProceed />
                )
              ) : (
                ''
              )}
              {selectedTab === 1 ? (
                isSelected.directOffers ? (
                  <SubmitMatch state={offers.directOffers} keyName="direct" />
                ) : (
                  <SchoolToProceed />
                )
              ) : (
                ''
              )}
              {selectedTab === 2 ? (
                isSelected.externalOffers ? (
                  <SubmitMatch
                    state={offers.externalOffers}
                    keyName="external"
                  />
                ) : (
                  <SchoolToProceed />
                )
              ) : (
                ''
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
