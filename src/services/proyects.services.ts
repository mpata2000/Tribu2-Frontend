import axios from 'axios';
import { get , post, delete_} from 'services/api';

const url = 'https://psa-tribu2-proyectos.herokuapp.com'

export async function getProyects(): Promise<any> {
  const response = await get(`${url}/proyectos`);
  return response;
}

export async function postProyects(proyecto: any): Promise<any> {
  debugger;
  const projectData = {
    nombre: "HOLA MUNDO",
    descripcion: "hola mundo",
    fechaInicioReal: "2021-10-12",
    fechaFinalizacionReal: "2021-10-12",
    fechaInicioEstimada: "2021-10-12",
    fechaFinalizacionEstimada: "2021-10-12",
    fechaEntregaComunicadaACliente: "2021-10-12",
    horasEstimadas: 0,
    prioridad: "Baja",
    estado: 'No iniciada'
}
  console.log(proyecto.data);
  const response = await post(`${url}/proyectos`, proyecto.data);
  return response;
  // return null;
}

export async function saveProyects(): Promise<any> {
  const response = await get(`${url}/proyectos`);
  return response;
}
 export async function deleteProyects(id): Promise<any> {
   const response = await delete_(`${url}/proyectos/`+id);
   return response;
 }
