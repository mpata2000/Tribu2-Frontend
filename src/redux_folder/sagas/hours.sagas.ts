import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';

import * as constants from 'redux_folder/constants/hours.constants';
import * as actions from 'redux_folder/actions/hours.actions';

import { createHours, deleteHours, editHours, getHours } from 'services/hours.services';

export function* hoursGet(action:any) {
  try {
    const data: unknown = yield call(getHours,action.filters);
    yield put(actions.onGetSucceeded(data));
  } catch (error) {
    yield put(actions.onGetFailed(error));
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
export function* hoursEdit(action: any) {
  try {
    const data: unknown = yield call(editHours, action.data);
    yield put(actions.onHoursEditSucceeded(data));
  } catch (error) {
    yield put(actions.onHoursEditFailed(error));
  }
}
export function* hoursDelete(action: any) {
  try {
    const data: unknown = yield call(deleteHours, action.id);
    yield put(actions.onHoursDeleteSucceeded(data));
  } catch (error) {
    yield put(actions.onHoursDeleteFailed(error));
  }
}
export function* watchHours() {
  yield all([
    takeLatest(constants.HOURS_ON_GET_REQUESTED, hoursGet),
    takeLatest(constants.HOURS_ON_CREATE_REQUESTED,hoursCreate),
    takeLatest(constants.HOURS_ON_EDIT_REQUESTED,hoursEdit),
    takeLatest(constants.HOURS_ON_DELETE_REQUESTED,hoursDelete),
  ]);
}
