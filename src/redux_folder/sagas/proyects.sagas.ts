import {
    all, call, put, takeLatest,
  } from 'redux-saga/effects';
  
  import * as constants from 'redux_folder/constants/proyects.constants';
  import * as actions from 'redux_folder/actions/proyects.actions';
  
  import { deleteProyects, getProyects , postProyects } from 'services/proyects.services';

  
  export function* proyectsGetAll() {
    try {
      const data: unknown = yield call(getProyects);
      yield put(actions.onGetAllSucceeded(data));
    } catch (error) {
      yield put(actions.onGetAllFailed(error));
    }
  }
  
  export function* proyectsCreate(data_:any) {
    try {
      const data: unknown = yield call(postProyects,data_);
      yield put(actions.createProyectSucceeded(data));
    } catch (error) {
      yield put(actions.createProyectFailed(error));
    }
  }

  export function* proyectsPut(data_:any) {
    try {
      const data: unknown = yield call(postProyects,data_);
      yield put(actions.putProyectSucceeded(data));
    } catch (error) {
      yield put(actions.putProyectFailed(error));
    }
  }

  export function* proyectsDelete(action:any) {
    try {
      const data: unknown = yield call(deleteProyects,action.id);
      yield put(actions.deleteProyectSucceeded(data));
    } catch (error) {
      yield put(actions.deleteProyectFailed(error));
    }
  }

  
  
  export function* watchProyects() {
    yield all([
      takeLatest(constants.PROYECTS_ON_GET_ALL_REQUESTED, proyectsGetAll),
      takeLatest(constants.PROYECTS_ON_CREATE_REQUESTED, proyectsCreate),
      takeLatest(constants.PROYECTS_ON_PUT_REQUESTED, proyectsPut),
      takeLatest(constants.PROYECTS_ON_DELETE_REQUESTED, proyectsDelete),
    ]);
  }
  