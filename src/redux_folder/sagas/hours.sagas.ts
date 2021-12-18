import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';

import * as constants from 'redux_folder/constants/hours.constants';
import * as actions from 'redux_folder/actions/hours.actions';

import { createHours, getHours } from 'services/hours.services';

export function* hoursGetAll() {
  try {
    const data: unknown = yield call(getHours);
    yield put(actions.onGetAllSucceeded(data));
  } catch (error) {
    yield put(actions.onGetAllFailed(error));
  }
}
export function* hoursCreate(action: any) {
  try {
    const data: unknown = yield call(createHours, action.data_);
    yield put(actions.onCreateHoursSucceeded(data));
  } catch (error) {
    yield put(actions.onCreateHoursFailed(error));
  }
}

export function* watchHours() {
  yield all([
    takeLatest(constants.HOURS_ON_GET_ALL_REQUESTED, hoursGetAll),
    takeLatest(constants.HOURS_ON_CREATE_REQUESTED,hoursCreate)
  ]);
}
