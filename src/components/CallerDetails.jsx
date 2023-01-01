/* eslint-disable prettier/prettier */
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded';
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { searchSchools } from '../store/action/searchAPI';
import constant from '../store/constant';
import { useContextCustom } from '../store/context';
import DragnDropForm from './callerDetailFormDnD';
import {
  FormHeader,
  IconButton,
  IconWrapper,
  MainWrapper,
  MediumPoppin,
} from './styled/educationForm.style';
import { RecordingDisclosed } from './styled/wecomeNote.style';

const Wrapper = styled('div')(() => ({
  display: 'flex',
  marginBottom: 100,
  flexDirection: 'column',
}));

const CallerDetail = (props) => {
  const { state, setState } = props;
  const { dispatch } = useContextCustom();
  const navigate = useNavigate();
  const dispatchRedux = useDispatch();
  const [params] = useSearchParams();

  useEffect(() => {
    Object.keys(state).forEach((key) =>
      setState((prev) => ({ ...prev, [key]: params.get(key) }))
    );
  }, [params]);

  const searchHandler = (e) => {
    e.preventDefault();
    dispatchRedux(searchSchools(state, navigate));
  };
  return (
    <MainWrapper>
      <Grid container>
        <Grid item xs={6}>
          <FormHeader>
            <MediumPoppin>CALLER DETAIL</MediumPoppin>
          </FormHeader>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{ display: 'flex', justifyContent: 'right', alignItems: 'right' }}
        >
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
          <div className="flex flex-col pb-[26px]">
            <DragnDropForm setValue={setState} value={state} />
          </div>
        </div>
        <div className="w-[519px] h-full flex flex-col justify-center mx-auto mt-[42px]">
          <p className="text-blue text-[22px] font-Poppin font-semibold">
            READ WORD FOR WORD
          </p>
          <div>
            <p className="font-Poppin font-normal my-4 text-base w-11/12">
              Alright, let’s finish this up and provide you with school options.
            </p>
            <p className="font-Poppin font-semibold  w-11/12">
              but also the leap into electronic typesetting, remaining
              essentially unchanged.
            </p>
          </div>
          <RecordingDisclosed onClick={searchHandler}>
            Display matched schools
          </RecordingDisclosed>
        </div>
      </Wrapper>
    </MainWrapper>
  );
};

export default CallerDetail;
