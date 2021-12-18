import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';

import * as constants from 'redux_folder/constants/tickets.constants';
import * as actions from 'redux_folder/actions/tickets.actions';

import { getTickets, getProducts } from 'services/tickets.services';

export function* ticketsGetAll(action:any) {
  try {
    const data: unknown = yield call(getTickets, action.producto, action.version);
    yield put(actions.onTicketsGetAllSucceeded(data));
  } catch (error) {
    yield put(actions.onTicketsGetAllFailed(error));
  }
}

export function* productsGetAll(action:any) {
  try {
    const data: unknown = yield call(getProducts);
    yield put(actions.onProductsGetAllSucceeded(data));
  } catch (error) {
    yield put(actions.onProductsGetAllFailed(error));
  }
}


export function* watchTickets() {
  yield all([
    takeLatest(constants.TICKETS_ON_GET_ALL_REQUESTED, ticketsGetAll),
  ]);
}

export function* watchProducts() {
  yield all([
    takeLatest(constants.PRODUCTS_ON_GET_ALL_REQUESTED, productsGetAll),
  ]);
}
