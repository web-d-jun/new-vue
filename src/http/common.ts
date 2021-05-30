import axios, { AxiosInstance, AxiosResponse } from 'axios';

const http: AxiosInstance = axios.create({
  baseURL: '/',
  headers: {
    'Content-type': 'application/json',
  },
});

// export  interface Response {
//     AxiosRespons: AxiosResponse
// }
export { http, AxiosResponse };
