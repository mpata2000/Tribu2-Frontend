import { get , post, delete_} from 'services/api';

const url = 'https://psa-tribu2-proyectos.herokuapp.com'

export async function getProyects(): Promise<any> {
  const response = await get(`${url}/proyectos`);
  return response;
}

export async function postProyects(data: any): Promise<any> {
  console.log(data);
  const response = await post(`${url}/proyectos`, data);
  return response;
}

export async function saveProyects(): Promise<any> {
  const response = await get(`${url}/proyectos`);
  return response;
}
 export async function deleteProyects(id): Promise<any> {
   const response = await delete_(`${url}/proyectos/`+id);
   return response;
 }
