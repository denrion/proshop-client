import axios from 'axios';

const BASE_URL = process.env.REACT_APP_BASE_URL;

let API_URL = `${BASE_URL}/api/v1/`;

const API = axios.create({
  baseURL: API_URL,
  responseType: 'json',
});

// API.interceptors.request.use(
//   (config) => {
//     // Set Bearer token
//     const token = localStorage.getItem('token');

//     if (token) config.headers['Authorization'] = `Bearer ${token}`;

//     // Set Content Type
//     if (config.method !== 'get')
//       config.headers['Content-Type'] = 'application/json';

//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

export default API;
