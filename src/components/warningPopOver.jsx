/* eslint-disable no-unused-vars */
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Modal({ popup, setPopUp }) {
  let navigate = useNavigate();
  return (
    <>
      {popup ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-hidden left-8 top-0 bottom-0 absolute z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 relative flex flex-col w-full items-center outline-none focus:outline-none">
                <div className="w-9/12 h-full flex flex-col mt-9 pl-20 justify-center items-center">
                  <p className="text-blue text-[20px] font-Poppin font-semibold text-white">
                    TOO MANY MATCHES SELECTED
                  </p>
                  <p className="font-Poppin font-normal my-4 text-base text-white text-center">
                    You can only select 1 School, if you want to change, you can
                    always unselect a school
                  </p>

                  <button
                    className="bg-blue text-white w-96 h-12 text-[22px] font-Poppin font-semibold mt-6 border border-blue rounded-3xl"
                    onClick={(e) => {
                      e.preventDefault();
                      setPopUp(!popup);
                      navigate('/school/matches/transfer');
                    }}
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black w-[calc(50%-60px)] left-[60px]  top-[63px]"></div>
        </>
      ) : null}
    </>
  );
}
