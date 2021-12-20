import * as constants from 'redux_folder/constants/tareas.constants';
import { AnyAction } from 'redux'
//funcion que devuelve un objeto a despachar.
//TAREAS GET
export const onGetTareas = (data: any): AnyAction => (
    { type: constants.TAREAS_ON_GET_REQUESTED, data });
    
export const getTareasSucceeded = (data: any): AnyAction => (
    { type: constants.TAREAS_ON_GET_SUCCEEDED, data });

export const getTareasFailed = (error: unknown): AnyAction => (
    { type: constants.TAREAS_ON_GET_FAILED, error });