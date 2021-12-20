import axios from 'axios';
import { get, post, delete_, put } from 'services/api';

const url = 'https://psa-tribu2-proyectos.herokuapp.com'

export async function onGetTareas(id : any): Promise<any> {
    const response = await get(`${url}/tareas/proyecto/`,id.toString());
    return response;
  }