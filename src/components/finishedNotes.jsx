import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Title,
  Description,
  RegularPoppin,
  MediumPoppin,
  RecordingDisclosed,
} from './styled/wecomeNote.style';

const FinishedNotes = () => {
  let navigate = useNavigate();
  return (
    <React.Fragment>
      <Title>READ WORD FOR WORD</Title>
      <Description>
        <RegularPoppin>
          Alright, let’s finish this up and provide you with school options,
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </RegularPoppin>
        <MediumPoppin>
          but also the leap into electronic typesetting, remaining essentially
          unchanged
        </MediumPoppin>
      </Description>
      <RecordingDisclosed onClick={() => navigate('/school/matches')}>
        Display matched schools
      </RecordingDisclosed>
    </React.Fragment>
  );
};

export default FinishedNotes;
