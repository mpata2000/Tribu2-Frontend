import { get } from 'services/api';

const url = 'https://psa-tribu2-recursos.herokuapp.com'

export async function getHours(): Promise<any> {
  const response = await get(`${url}/hours`);
  return response;
}

