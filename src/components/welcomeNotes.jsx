import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RecordingDisclosed } from './styled/wecomeNote.style';

const WelcomeNotes = () => {
  let navigate = useNavigate();
  return (
    <div className="w-[519px] h-full flex flex-col justify-center mx-auto">
      <p className="text-blue text-[22px] font-Poppin font-semibold">
        READ WORD FOR WORD
      </p>
      <div>
        <p className="font-Poppin font-normal my-4 text-base">
          Hello this is Anna from Degree Transfers on a{' '}
          <strong>recorded line</strong>, am I speaking with Angel?
        </p>
        <p className="font-Poppin font-normal my-4">
          Hello Angel, it looks like you have been online recently looking into
          furthering your education. Have you enrolled in a school already or
          just looking for options?
        </p>
        <p className="font-Poppin font-semibold ">
          Great! Degree Transfers partners with over 200 colleges to help
          students find school options.
        </p>
      </div>
      <RecordingDisclosed onClick={() => navigate('/education/form')}>
        Recording disclosed
      </RecordingDisclosed>
    </div>
  );
};

export default WelcomeNotes;
