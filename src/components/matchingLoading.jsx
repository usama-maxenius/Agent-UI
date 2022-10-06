/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function MatchingLoader() {
  let navigate = useNavigate();
  let { search_identifier } = useSelector((store) => store.InitReducer);

  useEffect(() => {
    if (search_identifier.search_identifier) {
      setTimeout(() => {
        navigate('/school/matches');
      }, 2000);
    }
  }, [search_identifier]);
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
