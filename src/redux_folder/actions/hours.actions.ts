import * as constants from 'redux_folder/constants/hours.constants';
import {AnyAction} from 'redux'

// HOURS_ON_GET_ALL
export const onHoursGetAll = ():  AnyAction => (
  { type: constants.HOURS_ON_GET_ALL_REQUESTED});

export const onGetAllSucceeded = (data: any): AnyAction => (
  { type: constants.HOURS_ON_GET_ALL_SUCCEEDED, data });

export const onGetAllFailed = (error: unknown): AnyAction => (
  { type: constants.HOURS_ON_GET_ALL_FAILED, error });

// HOURS_ON_GET_ALL
export const onCreateHours = (data_:any):  AnyAction => (
  { type: constants.HOURS_ON_CREATE_REQUESTED, data_});

export const onCreateHoursSucceeded = (data: any): AnyAction => (
  { type: constants.HOURS_ON_CREATE_SUCCEEDED, data });

export const onCreateHoursFailed = (error: unknown): AnyAction => (
  { type: constants.HOURS_ON_CREATE_FAILED, error });