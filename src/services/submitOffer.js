/* eslint-disable no-undef */
import { post } from '../helper/api_handler';
import { getParams } from '../helper/getParams';

const baseUrl = process.env.REACT_APP_BASE_URL;
const accesskey = process.env.REACT_APP_ACCESS_KEY;

export const directOffersSubmit = async (directOffers) => {
  let results = [];
  const findSelectedOffers = await directOffers?.filter(
    (offer) => offer.selected
  );

  const search_identifier = await getParams();
  const prepareBodyRequest = await findSelectedOffers?.map((offer) => {
    let answers = [];
    if (offer.selected_program?.questions) {
      // filter by visible questions
      const valid_questions = offer.selected_program?.questions.filter(
        (qes) => qes.IsVisible
      );
      if (valid_questions.length) {
        answers = valid_questions?.map((question) => {
          return {
            question_key: question.value?.OptionLabel,
            question_value: question.value?.OptionValue,
          };
        });
      }
    }
    return {
      accesskey,
      search_identifier: search_identifier,
      search_result_identifier: offer.result_identifier,
      search_result_set_identifier: offer.result_set_identifier,
      answers: answers ?? [],
    };
  });
  const fetchResults = async (body) => {
    const res = await submitOffer(body);
    results.push(res[0]);
  };

  // Sending Submit api requests
  for (const body of prepareBodyRequest) {
    await new Promise((resolve) =>
      setTimeout(() => resolve(fetchResults(body)), 2000)
    );
  }
  return {
    response: results,
    count: results.length,
  };
};

export const submitOffer = async (body) => {
  let url = `${baseUrl}/submit`;

  try {
    let response = await post(url, JSON.stringify(body));
    return response;
  } catch (err) {
    console.log('🚀 ~ file: submitOffer.js:17 ~ submitOffer ~ err', err);
  }
};
