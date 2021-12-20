import * as constants from 'redux_folder/constants/proyects.constants';
import {AnyAction} from 'redux'
//funcion que devuelve un objeto a despachar.
// PROYECTS_ON_GET_ALL
export const onProyectsGetAll = ():  AnyAction => (
  { type: constants.PROYECTS_ON_GET_ALL_REQUESTED});
  
export const onGetAllSucceeded = (data: any): AnyAction => (
  { type: constants.PROYECTS_ON_GET_ALL_SUCCEEDED, data });

export const onGetAllFailed = (error: unknown): AnyAction => (
  { type: constants.PROYECTS_ON_GET_ALL_FAILED, error });
  

export const createProyect = (data: any):  AnyAction => (
    { type: constants.PROYECTS_ON_CREATE_REQUESTED, data});
  
export const createProyectSucceeded = (data: any): AnyAction => (
    { type: constants.PROYECTS_ON_CREATE_SUCCEEDED, data });
  
export const createProyectFailed = (error: unknown): AnyAction => (
  { type: constants.PROYECTS_ON_CREATE_FAILED, error });


export const onGetTasks = (): AnyAction => (
{type: constants.PROYECTS_ON_GET_TASKS_REQUESTED});

export const onGetTasksSucceeded = (data: any): AnyAction => (
  { type: constants.PROYECTS_ON_GET_TASKS_SUCCEEDED, data });

export const onGetTasksFailed = (error: unknown): AnyAction => (
  { type: constants.PROYECTS_ON_GET_TASKS_FAILED, error });
  

export const onGetTasksByIds = (ids: string[]): AnyAction => (
  {type: constants.PROYECTS_ON_GET_TASKS_BY_IDS_REQUESTED, ids});

export const onGetTasksByIdsSucceeded = (data: any): AnyAction => (
  { type: constants.PROYECTS_ON_GET_TASKS_BY_IDS_SUCCEEDED, data });

export const onGetTasksByIdsFailed = (error: unknown): AnyAction => (
  { type: constants.PROYECTS_ON_GET_TASKS_BY_IDS_FAILED, error });