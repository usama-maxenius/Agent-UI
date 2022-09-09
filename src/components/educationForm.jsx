import React from 'react';
import {
  MainWrapper,
  MediumPoppin,
  FormHeader,
  IconWrapper,
  IconButton,
} from './styled/educationForm.style';
import Grid from '@mui/material/Grid';
import LiveHelpRoundedIcon from '@mui/icons-material/LiveHelpRounded';
import PolicyRoundedIcon from '@mui/icons-material/PolicyRounded';
import FormCard from './Card';
import FinishedNotes from './finishedNotes';
import styled from 'styled-components';

let BottomNoteWrapper = styled.div`
  padding: 10px;
  margin-bottom: 100px;
`;

let data = [
  {
    title: 'Firstly, what year did you graduate from high school?',
    options: [
      { name: 'High School Graduation year', value: '1' },
      { name: '2022', value: '2' },
    ],
    dropdown: true,
  },
  {
    title: 'And that was in the US?',
    options: [
      { name: 'Graduated in the US?', value: '1' },
      { name: '2022', value: '2' },
    ],
    dropdown: true,
  },
  {
    title: 'And just to check, you are a US Citizen?',
    options: [
      { name: 'US Citizen?', value: '1' },
      { name: '2022', value: '2' },
    ],
    dropdown: true,
  },
  {
    title:
      'Great, can I ask is high school the highest level of education you’ve completed?',
    options: [
      { name: 'Highest level of education', value: '1' },
      { name: '2022', value: '2' },
    ],
    dropdown: true,
  },
  {
    title: 'Do you have unrestricted access to a computer and internet?',
    options: [
      { name: 'Internet access?', value: '1' },
      { name: '2022', value: '2' },
    ],
    dropdown: true,
  },
];
let personalDetails = [
  {
    title: 'And what year were you born?',
    options: [
      { name: 'Birth Year', value: '1' },
      { name: '2022', value: '2' },
    ],
    dropdown: true,
  },
  {
    title: 'Are you associated with the military at all?',
    options: [
      { name: 'Military association', value: '1' },
      { name: '2022', value: '2' },
    ],
    dropdown: true,
  },
  {
    title:
      'Okay, and have you been in contact with any Schools in the past 6 months?',
    options: [
      { name: 'In contact with schools?', value: '1' },
      { name: '2022', value: '2' },
    ],
    dropdown: true,
  },
];
let enrolment = [
  {
    title: 'Please tell me the area of study you’re interested in:',
    options: [
      { name: 'Area of study', value: '1' },
      { name: '2022', value: '2' },
    ],
    dropdown: true,
  },
  {
    title:
      'Aside from <interest> is there another area of study you’re interested in?',
    options: [
      { name: 'Additional area of study', value: '1' },
      { name: '2022', value: '2' },
    ],
    dropdown: true,
  },
  {
    title: 'Any other area of study?',
    options: [
      { name: 'Additional area of study', value: '1' },
      { name: '2022', value: '2' },
    ],
    dropdown: true,
  },
  {
    title:
      'Wow, great! And when you go back to school, are you looking for campus, online, or would you consider both options?',
    options: [
      { name: 'Location preference', value: '1' },
      { name: '2022', value: '2' },
    ],
    dropdown: true,
  },
  {
    title:
      'If you found the right school and program, would you be ready within 3 months?',
    options: [
      { name: 'Enrolment timeline', value: '1' },
      { name: '2022', value: '2' },
    ],
    dropdown: true,
  },
];
let contact = [
  {
    options: [
      { name: 'Area of study', value: '1' },
      { name: '2022', value: '2' },
    ],
    isDouble: true,
  },
  {
    title: 'Just to check how your last name is spelled',
    options: [
      { name: 'Additional area of study', value: '1' },
      { name: '2022', value: '2' },
    ],
    ticked: true,
    bottomLine: true,
  },
  {
    title:
      'In case we get disconnected is this the correct number so that I can call you back?',
    options: [
      { name: 'Additional area of study', value: '1' },
      { name: '2022', value: '2' },
    ],
    ticked: true,
  },
  {
    title:
      'Perfect, and when would be the best time for you to receive a call?',
    options: [
      { name: 'Time to contact', value: '1' },
      { name: '2022', value: '2' },
    ],
    dropdown: true,
  },
  {
    title:
      'Great, now, before we get to the schools, is this your best email address?',
    options: [
      { name: 'Additional area of study', value: '1' },
      { name: '2022', value: '2' },
    ],
    ticked: true,
  },
  {
    title: 'Great, and lastly is what is your address?',
    options: [
      { name: 'Additional area of study', value: '1' },
      { name: '2022', value: '2' },
    ],
    dropdown: true,
    HomeIcon: true,
    isDouble: true,
  },
];

const EducationForm = () => {
  return (
    <MainWrapper>
      <Grid container>
        <Grid item xs={6}>
          <FormHeader>
            <MediumPoppin>Education</MediumPoppin>
          </FormHeader>
        </Grid>
        <Grid item xs={6}>
          <IconWrapper>
            <IconButton>
              <LiveHelpRoundedIcon />
            </IconButton>
            <IconButton>
              <PolicyRoundedIcon />
            </IconButton>
          </IconWrapper>
        </Grid>
      </Grid>
      {data.map((item, key) => {
        return <FormCard item={item} key={key} />;
      })}
      <Grid container>
        <Grid item xs={12}>
          <FormHeader>
            <MediumPoppin>Personal information</MediumPoppin>
          </FormHeader>
        </Grid>
      </Grid>
      {personalDetails.map((item, key) => {
        return <FormCard item={item} key={key} />;
      })}
      <Grid container>
        <Grid item xs={12}>
          <FormHeader>
            <MediumPoppin>Enrolment & interests</MediumPoppin>
          </FormHeader>
        </Grid>
      </Grid>
      {enrolment.map((item, key) => {
        return <FormCard item={item} key={key} />;
      })}
      <Grid container>
        <Grid item xs={12}>
          <FormHeader>
            <MediumPoppin>Contact information</MediumPoppin>
          </FormHeader>
        </Grid>
      </Grid>
      {contact.map((item, key) => {
        return <FormCard item={item} key={key} />;
      })}
      <BottomNoteWrapper>
        <FinishedNotes />
      </BottomNoteWrapper>
    </MainWrapper>
  );
};

export default EducationForm;
