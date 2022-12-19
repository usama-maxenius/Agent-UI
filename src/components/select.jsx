// External Dependencies
import React from 'react';
import { Listbox, Transition } from '@headlessui/react';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { classNames } from '../helper/classNames';

const Selector = () => <ExpandMoreRoundedIcon />;

const Selected = () => (
  <svg
    className="h-5 w-5"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
    />
  </svg>
);

const Select = ({
  /* label, */
  options,
  selectedOption,
  handelChange,
  className,
}) => {
  return (
    <Listbox
      as="div"
      className={className}
      value={selectedOption}
      onChange={(event) => {
        handelChange(event);
      }}
    >
      {({ open }) => (
        <>
          {/*label && (
            <Listbox.Label className="mb-1 text-sm font-medium text-blue-gray-500">
              {label}
            </Listbox.Label>
          )*/}
          <div className="relative mt-1">
            <span className="inline-block w-full rounded-md shadow-sm">
              <Listbox.Button
                className={classNames(
                  'cursor-default relative w-full h-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left  transition ease-in-out duration-150',
                  className
                )}
              >
                <span className="block truncate">{selectedOption.label}</span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 ml-3 pointer-events-none">
                  <Selector />
                </span>
              </Listbox.Button>
            </span>
            <div className="absolute z-10 w-full mt-1 bg-white rounded-md shadow-lg mb-11">
              {/* bottom-0 will open the select menu up & mb-11 will put the dropup above the select option */}
              <Transition
                show={open}
                leave="transition duration-100 ease-in"
                leaveFrom="transform opacity-100"
                leaveTo="transform opacity-0"
              >
                <Listbox.Options
                  static
                  className="py-1 overflow-auto text-base rounded-md max-h-56 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
                >
                  {options.map((option) => {
                    return (
                      <Listbox.Option
                        as={React.Fragment}
                        key={option.id}
                        value={option}
                      >
                        {({ active, selected }) => {
                          return (
                            <li
                              className={`${
                                active
                                  ? 'text-white bg-indigo-600'
                                  : 'text-gray-900'
                              } cursor-default select-none relative py-2 pl-3 pr-9`}
                            >
                              <div className="flex items-center">
                                <span
                                  className={`${
                                    selected ? 'font-semibold' : 'font-normal'
                                  } flex items-center block truncate`}
                                >
                                  {option.label}
                                </span>
                                {selected && (
                                  <span
                                    className={`${
                                      active ? 'text-white' : 'text-indigo-600'
                                    } absolute inset-y-0 right-0 flex items-center mr-3 pl-1.5`}
                                  >
                                    <Selected />
                                  </span>
                                )}
                              </div>
                            </li>
                          );
                        }}
                      </Listbox.Option>
                    );
                  })}
                </Listbox.Options>
              </Transition>
            </div>
          </div>
        </>
      )}
    </Listbox>
  );
};

export default Select;
