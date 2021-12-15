import {
    all, call, put, takeLatest,
  } from 'redux-saga/effects';
  
  import * as constants from 'redux_folder/constants/proyects.constants';
  import * as actions from 'redux_folder/actions/proyects.actions';
  
  import { getProyects } from 'services/proyects.services';
  
  export function* proyectsGetAll() {
    try {
      const data: unknown = yield call(getProyects);
      yield put(actions.onGetAllSucceeded(data));
    } catch (error) {
      yield put(actions.onGetAllFailed(error));
    }
  }
  
  
  export function* watchProyects() {
    yield all([
      takeLatest(constants.PROYECTS_ON_GET_ALL_REQUESTED, proyectsGetAll),
    ]);
  }
  