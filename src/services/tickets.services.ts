import { get } from 'services/api';

const url = 'https://shielded-shelf-11253.herokuapp.com'
const proyectos_url = "https://psa-tribu2-proyectos.herokuapp.com"
const recursos_url = "https://psa-tribu2-recursos.herokuapp.com"

export async function getTickets(producto:string, version:string): Promise<any> {
  const response = await get(`${url}/tickets?producto=`+producto+`&version=`+version);
  return response;
}

export async function getProducts(): Promise<any> {
  const response = await get(`${url}/products`);
  return response;
}

export async function getTareas(): Promise<any> {
  const response = await get(`${proyectos_url}/tareas`);
  return response;
}

export async function getResources(): Promise<any> {
  const response = await get(`${recursos_url}/resources`);
  return response;
}

export async function getClients(): Promise<any> {
  const response = await get(`${url}/clients`);
  return response;
}