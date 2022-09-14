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

const Wrapper = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 'calc(100vh - 250px )',
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
                  type: 'HELP_DRAWER',
                });
              }}
            >
              <LiveHelpRoundedIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                dispatch({
                  type: 'SECURITY_DRAWER',
                });
              }}
            >
              <PolicyRoundedIcon />
            </IconButton>
            <IconButton>
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
