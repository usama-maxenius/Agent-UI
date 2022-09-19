import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import React from 'react';
import {
  IconButton,
  IconWrapper,
  MainWrapper,
} from './styled/educationForm.style';
import { RecordingDisclosed } from './styled/wecomeNote.style';
import { useContextCustom } from '../store/context';
import constant from '../store/constant';
import { useNavigate } from 'react-router-dom';

const Wrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'calc(100vh - 250px )',
}));

const submitMatch = () => {
  const { dispatch } = useContextCustom();
  const navigate = useNavigate();

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
              School I have currently selected, it’s Colorado Technical
              university, this is great fun to read on a call and the caller is
              always happy to hear this.
            </p>
          </div>

          <RecordingDisclosed
            onClick={() => {
              navigate('/school/matches/submittingLoading');
            }}
          >
            Submit Match
          </RecordingDisclosed>
        </div>
      </Wrapper>
    </MainWrapper>
  );
};

export default submitMatch;
