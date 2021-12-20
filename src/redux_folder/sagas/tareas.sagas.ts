import {
    all, call, put, takeLatest,
  } from 'redux-saga/effects';
  
  import * as constants from 'redux_folder/constants/tareas.constants';
  import * as actions from 'redux_folder/actions/tareas.actions';
  
  import { onGetTareas } from 'services/tareas.services';

  
export function* getTareasForProject(id:any) {
    try {
      const data: unknown = yield call(onGetTareas,id);
      yield put(actions.getTareasSucceeded(data));
    } catch (error) {
      yield put(actions.getTareasFailed(error));
    }
  }

  
  export function* watchTareas() {
    yield all([

      takeLatest(constants.TAREAS_ON_GET_REQUESTED, getTareasForProject),
      
    ]);
  }