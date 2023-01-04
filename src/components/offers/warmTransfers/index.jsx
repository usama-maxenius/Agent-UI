import React from 'react';
import ExpandablesCard from '../../cards/ExpandablesCard';

const WarmTransfers = ({
  warmTransfers,
  updateHandler,
  updatePopupHandler,
}) => {
  return warmTransfers.length > 0 ? (
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
  ) : (
    <div className="mt-[244px] w-[100%] flex flex-row justify-center items-center text-gray100 font-Poppin text-[22px] mx-auto text-center">
      No Warm Offers found
    </div>
  );
};

export default React.memo(WarmTransfers);
