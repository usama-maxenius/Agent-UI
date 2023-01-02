import { Tab } from '@headlessui/react';
import React from 'react';
import ExpandablesCard from '../../cards/ExpandablesCard';

const WarmTransfers = ({
  warmTransfers,
  updateHandler,
  updatePopupHandler,
}) => {
  return (
    <Tab.Panel className="outline-none">
      <div className="overflow-y-scroll h-[calc(100vh-120px)] no-scrollbar pb-5">
        {warmTransfers?.map((item, key) => (
          <div className="mt-5" key={key}>
            <ExpandablesCard
              keyName="transfer"
              state={warmTransfers}
              updateOffersHandler={updateHandler}
              updatePopupHandler={updatePopupHandler}
              school={item}
              selected={item.selected}
            />
          </div>
        ))}
      </div>
    </Tab.Panel>
  );
};

export default WarmTransfers;
