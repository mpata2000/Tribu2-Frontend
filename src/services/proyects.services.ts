import { get, post, delete_, put } from 'services/api';

const url = 'https://psa-tribu2-proyectos.herokuapp.com'

export async function getProyects(): Promise<any> {
  const response = await get(`${url}/proyectos`);
  return response;
}

export async function postProyects(proyecto: any): Promise<any> {
  const response = await post(`${url}/proyectos`, proyecto.data);
  return response;
}

export async function putProyects(data: any): Promise<any> {
  const response = await put(`${url}/proyectos`, data);
  return response;
}

export async function deleteProyects(id: any): Promise<any> {
    const response = await delete_(`${url}/proyectos/` + id.toString());
    return response;
}
