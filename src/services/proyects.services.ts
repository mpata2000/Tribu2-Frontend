import { get , post} from 'services/api';

const url = 'https://psa-tribu2-proyectos.herokuapp.com'

export async function getProyects(): Promise<any> {
  const response = await get(`${url}/proyectos`);
  return response;
}

export async function postProyects(data: any): Promise<any> {
  const response = await post(`${url}/proyectos`, data);
  return response;
}

export async function saveProyects(): Promise<any> {
  const response = await get(`${url}/proyectos`);
  return response;
}
// export async function deleteProyects(id): Promise<any> {
//   const response = await get(`${url}/proyectos/`+id);
//   return response;
// }
