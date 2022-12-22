import React from 'react';
import { RecordingDisclosed } from './styled/wecomeNote.style';

const FinishedNotes = ({ searchHandler }) => {
  return (
    <div className="w-[519px] h-full flex flex-col justify-center mx-auto mt-10">
      <p className="text-blue text-[22px] font-Poppin font-semibold">
        READ WORD FOR WORD
      </p>
      <div className="w-[450px]">
        <p className=" font-Poppin font-normal my-4 text-base">
          Alright, let’s finish this up and provide you with school options,
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry’s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>

        <p className="font-Poppin font-semibold ">
          but also the leap into electronic typesetting, remaining essentially
          unchanged
        </p>
      </div>
      <RecordingDisclosed onClick={searchHandler}>
        Display matched schools
      </RecordingDisclosed>
    </div>
  );
};

export default FinishedNotes;
