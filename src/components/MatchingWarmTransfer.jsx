import { useState } from 'react';
import { Tab } from '@headlessui/react';
import ExpandableCard from './expandableCard';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example({ setPopUp }) {
  let [categories] = useState({
    '3 Warm transfers': [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    '4 Direct offers': [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    '0 External transfers': [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  });
  const [selected, setSelected] = useState([]);

  const selectCard = (ind) => {
    let ele = ind;
    if (selected.includes(ind)) {
      setSelected([]);
    }
    if (!selected.includes(ind)) {
      if (selected.length < 1) {
        setSelected([...selected, ele]);
      } else {
        setPopUp(true);
      }
    }
  };

  return (
    <div className="w-full px-2 py-4 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex justify-between space-x-1 rounded-xl p-1">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-40 rounded-lg py-2.5 mx-4.5 text-md font-Poppin leading-5 text-gray font-medium text-lg ',
                  'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none',
                  'hover:text-blue',
                  selected
                    ? ' border-b-2 border-blue rounded-none text-blue'
                    : 'text-blue-100 '
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-4">
          <Tab.Panel>
            <div className="overflow-y-scroll h-[calc(100vh-150px)] no-scrollbar pb-5">
              {[1, 2, 3].map((item, key) => (
                <div className="mt-5" key={key}>
                  <ExpandableCard
                    setPopUp={setPopUp}
                    ind={item}
                    selectCard={selectCard}
                    selected={selected.includes(item)}
                  />
                </div>
              ))}
            </div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="overflow-y-scroll h-[calc(100vh-150px)] no-scrollbar pb-5">
              <div className="mt-5">
                <ExpandableCard setPopUp={setPopUp} />
              </div>
              <div className="mt-5">
                <ExpandableCard />
              </div>
            </div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
