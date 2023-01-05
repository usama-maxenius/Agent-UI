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
const accesskey = process.env.REACT_APP_ACCESS_KEY;

const submitMatch = ({
  state,
  keyName,
  updateOffersHandler,
  updateSuccessCountsHandler,
}) => {
  const { dispatch } = useContextCustom();
  const [selectedOffers, setSelectedOffers] = useState(
    /** @type {import('../types/schools.types').ISchoolResponse[] | []} */
    ([])
  );
  const [loading, setLoading] = useState(false);
  const [advisorOptions, setAdvisorOptions] = useState(
    /** @type {import('../types/transfers.types').IAdvisorOptions[] | []} */
    ([])
  );
  const [transferSubmit, setTransferSubmit] = useState(
    /** @type {{question_key:string | undefined; question_value:string | undefined; result_identifier:string | undefined; result_set_identifier: string | undefined; answers:[] }} */
    ({
      question_key: '',
      question_value: '',
      result_identifier: '',
      result_set_identifier: '',
      answers: [],
    })
  );

  const [transfersBody, setTransfersBody] = useState({
    result_identifier: '',
    result_set_identifier: '',
    answers: [],
  });
  const { data } = useTransferResults(transfersBody);

  // Add OptionLabel and OptionValue property in advisorOptions state
  useEffect(() => {
    const advisors = data?.Advisors?.length
      ? data?.Advisors
      : advisorData.Advisors;
    const options = advisors?.map((itm) => {
      itm.OptionLabel = itm?.AdvisorName;
      itm.OptionValue = itm?.AdvisorId;
      return itm;
    });
    setAdvisorOptions(options);

    return () => {
      setAdvisorOptions([]);
    };
  }, [data]);

  // Update state of selected offers count
  useEffect(() => {
    const findSelectedOffers = state?.filter((offer) => offer.selected);
    setSelectedOffers(findSelectedOffers);
  }, [state]);

  // Update Transfer body state to send transfer request
  useEffect(() => {
    if (keyName === 'transfer') {
      /** @type {string } */
      const set_identifier =
        selectedOffers.length > 0
          ? selectedOffers[0]?.result_set_identifier
          : '';
      /** @type {string } */
      const search_set_identifier =
        selectedOffers.length > 0
          ? selectedOffers[0]?.result_set_identifier
          : '';

      /** @type {*} */
      const answers =
        selectedOffers.length > 0 ? selectedOffers[0]?.questions : [];

      setTransfersBody((prev) => ({
        ...prev,
        result_identifier: set_identifier,
        result_set_identifier: search_set_identifier,
        answers: answers,
      }));
      setTransferSubmit((prev) => ({
        ...prev,
        result_identifier: set_identifier,
        result_set_identifier: search_set_identifier,
        answers: answers,
      }));
    }
  }, [selectedOffers]);

  // Offers Submittions functionality
  const submit = async () => {
    setLoading(true);
    if (keyName === 'direct') {
      const { error, data } = await checkQuestionValidation(state);
      if (error) {
        await updateOffersHandler(data);
      } else {
        const { count } = await directOffersSubmit(state);
        if (count > 0) await updateSuccessCountsHandler(true, count);
      }
    }
    if (keyName === 'transfer') {
      // Transfer submit body preparation
      const body = {
        accesskey,
        result_identifier: transferSubmit.result_identifier,
        result_set_identifier: transferSubmit.result_set_identifier,
        answers: [
          {
            // question_key: transferSubmit.question_key,
            question_key: data?.AdvisorFieldName,
            question_value: transferSubmit.question_value,
          },
        ],
      };
      const { count } = await submitOffer(body);
      if (count > 0) await updateSuccessCountsHandler(true, count);
    }
    setLoading(false);
  };

  // Update selected option on change event
  const dropdownClickHandler = React.useCallback((obj) => {
    return setTransferSubmit((prev) => ({
      ...prev,
      question_key: data?.AdvisorFieldName ?? undefined,
      question_value: obj?.OptionValue ?? undefined,
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
                {data?.TransferPhone || advisorData?.TransferPhone}
              </div>
              <Dropdown
                Icon={<RecommendRoundedIcon />}
                options={advisorOptions}
                clickHandler={dropdownClickHandler}
                colorClass="default"
                question={undefined}
                school={undefined}
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

export default React.memo(submitMatch);
