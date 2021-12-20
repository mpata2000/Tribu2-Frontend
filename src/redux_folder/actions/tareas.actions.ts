import * as constants from 'redux_folder/constants/tareas.constants';
import { AnyAction } from 'redux'
//funcion que devuelve un objeto a despachar.
//TAREAS GET
export const onGetTareas = (id: string): AnyAction => (
    { type: constants.TAREAS_ON_GET_REQUESTED, id });
    
export const getTareasSucceeded = (data: any): AnyAction => (
    { type: constants.TAREAS_ON_GET_SUCCEEDED, data });

export const getTareasFailed = (error: unknown): AnyAction => (
    { type: constants.TAREAS_ON_GET_FAILED, error });

//TAREAS POST
export const onCreateTarea = (data:any): AnyAction => (
    { type: constants.TAREAS_ON_POST_REQUESTED,data });

export const onPostTareaSucceeded = (data: any): AnyAction => (
    { type: constants.TAREAS_ON_POST_SUCCEEDED, data });

export const onPostTareaFailed = (error: unknown): AnyAction => (
    { type: constants.TAREAS_ON_POST_FAILED, error });

//TAREAS DELETE
export const onDeleteTarea = (id:string): AnyAction => (
    { type: constants.TAREAS_ON_DELETE_REQUESTED,id });

export const onDeleteTareaSucceeded = (data: any): AnyAction => (
    { type: constants.TAREAS_ON_DELETE_SUCCEEDED, data });

export const onDeleteTareaFailed = (error: unknown): AnyAction => (
    { type: constants.TAREAS_ON_DELETE_FAILED, error });

