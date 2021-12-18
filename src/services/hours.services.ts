import { get, post } from 'services/api';

const url = 'https://psa-tribu2-recursos.herokuapp.com'

export async function getHours(): Promise<any> {
  const response = await get(`${url}/hours`);
  return response;
}


export async function createHours(data_:any): Promise<any> {
  const response = await post(`${url}/hours`, data_);
  return response;
}
