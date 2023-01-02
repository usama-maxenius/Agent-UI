import React from 'react';
import { Tab } from '@headlessui/react';
import ExpandablesCard from '../../cards/ExpandablesCard';

const DirectOffers = ({ directOffers, updateHandler, updatePopupHandler }) => (
  <>
    <Tab.Panel className="outline-none">
      <div className="overflow-y-scroll h-[calc(100vh-120px)] no-scrollbar pb-5">
        {directOffers?.map((offer) => (
          <div className="mt-5" key={offer.schoolid}>
            <ExpandablesCard
              keyName="direct"
              state={directOffers}
              updateOffersHandler={updateHandler}
              updatePopupHandler={updatePopupHandler}
              school={offer}
              selected={offer.selected}
            />
          </div>
        ))}
      </div>
    </Tab.Panel>
  </>
);

export default React.memo(DirectOffers);
