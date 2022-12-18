import React from 'react';
import { useNavigate } from 'react-router-dom';

function MatchedSuccess() {
  let navigate = useNavigate();

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-lightGray">
      <div className="flex flex-col justify-center items-center w-[859px] h-[223px]">
        <p className="font-Poppin text-[46px] text-green font-semiBold">
          YOU MATCHED 3 DIRECT OFFERS!
        </p>
        <p className="font-Poppin text-base text-darkBlack font-normal mt-[42px]">
          Thank the caller for their time and finish the call.
        </p>
        <button
          className="bg-blue text-white w-96 h-12 text-[22px] font-IBM_serif font-semibold mt-6 border border-blue rounded-3xl  mt-[42px]"
          onClick={() => {
            let element = document?.getElementById('main-wrapper');
            if (element?.classList?.contains('school-page')) {
              element?.classList?.remove('school-page');
            }
            document
              ?.getElementById('main-wrapper')
              ?.classList?.add('main-page');
            navigate('/');
          }}
        >
          Next Call
        </button>
      </div>
    </div>
  );
}

export default MatchedSuccess;
