/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import SchoolToProceed from '../components/SchoolToProceed';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import DisclosureCallerDetails from '../components/disclosureCallerDetails';
import DisclosureHelp from '../components/disclosureHelp';
import DisclosureSecurity from '../components/disclosureSecurity';
import RightDrawer from '../components/rightDrawer';
import SubmitMatch from '../components/submitMatch';
import WarningPopOver from '../components/warningPopOver';
import { ResultSchools } from '../store/action/searchAPI';
import { useContextCustom } from '../store/context';
import OffersTab from '../components/offers';
import MatchedSuccess from '../components/matchedSuccess';
import { filterAndMergeOffers } from '../helper/offersFilteration';

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
  // useSchoolResultsLoop();
  const { state } = useContextCustom();
  const { schoolsList } = useSelector((store) => store.InitReducer);
  const [successCounts, setSuccessCounts] = useState({
    show: false,
    count: 0,
  });
  const [selectedTab, setSelectedTab] = useState(1);

  const [isSelected, setIsSelected] = useState({
    directOffers: false,
    warmTransfers: false,
    externalOffers: false,
  });
  let [searchParams] = useSearchParams();
  const [offers, setOffers] = useState({
    warmTransfers: [],
    directOffers: [],
    externalOffers: [],
  });

  useEffect(() => {
    let mounted = true;
    let interval;
    let timeoutInterval;
    (async () => {
      if (mounted) {
        await new Promise((resolve) => {
          interval = setInterval(
            async () =>
              resolve(
                await dispatch(ResultSchools(searchParams.get('search')))
              ),
            5000
          );
        });

        timeoutInterval = setTimeout(() => clearInterval(interval), 18000);
        return clearTimeout(timeoutInterval);
      }
    })();
    return () => {
      mounted = false;
      clearInterval(interval);
      clearTimeout(timeoutInterval);
    };
  }, []);

  useEffect(() => {
    (async () => {
      if (schoolsList)
        await filterAndMergeOffers(schoolsList, offers, updateOffersHandler);
    })();
  }, [schoolsList]);

  useEffect(() => {
    if (selectedTab === 0) {
      return setIsSelected((prev) => ({
        ...prev,
        warmTransfers: offers.warmTransfers?.some((o) => o.selected),
        directOffers: false,
        externalOffers: false,
      }));
    }
    if (selectedTab === 1) {
      return setIsSelected((prev) => ({
        ...prev,
        warmTransfers: false,
        directOffers: offers.directOffers?.some((o) => o.selected),
        externalOffers: false,
      }));
    }
    if (selectedTab === 2) {
      return setIsSelected((prev) => ({
        ...prev,
        directOffers: false,
        warmTransfers: false,
        externalOffers: offers.externalOffers?.some((o) => o.selected),
      }));
    }
  }, [offers, selectedTab]);

  function updateOffersHandler(val) {
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
  }

  const updateSelectedTabHandler = React.useCallback(
    (val) => setSelectedTab(val),
    []
  );
  const updateSuccessCountsHandler = React.useCallback(
    (show, count) =>
      setSuccessCounts((prev) => ({
        ...prev,
        show,
        count,
      })),
    []
  );
  const updatePopupHandler = React.useCallback((val) => setPopUp(val), []);
  const offerName =
    selectedTab === 0 ? 'WARM' : selectedTab === 1 ? 'DIRECT' : 'EXTERNAL';
  let element = document.getElementById('main-wrapper');

  if (element?.classList?.contains('main-page')) {
    element?.classList?.remove('main-page');
  }

  element?.classList?.add('school-page');
  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1 }}>
        {successCounts.show ? (
          <MatchedSuccess count={successCounts.count} offerName={offerName} />
        ) : (
          <Grid container>
            <Grid item xs={6}>
              <LeftContentWrapper popup={popup} expand={state.expand}>
                <OffersTab
                  state={offers}
                  selectedTab={selectedTab}
                  updateHandler={updateOffersHandler}
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
                      updateOffersHandler={updateOffersHandler}
                      updateSuccessCountsHandler={updateSuccessCountsHandler}
                    />
                  ) : (
                    <SchoolToProceed />
                  )
                ) : (
                  ''
                )}
                {selectedTab === 1 ? (
                  isSelected.directOffers ? (
                    <SubmitMatch
                      state={offers.directOffers}
                      keyName="direct"
                      updateOffersHandler={updateOffersHandler}
                      updateSuccessCountsHandler={updateSuccessCountsHandler}
                    />
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
                      updateOffersHandler={updateOffersHandler}
                      updateSuccessCountsHandler={updateSuccessCountsHandler}
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
        )}
      </Box>
    </React.Fragment>
  );
};

export default React.memo(Education);
