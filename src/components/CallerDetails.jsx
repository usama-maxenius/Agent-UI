import React from 'react';
import {
  MainWrapper,
  IconWrapper,
  IconButton,
  MediumPoppin,
  FormHeader,
} from './styled/educationForm.style';
import Grid from '@mui/material/Grid';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded';
import { styled } from '@mui/material/styles';
import { useContextCustom } from '../store/context';
import constant from '../store/constant';
import DragnDropForm from './callerDetailFormDnD';
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';
import { RecordingDisclosed } from './styled/wecomeNote.style';

const Wrapper = styled('div')(() => ({
  display: 'flex',
  marginBottom: 100,
  flexDirection: 'column',
}));

const CallerDetail = () => {
  const { dispatch } = useContextCustom();

  return (
    <MainWrapper>
      <Grid container>
        <Grid item xs={6}>
          <FormHeader>
            <MediumPoppin>CALLER DETAIL</MediumPoppin>
          </FormHeader>
        </Grid>
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
                  type: constant.DRAGABBLE_FORM,
                });
              }}
            >
              <ReorderRoundedIcon />
            </IconButton>
          </IconWrapper>
        </Grid>
      </Grid>
      <Wrapper>
        <div className="bg-white w-[570px] mt-[26px] rounded-box">
          <div className="flex flex-col overflow-x-hidden pb-[26px]">
            <DragnDropForm />
          </div>
        </div>
        <div className="w-[519px] h-full flex flex-col justify-center mx-auto mt-[42px]">
          <p className="text-blue text-[22px] font-Poppin font-semibold">
            READ WORD FOR WORD
          </p>
          <div>
            <p className="font-Poppin font-normal my-4 text-base w-11/12">
              Alright, let’s finish this up and provide you with school options,
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
            <p className="font-Poppin font-semibold  w-11/12">
              but also the leap into electronic typesetting, remaining
              essentially unchanged.
            </p>
          </div>
          <RecordingDisclosed
          //   onClick={() => navigate('/education/form')}
          >
            Display matched schools
          </RecordingDisclosed>
        </div>
      </Wrapper>
    </MainWrapper>
  );
};

export default CallerDetail;
