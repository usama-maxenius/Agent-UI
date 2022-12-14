import React from 'react';
import {
  MainWrapper,
  IconWrapper,
  IconButton,
  MediumPoppin,
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
  marginTop: '255px',
}));

const SchoolToProceed = () => {
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
        <MediumPoppin color="#16161680">Select schools to proceed</MediumPoppin>
      </Wrapper>
    </MainWrapper>
  );
};

export default SchoolToProceed;
