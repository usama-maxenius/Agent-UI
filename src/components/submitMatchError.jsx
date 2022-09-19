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
// import { RecordingDisclosed } from './styled/wecomeNote.style';
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
            THERE WAS AN ERROR WITH A MATCH
          </p>
          <div>
            <p className="font-Poppin font-normal my-4 text-base w-11/12">
              Colorado Technical University didn’t accept the match because{' '}
              <strong>The Reason it wasn’t accepted.</strong>
            </p>
            <p className="font-Poppin font-normal my-4 text-base">
              You can fix this issue or pick
              <strong> 1 More match to submit</strong>
            </p>
          </div>

          <div className="w-[443px] mt-4   ">
            <button
              className="bg-blue text-white h-[52px] w-[388px] rounded-3xl font-IBM_serif text-[22px] hover:shadow-[3px_3px_15px_#00000000]"
              onClick={() => {
                navigate('/school/matchedSuccess');
              }}
            >
              Submit Match
            </button>
          </div>
          <p className="font-Poppin font-normal mt-[42px] text-base">
            You can also{' '}
            <a href="#" className="underline">
              continue without submitting any more matches
            </a>
          </p>
        </div>
      </Wrapper>
    </MainWrapper>
  );
};

export default submitMatch;
