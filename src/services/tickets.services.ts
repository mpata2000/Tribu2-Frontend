import { get } from 'services/api';

const url = 'https://shielded-shelf-11253.herokuapp.com'

export async function getTickets(): Promise<any> {
  const response = await get(`${url}/tickets`);
  return response;
}

