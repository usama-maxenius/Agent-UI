import { Tab } from '@headlessui/react';
import React from 'react';
import { classNames } from '../../helper/classNames';
import WarmTransfers from './warmTransfers';
import DirectOffers from './directOffers';

const OffersTab = ({
  state,
  selectedTab,
  updateHandler,
  updateSelectedTabHandler,
  updatePopupHandler,
}) => {
  const tabClassHandler = (selected) =>
    classNames(className, selected ? selectedClass : 'text-blue-100 ');

  const className =
    'w-40 rounded-lg py-2.5 mx-4.5 text-md font-Poppin leading-5 text-gray font-medium text-lg ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none hover:text-blue';

  const selectedClass = 'border-b-2 border-blue rounded-none text-blue';

  const tabCategories = [
    {
      id: 0,
      title: 'Warm transfers',
      count: state.warmTransfers.length,
    },
    {
      id: 1,
      title: 'Direct offers',
      count: state.directOffers.length,
    },
    {
      id: 2,
      title: 'External transfers',
      count: state.externalOffers.length,
    },
  ];

  return (
    <>
      <div className="w-full px-2 py-4 sm:px-0">
        <Tab.Group defaultIndex={selectedTab}>
          <Tab.List className="flex justify-between space-x-1 rounded-xl p-1">
            {tabCategories.map(({ id, title, count }) => (
              <Tab
                key={id}
                className={({ selected }) => tabClassHandler(selected)}
                onClick={() => updateSelectedTabHandler(id)}
              >
                {count > 0 ? count : ''} {title}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-4">
            <Tab.Panel className="outline-none">
              <WarmTransfers
                warmTransfers={state.warmTransfers}
                updateHandler={updateHandler}
                updatePopupHandler={updatePopupHandler}
              />
            </Tab.Panel>
            {/* Direct Offers */}
            <Tab.Panel className="outline-none">
              <DirectOffers
                directOffers={state.directOffers}
                updateHandler={updateHandler}
                updatePopupHandler={updatePopupHandler}
              />
            </Tab.Panel>
            <Tab.Panel className="outline-none">
              <div className="mt-[244px] w-[100%] flex flex-row justify-center items-center text-gray100 font-Poppin text-[22px] mx-auto text-center">
                The caller hasn’t matched with any Schools for external transfer
              </div>
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </>
  );
};

export default OffersTab;
