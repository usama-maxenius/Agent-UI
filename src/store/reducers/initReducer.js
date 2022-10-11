let init = {
  cities: false,
  states: false,
  search_identifier: false,
  schoolsList: undefined,
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
      return {
        ...state,
        search_identifier: payload,
      };
    case 'SEARCH_SCHOOLS':
      return {
        ...state,
        schoolsList: payload,
      };
    case 'SEARCH_PING_API':
      return {
        ...state,
        pingResult: payload,
      };
    case 'SEARCH_TRANSFER_API':
      return {
        ...state,
        transferResult: payload,
      };
    case 'CLEAR_PING_TRANSFER_RESULTS':
      return {
        ...state,
        transferResult: null,
        pingResult: null,
      };

    default:
      return state;
  }
}
