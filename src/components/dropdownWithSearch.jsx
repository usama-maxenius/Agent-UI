/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import RecommendRoundedIcon from '@mui/icons-material/RecommendRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import React from 'react';
import { Fragment, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToArray, updateObjectInArray } from '../helper/removeDublicates';
import { getAllCities } from '../store/action';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export default function DropdownWithSearch({
  Icon,
  placeholder,
  program,
  state,
  setState,
  callerID,
  question,
  options,
  selectProgramHandler,
  recommendedIcon,
  callerState,
  setCallerState,
  name,
}) {
  const options1 = options ?? [];
  const people = [
    {
      OptionLabel: placeholder ?? 'Select an agent to transfer to',
      OptionValue: placeholder ?? 'Select an agent to transfer to',
    },
    ...options1,
  ];

  const [selected, setSelected] = useState(
    state !== undefined
      ? state[name] === ''
        ? people[0]
        : {
            OptionLabel: state[name],
            OptionValue: state[name],
          }
      : people[0]
  );
  const [changeColor, setChangeColor] = useState(false);
  const dispatch = useDispatch();
  const { selectedSchools } = useSelector((store) => store.InitReducer);

  const onChangeHandler = async (prop) => {
    if (question) {
      question.value = prop;
      const updatedAnswers = selectedSchools?.map((school) =>
        school.selected_program?.questions?.map((qest) => {
          if (qest.QuestionFieldName === question.QuestionFieldName) {
            qest.value = prop;
            return school;
          }
          return school;
        })
      );
      dispatch({
        type: 'SELECTED_SCHOOLS',
        payload: updatedAnswers,
      });
    }

    setChangeColor(true);
    setSelected(prop);
    dispatch({
      type: 'USER_DETAILS',
      payload: { ...state, [name]: prop.OptionValue },
    });
    // let obj = {
    //   ...prop,
    //   question_key: prop.OptionLabel,
    //   question_value: prop.OptionValue,
    // };

    if (selectProgramHandler) selectProgramHandler(prop);
    if (setCallerState) {
      setCallerState({ ...callerState, [name]: prop.OptionValue });
    }

    if (name == 'state') {
      dispatch(getAllCities(prop.OptionValue));
    }
  };

  return (
    <div className="w-full">
      <Listbox>
        <div className="relative mt-1">
          <Listbox.Button
            className={classNames(
              'relative w-full cursor-default md:rounded-lg bg-lightGray font-medium py-2 pl-3 pr-10 text-left rounded focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 ',
              // program == true ? 'border-red' : 'border-gray',
              callerID == true
                ? 'border-blue  h-[52px] font-Poppin text-base rounded-[8px]'
                : 'sm:text-sm',
              changeColor == 'true'
                ? `border border-blue`
                : `border border-[#16161640]`
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
                {Icon ? Icon : !callerID && <SupportAgentRoundedIcon />}
              </span>
              {selected?.OptionLabel}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className={classNames(
                  'h-5 w-5',
                  program == true ? 'text-red' : 'text-gray-400',
                  callerID == true && 'text-blue h-6 w-6'
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
              {options1?.length == 0 && (
                <div
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? '  ' : 'text-gray-900'
                    }`
                  }
                >
                  <input
                    type="text"
                    className="w-8/12 rounded border border-blue ml-5 mt-5 rounded-3xl px-2 py-1"
                    placeholder="Search"
                  />
                  <SearchRoundedIcon className="relative -left-8 text-sm text-blue -top-0.5" />
                </div>
              )}

              {people.map((person, personIdx) => {
                if (placeholder == 'Advisors') {
                  person = {
                    QuestionFieldName: person.QuestionFieldName,
                    OptionLabel: person.AdvisorName,
                    OptionValue: person.AdvisorId,
                  };
                }
                if (placeholder == 'Select Your State') {
                  person = {
                    QuestionFieldName: person.QuestionFieldName,

                    OptionLabel: person.name,
                    OptionValue: person.name,
                  };
                }
                if (personIdx !== 0) {
                  return (
                    <Listbox.Option
                      key={personIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-5 pr-4 ${
                          active ? ' ' : 'text-darkBlack'
                        }`
                      }
                      value={person}
                      onClick={() => onChangeHandler(person)}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {recommendedIcon && personIdx < 3 && (
                              <RecommendRoundedIcon className="text-blue" />
                            )}
                            {person.OptionLabel}
                          </span>
                          {/* {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-0">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null} */}
                        </>
                      )}
                    </Listbox.Option>
                  );
                }
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
