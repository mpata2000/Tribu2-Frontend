import {
    all, call, put, takeLatest,
  } from 'redux-saga/effects';
  
  import * as constants from 'redux_folder/constants/tareas.constants';
  import * as actions from 'redux_folder/actions/tareas.actions';
  import * as constantsTickets from 'redux_folder/constants/tickets.constants';
  import * as actionsTickets from 'redux_folder/actions/tickets.actions';

  import { onGetTareasByprojectId, onPostTarea } from 'services/tareas.services';
import { onDeleteTarea } from 'redux_folder/actions/tareas.actions';
import { getTareas } from 'services/tickets.services';

  
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

  export function* tareasGetAll(action:any) {
    try {
      const data: unknown = yield call(getTareas);
      yield put(actionsTickets.onTareasGetAllSucceeded(data));
    } catch (error) {
      yield put(actionsTickets.onTareasGetAllFailed(error));
    }
  }
  
  export function* watchTareas() {
    yield all([
      takeLatest(constants.TAREAS_ON_GET_REQUESTED, getTareasForProject),
      takeLatest(constants.TAREAS_ON_POST_REQUESTED, postTareasForProject),
      takeLatest(constants.TAREAS_ON_DELETE_REQUESTED,deleteTareasForProject),
      takeLatest(constantsTickets.TAREAS_ON_GET_ALL_REQUESTED, tareasGetAll),

    ]);
  }

 