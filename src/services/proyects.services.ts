import axios from 'axios';
import { get , post, delete_} from 'services/api';

const url = 'https://psa-tribu2-proyectos.herokuapp.com'

export async function getProyects(): Promise<any> {
  const response = await get(`${url}/proyectos`);
  return response;
}

export async function postProyects(proyecto: any): Promise<any> {
  const response = await post(`${url}/proyectos`, proyecto.data);
  return response;
}

export async function saveProyects(): Promise<any> {
  const response = await get(`${url}/proyectos`);
  return response;
}
 export async function deleteProyects(id): Promise<any> {
   const response = await delete_(`${url}/proyectos/${id}`);
   return response;
 }

export async function getTasks(): Promise<any> {
  const response = await get(`${url}/tareas`);
  return response;
}