import {
    all, call, put, takeLatest,
  } from 'redux-saga/effects';
  
  import * as constants from 'redux_folder/constants/tareas.constants';
  import * as actions from 'redux_folder/actions/tareas.actions';
  
  import { onGetTareasByprojectId, onPostTarea } from 'services/tareas.services';
import { onDeleteTarea } from 'redux_folder/actions/tareas.actions';

  
export function* getTareasForProject(action:any) {
    try {
      const data: unknown = yield call(onGetTareasByprojectId,action.id);
      yield put(actions.getTareasSucceeded(data));
    } catch (error) {
      yield put(actions.getTareasFailed(error));
    }
  }

export function* postTareasForProject(data_:any) {
    try {
      const data: unknown = yield call(onPostTarea,data_);
      yield put(actions.onPostTareaSucceeded(data));
    } catch (error) {
      yield put(actions.onPostTareaFailed(error));
    }
  }

export function* deleteTareasForProject(action:any) {
    try {
      const data: unknown = yield call(onDeleteTarea,action.id);
      yield put(actions.onDeleteTareaSucceeded(data));
    } catch (error) {
      yield put(actions.onDeleteTareaFailed(error));
    }
  }

  
  export function* watchTareas() {
    yield all([
      takeLatest(constants.TAREAS_ON_GET_REQUESTED, getTareasForProject),
      takeLatest(constants.TAREAS_ON_POST_REQUESTED, postTareasForProject),
      takeLatest(constants.TAREAS_ON_DELETE_REQUESTED,deleteTareasForProject),
      
    ]);
  }