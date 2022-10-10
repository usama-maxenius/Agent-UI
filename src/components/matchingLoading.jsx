/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ResultSchools } from '../store/action/searchAPI';

function MatchingLoader() {
  let navigate = useNavigate();
  let { search_identifier } = useSelector((store) => store.InitReducer);
  let dispatch = useDispatch();
  useEffect(() => {
    if (search_identifier.search_identifier) {
      dispatch(ResultSchools(search_identifier.search_identifier, navigate));
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
