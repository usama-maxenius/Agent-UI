import { post } from '../../helper/api_handler';

export let getAllStates = () => {
  return async (dispatch) => {
    let url = 'https://countriesnow.space/api/v0.1/countries/states';
    let body = {
      country: 'United States',
    };
    let states = await post(url, body);
    dispatch({
      type: 'allStates',
      payload: states.data,
    });
  };
};
export let getAllCities = (selected) => {
  return async (dispatch) => {
    let url = 'https://countriesnow.space/api/v0.1/countries/state/cities';
    let body = {
      country: 'United States',
      state: selected,
    };
    let cities = await post(url, body);
    dispatch({
      type: 'allCities',
      payload: cities.data,
    });
  };
};
