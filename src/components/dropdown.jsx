/* eslint-disable prettier/prettier */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-debugger */
/* eslint-disable no-unused-vars */
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import RecommendRoundedIcon from '@mui/icons-material/RecommendRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCities, getAllStates } from '../store/action';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
export default function DropdownWithSearch({
  placeholder,
  item,
  options,
  state,
  setState,
  selectProgramHandler,
  recommendedIcon,
  callerState,
  setCallerState,
  name,
  Icon,
}) {
  // debugger;
  const dispatch = useDispatch();
  const { states } = useSelector((state) => state.InitReducer);
  let { cities } = useSelector((store) => store.InitReducer);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (name === 'state') {
      dispatch(getAllStates());
    }
  }, []);

  const people =
    item.options.length > 0
      ? [...item.options]
      : name === 'state' && states
      ? [...states?.states]
      : name === 'city' && cities
      ? [...cities]
      : [
          {
            OptionLabel: `Select ${name}`,
            OptionValue: `Select ${name}`,
          },
        ];

  const [selected, setSelected] = useState(people[0]);
  const [changeColor, setChangeColor] = useState(false);

  const onChangeHandler = (prop) => {
    setChangeColor(true);
    setSelected(prop);
    if (name === 'state') {
      dispatch({
        type: 'USER_DETAILS',
        payload: { ...state, [name]: prop.name },
      });
      setState({ ...state, [name]: prop.name });
    } else if (name === 'city') {
      dispatch({
        type: 'USER_DETAILS',
        payload: { ...state, [name]: prop.OptionLabel },
      });
      setState({ ...state, [name]: prop.OptionLabel });
    } else {
      dispatch({
        type: 'USER_DETAILS',
        payload: { ...state, [name]: prop.OptionValue },
      });
      setState({ ...state, [name]: prop.OptionValue });
    }
    let obj = {
      question_key: placeholder,
      question_value: prop.OptionValue,
    };
    if (selectProgramHandler) selectProgramHandler(obj);
    if (setCallerState) {
      setCallerState({ ...callerState, [name]: prop.OptionValue });
    }

    if (name == 'state') {
      dispatch(getAllCities(prop.name));
    }
  };

  return (
    <div
      className={classNames(
        `w-[83%] mr-[6px] ${item.styleClasses}`,
        item.genderWidth && `w-[40%] pr-[6px] `,
        item.agentWidth && `w-[83%] pr-[6px] `,
        item.name1 == 'city' && 'mt-[0px]'
      )}
    >
      <Listbox>
        <div className="relative mt-1">
          <Listbox.Button
            style={{ padding: '14px' }}
            className={classNames(
              'relative w-full cursor-default rounded-lg border rounded-box items-center bg-lightGray  px-1.5 text-blue bg-lightGray py-2 pl-3 pr-10 text-left  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 ',
              changeColor ? `border border-blue` : `border border-[#16161640]`
            )}
          >
            <span
              className={classNames(
                'block truncate  font-Poppin font-medium ',
                changeColor ? `text-blue` : `text-gray`
              )}
            >
              <span className="p-[1px] pr-[7px]">{item.Icon}</span>
              {/* <SupportAgentRoundedIcon className="text-gray mr-3" /> */}

              {selected.OptionLabel}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className={classNames('h-5 w-5')}
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
              {![
                'gender',
                'graduated_in_us',
                'us_citizen',
                'computer_internet_access',
                'military_status',
                'is_contacted_by_school',
                'can_complete_enrollment',
              ].includes(item.name1) && (
                <div
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? '  ' : 'text-gray-900'
                    }`
                  }
                >
                  <input
                    type="text"
                    className="w-10/12 rounded border border-blue ml-5 mt-5 rounded-3xl px-2 py-1"
                    placeholder="Search"
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.code === 'Space') {
                        e.stopPropagation();
                      }
                    }}
                  />
                  <SearchRoundedIcon className="relative -left-8 text-sm text-blue -top-0.5" />
                </div>
              )}

              {people.map((person, personIdx) => {
                let personOBj = {};
                if (person.name) {
                  personOBj = { ...person };
                  personOBj.OptionLabel = person.name;
                }
                if (person.value) {
                  personOBj.OptionValue - person.value;
                }
                if (
                  !person.name &&
                  !person.value &&
                  typeof person !== 'string'
                ) {
                  personOBj = person;
                }
                if (typeof person === 'string') {
                  personOBj.OptionLabel = person;
                }
                console.log('person --> ', person, personOBj);

                if (personIdx !== 0) {
                  if (searchText?.length === 0) {
                    return (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-5 pr-4 ${
                            active ? 'text-blue ' : 'text-darkBlack'
                          }`
                        }
                        value={personOBj}
                        onClick={(e) => onChangeHandler(personOBj)}
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
                              {personOBj.OptionLabel}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    );
                  } else if (
                    searchText.length > 0 &&
                    personOBj?.OptionLabel?.toString()
                      ?.toLowerCase()
                      ?.includes(searchText?.toLocaleLowerCase())
                  ) {
                    return (
                      <Listbox.Option
                        key={personIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-5 pr-4 ${
                            active ? 'text-blue ' : 'text-darkBlack'
                          }`
                        }
                        value={personOBj}
                        onClick={(e) => onChangeHandler(personOBj)}
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
                              {personOBj.OptionLabel}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    );
                  }
                }
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
