import * as constants from 'redux_folder/constants/hours.constants';

// HOURS_ON_GET_ALL
export const onHoursGetAll = ()=> (
  { type: constants.HOURS_ON_GET_ALL_REQUESTED});

export const onGetAllSucceeded = (data) => (
  { type: constants.HOURS_ON_GET_ALL_SUCCEEDED, data });

export const onGetAllFailed = (error) => (
  { type: constants.HOURS_ON_GET_ALL_FAILED, error });
