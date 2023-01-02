/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded';
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
import { submitOffer } from '../services/submitOffer';
import SubmittingLoading from '../components/submittingMatchesLoader';
import { useTransferResults } from '../hooks/useTransfers';

const Wrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'calc(100vh - 250px )',
}));
const accesskey = process.env.REACT_APP_ACCESS_KEY;

const submitMatch = ({ state, keyName }) => {
  const { dispatch } = useContextCustom();
  const [selectedOffers, setSelectedOffers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [transfersBody, setTransfersBody] = useState({
    result_identifier: '',
    answers: [],
  });
  const { data } = useTransferResults(transfersBody);
  const [params] = useSearchParams();

  const search_identifier = params?.get('search');

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
    }
  }, [selectedOffers]);

  const submit = async () => {
    setLoading(true);
    /** Filter by selected Offers  */
    const findSelectedOffers = await state?.filter((offer) => offer.selected);

    const prepareBodyRequest = await findSelectedOffers?.map((offer) => {
      let answers = [];
      if (offer.selected_program?.questions) {
        // filter by visible questions
        const valid_questions = offer.selected_program?.questions.filter(
          (qes) => qes.IsVisible
        );
        if (valid_questions.length) {
          answers = valid_questions?.map((question) => {
            return {
              question_key: question.value?.OptionLabel,
              question_value: question.value?.OptionValue,
            };
          });
        }
      }
      return {
        accesskey,
        search_identifier: search_identifier,
        search_result_identifier: offer.result_identifier,
        search_result_set_identifier: offer.result_set_identifier,
        answers: answers ?? [],
      };
    });

    // Sending Submit api requests
    for (const body of prepareBodyRequest) {
      await new Promise((resolve) =>
        setTimeout(() => resolve(submitOffer(body)), 1000)
      );
    }
    setLoading(false);
  };
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
                <span key={off.schoolid}>{off?.school}, </span>
              ))}
              this is great fun to read on a call and the caller is always happy
              to hear this.
            </p>
          </div>
          {keyName === 'transfer' ? (
            <>
              <div className="text-blue text-[22px] font-Poppin font-semibold">
                +1 719-598-0200
              </div>
              Dropdown
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
