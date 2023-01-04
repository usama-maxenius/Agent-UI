/* eslint-disable no-undef */
import { post } from '../helper/api_handler';
import { getParams } from '../helper/getParams';

export const searchResults = async () => {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const accesskey = process.env.REACT_APP_ACCESS_KEY;

  let url = `${baseUrl}/results`;
  const search_identifier = await getParams();

  const body = {
    accesskey,
    search_identifier: search_identifier,
  };
  try {
    if (search_identifier) {
      let response = await post(url, JSON.stringify(body));
      response = response[0];
      if (response.success) {
        return response;
      }
    }
  } catch (err) {
    console.log('🚀 ~ file: searchResults.js:17 ~ searchResults ~ err', err);
  }
};
