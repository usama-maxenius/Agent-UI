import React from 'react';
import ExpandablesCard from '../../cards/ExpandablesCard';

const DirectOffers = ({ directOffers, updateHandler, updatePopupHandler }) => {
  return directOffers.length > 0 ? (
    <>
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
    </>
  ) : (
    <div className="mt-[244px] w-[100%] flex flex-row justify-center items-center text-gray100 font-Poppin text-[22px] mx-auto text-center">
      No Direct Offers found
    </div>
  );
};

export default React.memo(DirectOffers);
