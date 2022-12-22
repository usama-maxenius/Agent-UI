/* eslint-disable prettier/prettier */
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded';
import ReorderRoundedIcon from '@mui/icons-material/ReorderRounded';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
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
  MediumPoppin
} from './styled/educationForm.style';
import { RecordingDisclosed } from './styled/wecomeNote.style';

const Wrapper = styled('div')(() => ({
  display: 'flex',
  marginBottom: 100,
  flexDirection: 'column',
}));

const CallerDetail = () => {
  const { dispatch } = useContextCustom();
  const navigate = useNavigate();
  const dispatchRedux = useDispatch();
  const [params] = useSearchParams();

  const [value, setValue] = useState({
    gender: params?.get('gender') === null ? '' : params?.get('gender'),
    first_name:
      params?.get('first_name') === null ? '' : params?.get('first_name'),
    last_name:
      params?.get('last_name') === null ? '' : params?.get('last_name'),
    email: params?.get('email') === null ? '' : params?.get('email'),
    phone:
      params?.get('phone_number') === null ? '' : params?.get('phone_number'),
    address_line1:
      params?.get('address1') === null ? '' : params?.get('address1'),
    city: params?.get('city') === null ? '' : params?.get('city'),
    state: params?.get('state') === null ? '' : params?.get('state'),
    zip_code: params?.get('zip') === null ? '' : params?.get('zip'),
    computer_internet_access:
      params?.get('computer_internet_access') === null
        ? ''
        : params?.get('computer_internet_access'),
    age: params?.get('age') === null ? '' : params?.get('age'),
    hsyear:
      params?.get('high_school_graduation_year') === null
        ? ''
        : params?.get('high_school_graduation_year'),
    current_education_level:
      params?.get('current_education_level') === null
        ? ''
        : params?.get('current_education_level'),
    us_citizen:
      params?.get('us_citizen') === null ? '' : params?.get('us_citizen'),
    military_status:
      params?.get('military') === null ? '' : params?.get('military'),
    online_or_campus:
      params?.get('online_or_campus') === null
        ? ''
        : params?.get('online_or_campus'),
    can_complete_enrollment:
      params?.get('can_complete_enrollment') === null
        ? ''
        : params?.get('can_complete_enrollment'),
    is_contacted_by_school:
      params?.get('is_contacted_by_school') === null
        ? ''
        : params?.get('is_contacted_by_school'),
    graduated_in_us:
      params?.get('graduated_in_us') === null
        ? ''
        : params?.get('graduated_in_us'),
    time_to_call:
      params?.get('time_to_call') === null ? '' : params?.get('time_to_call'),
    areas_of_interest:
      params?.get('areas_of_interest') === null
        ? ''
        : params?.get('areas_of_interest'),
    another_areas_of_interest:
      params?.get('another_areas_of_interest') === null
        ? ''
        : params?.get('another_areas_of_interest'),
    any_other_areas_of_interest:
      params?.get('any_other_areas_of_interest') === null
        ? ''
        : params?.get('any_other_areas_of_interest'),
  });
  const searchHandler = (e) => {
    e.preventDefault();
    dispatchRedux(searchSchools(value, navigate));
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
            <DragnDropForm setValue={setValue} value={value} />
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
