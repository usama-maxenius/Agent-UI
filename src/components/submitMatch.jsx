/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded';
import RecommendRoundedIcon from '@mui/icons-material/RecommendRounded';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react';
import {
  IconButton,
  IconWrapper,
  MainWrapper,
} from './styled/educationForm.style';
import { RecordingDisclosed } from './styled/wecomeNote.style';
import { useContextCustom } from '../store/context';
import constant from '../store/constant';
import { useSearchParams } from 'react-router-dom';
import { directOffersSubmit, submitOffer } from '../services/submitOffer';
import SubmittingLoading from '../components/submittingMatchesLoader';
import { useTransferResults } from '../hooks/useTransfers';
import Dropdown from './dropdown/index';
import { advisorData } from '../data/advisorData';
import { checkQuestionValidation } from '../helper/offersFilteration';

const Wrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'calc(100vh - 250px )',
}));

const submitMatch = ({
  state,
  keyName,
  updateOffersHandler,
  updateSuccessCountsHandler,
}) => {
  const { dispatch } = useContextCustom();
  const [selectedOffers, setSelectedOffers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [advisorOptions, setAdvisorOptions] = useState([]);
  const [transferSubmit, setTransferSubmit] = useState({
    question_key: '',
    question_value: '',
    result_identifier: '',
    answers: [],
  });

  const [transfersBody, setTransfersBody] = useState({
    result_identifier: '',
    answers: [],
  });
  const { data } = useTransferResults(
    keyName !== 'direct' ? transfersBody : ''
  );

  useEffect(() => {
    const advisors = data?.Advisors?.length
      ? data?.Advisors
      : advisorData.Advisors;
    const options = advisors?.map((itm) => {
      itm.OptionLabel = itm.AdvisorName;
      itm.OptionValue = itm.AdvisorId;
      return itm;
    });
    setAdvisorOptions(options);

    return () => {
      setAdvisorOptions([]);
    };
  }, [data]);

  useEffect(() => {
    const findSelectedOffers = state?.filter((offer) => offer.selected);
    setSelectedOffers(findSelectedOffers);
  }, [state]);

  useEffect(() => {
    if (keyName === 'transfer') {
      const set_identifier =
        selectedOffers.length > 0
          ? selectedOffers[0]?.result_set_identifier
          : '';
      const answers =
        selectedOffers.length > 0 ? selectedOffers[0]?.questions : [];
      setTransfersBody((prev) => ({
        ...prev,
        result_identifier: set_identifier,
        answers: answers,
      }));
      setTransferSubmit((prev) => ({
        ...prev,
        result_identifier: set_identifier,
        answers: answers,
      }));
    }
  }, [selectedOffers]);

  const submit = async () => {
    setLoading(true);
    if (keyName === 'direct') {
      const { error, data } = await checkQuestionValidation(state);
      if (error) {
        await updateOffersHandler(data);
      } else {
        const { count } = await directOffersSubmit(state);
        console.log('🚀 ~ file: submitMatch.jsx:96 ~ submit ~ count', count);
        if (count > 0) await updateSuccessCountsHandler(true, count);
      }
    }
    if (keyName === 'transfer') {
      await submitOffer(transferSubmit);
    }
    setLoading(false);
  };

  const dropdownClickHandler = React.useCallback((obj) => {
    return setTransferSubmit((prev) => ({
      ...prev,
      question_key: data?.AdvisorFieldName,
      question_value: obj?.OptionValue,
    }));
  }, []);

  return loading ? (
    <SubmittingLoading />
  ) : (
    <MainWrapper>
      <Grid container>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <IconWrapper>
            <IconButton
              onClick={() => {
                dispatch({
                  type: constant.HELP_DRAWER,
                });
              }}
            >
              <LiveHelpRoundedIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                dispatch({
                  type: constant.SECURITY_DRAWER,
                });
              }}
            >
              <PolicyRoundedIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                dispatch({
                  type: constant.CALLER_DETAILS_DRAWER,
                });
              }}
            >
              <PersonRoundedIcon />
            </IconButton>
          </IconWrapper>
        </Grid>
      </Grid>
      <Wrapper>
        <div className="w-full h-full flex flex-col mt-[168px] pl-20">
          <p className="text-blue text-[22px] font-Poppin font-semibold">
            READ WORD FOR WORD
          </p>
          <div>
            <p className="font-Poppin font-normal my-4 text-base">
              Here is a specific sentence that I have to read for Colorado
              Technical university, a school specific statement.
            </p>
            <p className="font-Poppin font-normal my-4 text-base">
              Here is a specific sentence that I have to read for South
              University online, a second school specific statement.
            </p>
            <p className="font-Poppin font-normal">
              Here is the generic statement I also have to read it includes the
              School I have currently selected, it’s{' '}
              {selectedOffers?.map((off) => (
                <span key={off?.schoolid}>{off?.school}, </span>
              ))}
              this is great fun to read on a call and the caller is always happy
              to hear this.
            </p>
          </div>
          {keyName === 'transfer' ? (
            <>
              <br />
              <div className="text-blue text-[22px] font-Poppin font-semibold">
                {data?.TransferPhone || advisorData.TransferPhone}
              </div>
              <Dropdown
                Icon={<RecommendRoundedIcon />}
                options={advisorOptions}
                clickHandler={dropdownClickHandler}
                placeholder="Select an agent to transfer to"
              />

              <RecordingDisclosed onClick={submit}>
                Submit Match
              </RecordingDisclosed>
            </>
          ) : keyName === 'direct' ? (
            <RecordingDisclosed onClick={submit}>
              Submit Match
            </RecordingDisclosed>
          ) : (
            <RecordingDisclosed onClick={submit}>
              Submit Match
            </RecordingDisclosed>
          )}
        </div>
      </Wrapper>
    </MainWrapper>
  );
};

export default submitMatch;
