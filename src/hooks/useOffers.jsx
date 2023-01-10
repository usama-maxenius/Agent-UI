/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { post } from '../helper/api_handler';

/** @type {string | undefined} */
const BaseUrl = process.env.REACT_APP_BASE_URL;

export const useSchoolResults = () => {
  const [data, setData] = useState(
    // /** @type {import('../types/schools.types').ISchoolResponse[] | null} */
    null
  );
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  var url = new URL(window.location.href);
  var search_identifier_param = url.searchParams.get('search');
  let body = {
    accesskey: process.env.REACT_APP_ACCESS_KEY,
    search_identifier: search_identifier_param,
  };
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const response = await post(`${BaseUrl}/results`, JSON.stringify(body));
        setData(response[0]);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { data, error, loading };
};
export const useSchoolResultsLoop = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  var url = new URL(window.location.href);
  var search_identifier_param = url.searchParams.get('search');
  let body = {
    accesskey: process.env.REACT_APP_ACCESS_KEY,
    search_identifier: search_identifier_param,
  };
  (async () => {
    try {
      setLoading(true);
      const response = await post(`${BaseUrl}/results`, JSON.stringify(body));
      setData(response[0]);
      console.log('🚀 ~ file: useOffers.jsx:51 ~ response', response);
      return;
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  })();

  return { data, error, loading };
};
