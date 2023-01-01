/* eslint-disable no-undef */
import { post } from '../helper/api_handler';

export const submitOffer = async (body) => {
  const baseUrl = process.env.REACT_APP_BASE_URL;

  let url = `${baseUrl}/submit`;

  try {
    let response = await post(url, JSON.stringify(body));
    response = response[0];
    if (response.success) {
      return response;
    }
  } catch (err) {
    console.log('🚀 ~ file: submitOffer.js:17 ~ submitOffer ~ err', err);
  }
};
