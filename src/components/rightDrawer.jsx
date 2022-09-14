import React from 'react';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import EastRoundedIcon from '@mui/icons-material/EastRounded';
import { classNames } from '../helper/classNames';
import { useContextCustom } from '../store/context';

function RightDrawer({ children }) {
  const { state, dispatch } = useContextCustom();
  return (
    <main
      className={
        ' fixed overflow-hidden z-10 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out ' +
        (state.isSecurityDrawer || state.isHelperDrawer
          ? ' transition-opacity opacity-100 duration-500 translate-x-0  '
          : ' transition-all delay-500 opacity-0 translate-x-full  ')
      }
    >
      <section
        className={
          ' w-[549px] right-0 absolute bg-white h-full shadow-[-20px_0px_20px_#00000017] delay-400 duration-500 ease-in-out transition-all transform  ' +
          (state.isSecurityDrawer || state.isHelperDrawer
            ? ' translate-x-0 '
            : ' translate-x-full ')
        }
      >
        <article className="relative w-[549px] pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <div className="px-[26px]">
            <div className="mt-[18px] flex flex-row justify-between items-center">
              <div
                className={classNames(
                  'flex items-stretch w-[144px] relative h-15 items-center border rounded-3xl ml-[202px]',
                  'hover:w-[346px] focus-within:w-[346px] hover:border-blue focus-within:border-blue',
                  'hover:text-blue focus-within:text-blue',
                  'hover:ml-0 focus-within:ml-0'
                )}
              >
                <input
                  type="text"
                  className="flex-shrink flex-grow ml-4 leading-normal flex-1 rounded h-10 w-px pr-3 relative self-center font-roboto text-lg outline-none"
                  placeholder="Search"
                />
                <div className="flex -mr-px">
                  <span className="flex items-center leading-normal rounded rounded-l-none border-0 px-3 whitespace-no-wrap text-gray-600">
                    <SearchRoundedIcon />
                  </span>
                </div>
              </div>
              <div
                className=""
                onClick={() => {
                  dispatch({
                    type: 'CLOSE_DRAWER',
                  });
                }}
              >
                <EastRoundedIcon className="hover:text-blue cursor-pointer" />
              </div>
            </div>
            <div className="mt-[34px] flex flex-col">{children}</div>
          </div>
        </article>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          dispatch({
            type: 'CLOSE_DRAWER',
          });
        }}
      ></section>
    </main>
  );
}

export default RightDrawer;
