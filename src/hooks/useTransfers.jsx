/* eslint-disable no-undef */
import { useEffect, useState } from 'react';
import { post } from '../helper/api_handler';

/** @type {string | undefined} */
const BaseUrl = process.env.REACT_APP_BASE_URL;

export const useTransferResults = (bodyProps) => {
  console.log(
    '🚀 ~ file: useTransfers.jsx:11 ~ useTransferResults ~ bodyProps',
    bodyProps
  );
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  var url = new URL(window.location.href);
  var search_identifier_param = url.searchParams.get('search');
  let body = {
    accesskey: process.env.REACT_APP_ACCESS_KEY,
    search_identifier: search_identifier_param,
    search_result_identifier: bodyProps?.result_identifier,
    answers: bodyProps?.answers,
  };
  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        if (bodyProps?.result_identifier) {
          const response = await post(
            `${BaseUrl}/transfers`,
            JSON.stringify(body)
          );
          setData(response[0]);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    })();
  }, [bodyProps]);

  return { data, error, loading };
};
