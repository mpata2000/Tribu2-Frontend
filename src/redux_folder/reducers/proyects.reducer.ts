import { Reducer } from 'redux';
import * as constants from 'redux_folder/constants/proyects.constants';

const defaultState  = {
  loading: false,
  proyects: [],
  tasks: [],
};

// eslint-disable-next-line default-param-last
const proyectsReducer: Reducer = (state = defaultState, action) => {
  const { data, type } = action;
  switch (type) {
    case constants.PROYECTS_ON_GET_ALL_REQUESTED:
      return {
        ...state,
        loading: true,
        proyects: [],
      };

    case constants.PROYECTS_ON_GET_TASKS_REQUESTED:
      return {
        ...state,
        loading: true,
        tasks: [],
      };
    case constants.PROYECTS_ON_GET_ALL_SUCCEEDED:
      return {
        ...state,
        loading: false,
        proyects: data.data,
      }
    case constants.PROYECTS_ON_GET_TASKS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        tasks: data.data,
      }
    case constants.PROYECTS_ON_GET_ALL_FAILED:
      return {
        ...state,
        loading:false,
        proyects:[],
      }
    case constants.PROYECTS_ON_GET_TASKS_FAILED:
      return {
        ...state,
        loading:false,
        tasks:[],
      }
    default:
      return state;
  }
};

export default proyectsReducer;