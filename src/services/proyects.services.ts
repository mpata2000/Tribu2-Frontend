import axios from 'axios';
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
  const data1 ={
    idProyecto: 4,
    nombre: "EDITADO2",
    descripcion: "string",
    fechaInicioReal: "2021-12-18",
    fechaFinalizacionReal: "2021-12-18",
    fechaInicioEstimada: "2021-12-18",
    fechaFinalizacionEstimada: "2021-12-18",
    fechaEntregaComunicadaACliente: "2021-12-18",
    horasEstimadas: 0,
    prioridad: "string",
    estado: "string"
  }
  debugger;
  const response = await put(`${url}/proyectos`, data1);
  return response;
}

export async function deleteProyects(id: any): Promise<any> {
    const response = await delete_(`${url}/proyectos/` + id.toString());
    return response;
}
