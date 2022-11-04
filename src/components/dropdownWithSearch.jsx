import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import RecommendRoundedIcon from '@mui/icons-material/RecommendRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCities } from '../store/action';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export default function DropdownWithSearch({
  Icon,
  placeholder,
  program,
  callerID,
  options,
  selectProgramHandler,
  recommendedIcon,
  callerState,
  setCallerState,
  name,
}) {
  const people = [
    {
      OptionLabel: placeholder ? placeholder : 'Select an agent to transfer to',
      OptionValue: placeholder ? placeholder : 'Select an agent to transfer to',
    },
    ...options,
  ];
  const [selected, setSelected] = useState(people[0]);
  const [changeColor, setChangeColor] = useState(false);
  const dispatch = useDispatch();
  const onChangeHandler = (prop) => {
    setChangeColor(true);
    setSelected(prop);
    let obj = {
      question_key: placeholder,
      question_value: prop.OptionValue,
    };
    if (selectProgramHandler) selectProgramHandler(obj);
    if (setCallerState) {
      setCallerState({ ...callerState, [name]: prop.OptionValue });
    }

    if (name == 'state') {
      dispatch(getAllCities(prop.OptionValue));
    }
  };

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={onChangeHandler}>
        <div className="relative mt-1">
          <Listbox.Button
            className={classNames(
              'relative w-full cursor-default rounded-lg bg-lightGray py-2 pl-3 pr-10 text-left rounded border  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 ',
              program == true ? 'border-red' : 'border-gray',
              callerID == true
                ? 'border-blue  h-[52px] font-Poppin text-base rounded-[8px]'
                : 'sm:text-sm'
            )}
          >
            <span
              className={classNames(
                'block truncate  font-Poppin',
                changeColor ? 'text-blue' : 'text-gray'
              )}
            >
              <span
                className={classNames(`text-gray`, changeColor && `text-blue`)}
              >
                {Icon ? Icon : !callerID && <SupportAgentRoundedIcon />}
              </span>
              {selected.OptionLabel}
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
              {options.length == 0 && (
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
                    OptionLabel: person.AdvisorName,
                    OptionValue: person.AdvisorId,
                  };
                }
                if (placeholder == 'Select Your State') {
                  person = {
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
