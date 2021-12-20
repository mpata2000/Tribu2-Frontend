import {
  all, call, put, takeLatest,
} from 'redux-saga/effects';

import * as constants from 'redux_folder/constants/tickets.constants';
import * as actions from 'redux_folder/actions/tickets.actions';

import { getTickets, getProducts, getTareas, getResources, getClients } from 'services/tickets.services';

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

export function* resourcesGetAll(action:any) {
  try {
    const data: unknown = yield call(getResources);
    yield put(actions.onResourcesGetAllSucceeded(data));
  } catch (error) {
    yield put(actions.onResourcesGetAllFailed(error));
  }
}

export function* clientsGetAll(action:any) {
  try {
    const data: unknown = yield call(getClients);
    yield put(actions.onClientsGetAllSucceeded(data));
  } catch (error) {
    yield put(actions.onClientsGetAllFailed(error));
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

export function* watchResources() {
  yield all([
    takeLatest(constants.RESOURCES_ON_GET_ALL_REQUESTED, resourcesGetAll),
  ]);
}

export function* watchClients() {
  yield all([
    takeLatest(constants.CLIENTS_ON_GET_ALL_REQUESTED, clientsGetAll),
  ]);
}
