import { get } from 'services/api';

export async function getHours() {
  const response = await get(`hours`);
  return response;
}


