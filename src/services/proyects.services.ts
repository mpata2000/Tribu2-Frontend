import { get } from 'services/api';

const url = 'https://psa-tribu2-proyectos.herokuapp.com'

export async function getProyects(): Promise<any> {
  const response = await get(`${url}/proyectos`);
  return response;
}