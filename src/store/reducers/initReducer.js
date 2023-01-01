var url = new URL(window.location.href);
var search_identifier_param = url.searchParams.get('search');

let init = {
  cities: false,
  states: false,
  search_identifier: false,
  search_identifier_details: search_identifier_param ?? undefined,
  schoolsList: undefined,
  selectedSchool: false,
  selectedProgram: false,
  selectedPrograms: [],
  mode: false,
  searchDetails: undefined,
  search_results: undefined,
  selectedSchools: [],
  offers: {
    directOffers: [],
    warmOffers: [],
    externalOffers: [],
  },
};

export function InitReducer(state = init, action) {
  let { type, payload } = action;
  // console.log('🚀 ~ file: initReducer.js:18 ~ init', state);

  switch (type) {
    case 'CHANGE_MODE':
      return {
        ...state,
        mode: !state.mode,
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
    case 'SEARCH_IDENTIFIER_RESPONSE':
      return {
        ...state,
        search_identifier_details: payload,
      };
    case 'SEARCH_RESULT_RESPONSE':
      return {
        ...state,
        search_results: payload,
      };
    case 'SELECTED_SCHOOLS':
      return {
        ...state,
        selectedSchools: payload,
        selectedScohool: payload.length ? true : false,
      };
    case 'OFFERS_LIST':
      return {
        ...state,
        ...payload,
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
    case 'SELECTED_SCHOOL':
      return {
        ...state,
        selectedSchool: payload,
      };
    case 'SELECTED_PROGRAMS':
      return {
        ...state,
        selectedPrograms: payload,
      };

    case 'SELECTED_PROGRAM':
      return {
        ...state,
        selectedProgram: payload,
      };
    case 'USER_DETAILS':
      return {
        ...state,
        searchDetails: payload,
      };

    default:
      return state;
  }
}
