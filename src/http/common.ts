import axios  from 'axios';

const http = axios.create({
  baseURL: '/',
  headers: {
    'Content-type': 'application/json',
  },
});

// export  interface Response {
//     AxiosRespons: AxiosResponse
// }
export  {
  http,
}

