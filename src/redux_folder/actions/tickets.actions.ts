import * as constants from 'redux_folder/constants/tickets.constants';
import {AnyAction} from 'redux'

// TICKETS_ON_GET_ALL
export const onTicketsGetAll = ():  AnyAction => (
  { type: constants.TICKETS_ON_GET_ALL_REQUESTED});

export const onGetAllSucceeded = (data: any): AnyAction => (
  { type: constants.TICKETS_ON_GET_ALL_SUCCEEDED, data });

export const onGetAllFailed = (error: unknown): AnyAction => (
  { type: constants.TICKETS_ON_GET_ALL_FAILED, error });
