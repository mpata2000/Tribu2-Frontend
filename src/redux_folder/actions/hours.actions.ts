import * as constants from 'redux_folder/constants/hours.constants';
import {AnyAction} from 'redux'

// HOURS_ON_GET
export const onHoursGet = (filters:any):  AnyAction => (
  { type: constants.HOURS_ON_GET_REQUESTED, filters});

export const onGetSucceeded = (data: any): AnyAction => (
  { type: constants.HOURS_ON_GET_SUCCEEDED, data });

export const onGetFailed = (error: unknown): AnyAction => (
  { type: constants.HOURS_ON_GET_FAILED, error });

// HOURS_ON_CREATE
export const onCreateHours = (data_:any):  AnyAction => (
  { type: constants.HOURS_ON_CREATE_REQUESTED, data_});

export const onCreateHoursSucceeded = (data: any): AnyAction => (
  { type: constants.HOURS_ON_CREATE_SUCCEEDED, data });

export const onCreateHoursFailed = (error: unknown): AnyAction => (
  { type: constants.HOURS_ON_CREATE_FAILED, error });