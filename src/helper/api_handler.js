import axios from 'axios';

const API_URL = 'https://';
const axiosAPI = axios.create({
  baseURL: API_URL,
});

axiosAPI.interceptors.response.use(
  (resp) => resp,
  (error) => Promise.reject(error)
);

export async function get(url, config = {}) {
  return await axiosAPI
    .get(url, { ...config })
    .then((response) => response.data);
}

export async function post(url, body, config = { headers: {} }) {
  return axiosAPI
    .post(url, body, { ...config })
    .then((response) => response.data);
}
