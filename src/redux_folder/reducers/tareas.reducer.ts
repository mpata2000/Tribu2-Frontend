import { Reducer } from 'redux';
import * as constants from 'redux_folder/constants/tareas.constants';
import { ITareasDefaultState } from 'types/tareas.types';

const defaultState: ITareasDefaultState = {
  loading: false,
  tareas: [],
};

// eslint-disable-next-line default-param-last
const tareasReducer: Reducer = (state = defaultState, action) => {
  const { data, type } = action;
  switch (type) {
    case constants.TAREAS_ON_GET_REQUESTED:
      return {
        ...state,
        loading: true,
        tareas: [],
      };
    case constants.TAREAS_ON_GET_SUCCEEDED:
      return {
        ...state,
        loading: false,
        tareas: data.data,
      }
    case constants.TAREAS_ON_GET_FAILED:
      return {
        ...state,
        loading:false,
        tareas:[],
      }
    default:
      return state;
  }
};

export default tareasReducer;