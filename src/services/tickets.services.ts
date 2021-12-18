import { get } from 'services/api';

const url = 'https://shielded-shelf-11253.herokuapp.com'

export async function getTickets(producto:string, version:string): Promise<any> {
  const response = await get(`${url}/tickets?producto=`+producto+`&version=`+version);
  return response;
}

export async function getProducts(): Promise<any> {
  const response = await get(`${url}/products`);
  return response;
}