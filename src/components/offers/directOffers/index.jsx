import React from 'react';
import ExpandablesCard from '../../cards/ExpandablesCard';

const DirectOffers = ({ offers, updateOffersHandler, state }) => (
  <>
    {offers?.map((offer) => (
      <div className="mt-5" key={offer.schoolid}>
        <ExpandablesCard
          state={state}
          updateOffersHandler={updateOffersHandler}
          school={offer}
          selected={offer.selected}
        />
      </div>
    ))}
  </>
);

export default React.memo(DirectOffers);
