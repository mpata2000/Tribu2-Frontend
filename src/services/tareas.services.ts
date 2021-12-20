import axios from 'axios';
import { get, post, delete_, put } from 'services/api';

const url = 'https://psa-tribu2-proyectos.herokuapp.com'

export async function onGetTareasByprojectId(id : any): Promise<any> {
    const response = await get(`${url}/tareas/proyecto/`+id.toString());
    return response;
  }
export async function onPostTarea(tarea : any): Promise<any> {
    console.log(tarea.data)
    const response = await post(`${url}/tareas`,tarea.data);
    return response;
  }
export async function onDeleteTarea(id : any): Promise<any> {
    const response = await delete_(`${url}/tareas/` + id.toString());
    return response;
}