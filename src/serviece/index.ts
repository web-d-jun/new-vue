import { http } from '@/http/common';


export const smartEventList = async () => {
  const response = await http.get('/mock/smart-event-list.json');
  return response;
};

// export const testApi = async () => {
//     const response = await http.get('/getapi');
//     console.log(response,'response')
// }
