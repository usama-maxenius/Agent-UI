import { Tab } from '@headlessui/react';
import React, { useState } from 'react';
import { classNames } from '../../helper/classNames';

import DirectOffers from './directOffers';

const OffersTab = ({ state, updateHandler }) => {
  const [selectedTab] = useState(0);
  const className =
    'w-40 rounded-lg py-2.5 mx-4.5 text-md font-Poppin leading-5 text-gray font-medium text-lg ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none hover:text-blue';

  const selectedClass = 'border-b-2 border-blue rounded-none text-blue';

  const tabClassHandler = (selected) =>
    classNames(className, selected ? selectedClass : 'text-blue-100 ');
  return (
    <>
      <div className="w-full px-2 py-4 sm:px-0">
        <Tab.Group defaultIndex={selectedTab}>
          <Tab.List className="flex justify-between space-x-1 rounded-xl p-1">
            <Tab className={({ selected }) => tabClassHandler(selected)}>
              {state.warmOffers?.length} Warm transfers
            </Tab>
            <Tab className={({ selected }) => tabClassHandler(selected)}>
              {state.directOffers?.length} Direct offers
            </Tab>
            <Tab className={({ selected }) => tabClassHandler(selected)}>
              {state.externalOffers?.length} External transfers
            </Tab>
          </Tab.List>
          <Tab.Panels className="mt-4">
            <Tab.Panel className="outline-none">
              <div className="overflow-y-scroll h-[calc(100vh-120px)] no-scrollbar pb-5">
                warmTransferOffers
                {/* {warmTransferOffers?.map((item, key) => (
                  <div className="mt-5" key={key}>
                    <ExpandableCard
                      setPopUp={setPopUp}
                      ind={item}
                      selectCard={selectCard}
                      selected={selected?.find(
                        (item1) =>
                          item1?.result_identifier ===
                            item?.result_identifier && item
                      )}
                      pingResult={pingResult}
                    />
                  </div>
                ))} */}
              </div>
            </Tab.Panel>
            <Tab.Panel className="outline-none">
              <div className="overflow-y-scroll h-[calc(100vh-120px)] no-scrollbar pb-5">
                <DirectOffers
                  state={state.directOffers}
                  offers={state.directOffers}
                  updateOffersHandler={updateHandler}
                />
              </div>
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
