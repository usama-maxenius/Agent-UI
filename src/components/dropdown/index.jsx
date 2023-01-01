/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/20/solid';
import RecommendRoundedIcon from '@mui/icons-material/RecommendRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import React from 'react';
import { Fragment, useState } from 'react';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
function Dropdown({
  Icon,
  placeholder,
  options,
  school,
  clickHandler,
  question,
}) {
  const [changeColor, setChangeColor] = useState(false);
  const [selectedOption, setSelectedOption] = useState({
    OptionLabel: placeholder,
    OptionValue: placeholder,
  });

  const handleClick = React.useCallback((option, question) => {
    setSelectedOption(option);
    return clickHandler(option, question);
  }, []);

  return (
    <div className="w-full">
      <Listbox>
        <div className="relative mt-1">
          <Listbox.Button
            className={classNames(
              'relative w-full cursor-default md:rounded-lg bg-lightGray font-medium py-2 pl-3 pr-10 text-left rounded focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 ',
              // program == true ? 'border-red' : 'border-gray',
              // callerID == true
              //   ? 'border-blue  h-[52px] font-Poppin text-base rounded-[8px]'
              //   :
              'sm:text-sm',
              changeColor ? `border border-blue` : `border border-[#16161640]`
            )}
          >
            <span
              className={classNames(
                'block truncate  font-Poppin',
                changeColor ? 'text-blue' : 'text-gray'
              )}
            >
              <span
                className={classNames(changeColor ? `text-blue` : `text-gray`)}
              >
                {Icon ? Icon : <SupportAgentRoundedIcon />}
              </span>
              {selectedOption.OptionLabel}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className={classNames(
                  'h-5 w-5',
                  !school.selected_program ? 'text-red' : 'text-gray-400'
                  // callerID == true && 'text-blue h-6 w-6'
                )}
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-30 no-scrollbar mt-1 max-h-80 w-full overflow-auto rounded-md bg-lightGray py-1 text-base ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {!options?.length ? (
                <div
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? '  ' : 'text-gray-900'
                    }`
                  }
                >
                  <input
                    type="text"
                    className="w-8/12 rounded border border-blue ml-5 mt-5 md:rounded-3xl px-2 py-1"
                    placeholder="Search"
                  />
                  <SearchRoundedIcon className="relative -left-8 text-sm text-blue -top-0.5" />
                </div>
              ) : (
                ''
              )}

              {options?.map((option, personIdx) => {
                return (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-5 pr-4 ${
                        active ? ' ' : 'text-darkBlack'
                      }`
                    }
                    value={option}
                    onClick={() => handleClick(option, question)}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {/* {recommendedIcon && personIdx < 3 && (
                              <RecommendRoundedIcon className="text-blue" />
                            )} */}
                          {option?.OptionLabel}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-0">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                );
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

export default React.memo(Dropdown);
