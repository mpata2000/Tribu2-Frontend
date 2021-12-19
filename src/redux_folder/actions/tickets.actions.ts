import * as constants from 'redux_folder/constants/tickets.constants';
import {AnyAction} from 'redux'

// TICKETS_ON_GET_ALL
export const onTicketsGetAll = (producto:string, version:string):  AnyAction => (
  { type: constants.TICKETS_ON_GET_ALL_REQUESTED, producto: producto, version: version});

export const onTicketsGetAllSucceeded = (data: any): AnyAction => (
  { type: constants.TICKETS_ON_GET_ALL_SUCCEEDED, data });

export const onTicketsGetAllFailed = (error: unknown): AnyAction => (
  { type: constants.TICKETS_ON_GET_ALL_FAILED, error });


// PRODUCTS_ON_GET_ALL
export const onProductsGetAll = ():  AnyAction => (
  { type: constants.PRODUCTS_ON_GET_ALL_REQUESTED});

export const onProductsGetAllSucceeded = (data: any): AnyAction => (
  { type: constants.PRODUCTS_ON_GET_ALL_SUCCEEDED, data });

export const onProductsGetAllFailed = (error: unknown): AnyAction => (
  { type: constants.PRODUCTS_ON_GET_ALL_FAILED, error });

// PRODUCTS_ON_GET_ALL
export const onTareasGetAll = ():  AnyAction => (
  { type: constants.TAREAS_ON_GET_ALL_REQUESTED});

export const onTareasGetAllSucceeded = (data: any): AnyAction => (
  { type: constants.TAREAS_ON_GET_ALL_SUCCEEDED, data });

export const onTareasGetAllFailed = (error: unknown): AnyAction => (
  { type: constants.TAREAS_ON_GET_ALL_FAILED, error });
