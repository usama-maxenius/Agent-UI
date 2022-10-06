let init = {
  cities: false,
  states: false,
  search_identifier: false,
};

export function InitReducer(state = init, action) {
  let { type, payload } = action;

  switch (type) {
    case 'Navigate':
      return {
        ...state,
        count: state.count + payload,
      };
    case 'allStates':
      return {
        ...state,
        states: payload,
      };
    case 'allCities':
      return {
        ...state,
        cities: payload,
      };
    case 'SEARCH_RESULTS':
      console.log(payload);
      return {
        ...state,
        search_identifier: payload,
      };

    default:
      return state;
  }
}
