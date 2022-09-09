import React from 'react';
import {
  Title,
  Description,
  RegularPoppin,
  MediumPoppin,
  RecordingDisclosed,
} from './styled/wecomeNote.style';

const WelcomeNotes = () => {
  return (
    <React.Fragment>
      <Title>READ WORD FOR WORD</Title>
      <Description>
        <RegularPoppin>
          Hello this is Anna from Degree Transfers on a{' '}
          <MediumPoppin> recorded line</MediumPoppin>, am I speaking with Angel?
        </RegularPoppin>
        <RegularPoppin>
          Hello Angel, it looks like you have been online recently looking into
          furthering your education. Have you enrolled in a school already or
          just looking for options?
        </RegularPoppin>
        <MediumPoppin>
          Great! Degree Transfers partners with over 200 colleges to help
          students find school options.
        </MediumPoppin>
      </Description>
      <RecordingDisclosed>Recording disclosed</RecordingDisclosed>
    </React.Fragment>
  );
};

export default WelcomeNotes;
