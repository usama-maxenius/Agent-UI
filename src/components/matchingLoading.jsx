import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function MatchingLoader() {
  let navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate('/school/matchedSuccess');
    }, 2000);
  }, []);
  return (
    <div className="w-screen h-screen pb-[63px] flex flex-col justify-center items-center bg-lightGray">
      <p className="font-Poppin text-[22px] text-blue font-medium">
        Matching schools
      </p>
      <div className="flex flex-row mt-10 justify-start">
        <div className="matching-screen-animation"></div>
      </div>
    </div>
  );
}

export default MatchingLoader;
