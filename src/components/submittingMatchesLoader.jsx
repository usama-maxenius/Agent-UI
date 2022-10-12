import React from 'react';
import {
  MainWrapper,
  IconWrapper,
  IconButton,
} from './styled/educationForm.style';
import Grid from '@mui/material/Grid';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import { styled } from '@mui/material/styles';
import { useContextCustom } from '../store/context';
import constant from '../store/constant';
const Wrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '200px',
  flexDirection: 'column',
}));

const SubmittingMatchesLoader = () => {
  const { dispatch } = useContextCustom();

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
        <p className="font-Poppin text-[22px] text-blue font-medium">
          Submitting matches
        </p>
        <div className="flex flex-row mt-10 justify-start">
          <div className="matching-screen-animation"></div>
        </div>
      </Wrapper>
    </MainWrapper>
  );
};

export default SubmittingMatchesLoader;
