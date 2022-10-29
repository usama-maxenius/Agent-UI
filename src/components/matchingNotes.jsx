/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { SubmitAPI } from '../store/action/searchAPI';
import constant from '../store/constant';
import { useContextCustom } from '../store/context';
import SearchDropdown from './dropdownWithSearch';
import {
  IconButton,
  IconWrapper,
  // eslint-disable-next-line prettier/prettier
  MainWrapper
} from './styled/educationForm.style';
import { RecordingDisclosed } from './styled/wecomeNote.style';

const Wrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'calc(100vh - 250px )',
}));

const WelcomeNotes = () => {
  const { dispatch } = useContextCustom();
  const navigate = useNavigate();
  let [sParams] = useSearchParams();
  let { transferResult, selectedProgram, selectedSchool } = useSelector(
    (store) => store.InitReducer
  );
  let [question, setQuestion] = useState();
  console.log(transferResult);
  let dispatchRedux = useDispatch();

  const submit = () => {
    let body = {
      accesskey: process.env.REACT_APP_ACCESS_KEY,
      search_identifier: sParams.get('search'),
      search_result_identifier: selectedSchool?.result_identifier,
      search_result_set_identifier: selectedSchool?.result_set_identifier,
      answers: [
        {
          question_key: transferResult?.AdvisorFieldName,
          question_value: question?.QuestionValue,
        },
        selectedProgram,
      ],
    };
    console.log('Body Here Console----->', body);
    dispatchRedux(SubmitAPI(body, navigate));
  };

  return (
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
        <div className="w-full h-full flex flex-col mt-9 pl-20">
          <p className="text-blue text-[22px] font-Poppin font-semibold">
            READ WORD FOR WORD
          </p>
          <div>
            <p className="font-Poppin font-normal my-4 text-base">
              Here is a specific sentence that I have to read for Colorado
              Technical university, a school specific statement.
            </p>
            <p className="font-Poppin font-normal">
              Here is the generic statement I also have to read it includes the
              School I have currently selected, it’s Colorado Technical
              university, this is great fun to read on a call and the caller is
              always happy to hear this.
            </p>
            <p className="text-blue text-[22px] font-Poppin font-semibold text-base mt-11">
              {transferResult
                ? transferResult.TransferPhone
                : '+1 719-598-0200'}
            </p>
          </div>

          {transferResult && (
            <div className="mb-11 mt-7">
              <SearchDropdown
                Icon={<SupportAgentRoundedIcon className="text-gray mr-3" />}
                placeholder="Advisors"
                options={transferResult.Advisors}
                programSelected={setQuestion}
              />
            </div>
          )}
          <RecordingDisclosed
            // onClick={() => {
            //   navigate('/school/matches/submittingLoading');
            // }}
            onClick={submit}
          >
            Submit Match
          </RecordingDisclosed>
        </div>
      </Wrapper>
    </MainWrapper>
  );
};

export default WelcomeNotes;
