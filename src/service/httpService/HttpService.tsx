import axios, { AxiosResponse } from 'axios';

// interface GetParams {
//   [key: string]: any;
// }

export const get = async (url: string, params: any): Promise<AxiosResponse> => {
  const data: AxiosResponse = await axios.get(process.env.REACT_APP_base_url + url, { params });
  // console.log(data);
  return data;
};






