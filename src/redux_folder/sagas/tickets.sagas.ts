import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';

import * as constants from 'redux_folder/constants/tickets.constants';
import * as actions from 'redux_folder/actions/tickets.actions';

import { getTickets } from 'services/tickets.services';

export function* ticketsGetAll() {
  try {
    const data: unknown = yield call(getTickets);
    yield put(actions.onGetAllSucceeded(data));
  } catch (error) {
    yield put(actions.onGetAllFailed(error));
  }
}


export function* watchTickets() {
  yield all([
    takeLatest(constants.TICKETS_ON_GET_ALL_REQUESTED, ticketsGetAll),
  ]);
}
