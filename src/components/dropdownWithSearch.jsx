import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import SupportAgentRoundedIcon from '@mui/icons-material/SupportAgentRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import RecommendRoundedIcon from '@mui/icons-material/RecommendRounded';

export default function Example({ Icon, placeholder }) {
  const people = [
    { name: placeholder ? placeholder : 'Select an agent to transfer to' },
    { name: 'Course 1' },
    { name: 'Course 6' },
    { name: 'Course 1' },
    { name: 'Course 2' },
    { name: 'Course 3' },
    { name: 'Course 4' },
    { name: 'Course 5' },
    { name: 'Course 6' },
  ];
  const [selected, setSelected] = useState(people[0]);
  return (
    <div className="w-full">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-lightGray py-2 pl-3 pr-10 text-left rounded border border-gray focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate text-gray font-Poppin ">
              {Icon ? (
                Icon
              ) : (
                <SupportAgentRoundedIcon className="text-gray mr-3" />
              )}{' '}
              {selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
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

              {people.map((person, personIdx) => {
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
                            {personIdx < 3 && (
                              <RecommendRoundedIcon className="text-blue" />
                            )}{' '}
                            {person.name}
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
