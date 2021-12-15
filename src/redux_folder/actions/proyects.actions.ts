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