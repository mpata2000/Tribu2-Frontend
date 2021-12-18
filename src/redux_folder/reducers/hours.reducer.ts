import { Reducer } from 'redux';
import * as constants from 'redux_folder/constants/hours.constants';
import { IHoursDefaultState } from 'types/hours.types';

const defaultState: IHoursDefaultState = {
  loading: false,
  hours: [],
  creationSucceeded: false,
};

// eslint-disable-next-line default-param-last
const hoursReducer: Reducer = (state = defaultState, action) => {
  const { data, type } = action;
  switch (type) {
    case constants.HOURS_ON_GET_REQUESTED:
      return {
        ...state,
        loading: true,
        hours: [],
      };
    case constants.HOURS_ON_GET_SUCCEEDED:
      return {
        ...state,
        loading: false,
        hours: data.data.hours,
      }
    case constants.HOURS_ON_GET_FAILED:
      return {
        ...state,
        loading:false,
        hours:[],
      }
    case constants.HOURS_ON_CREATE_REQUESTED:
      return {
        ...state,
        loading:true,
        creationSucceeded:false,
      }
      case constants.HOURS_ON_CREATE_SUCCEEDED:
        return {
          ...state,
          loading:false,
          creationSucceeded:true,
        }
      case constants.HOURS_ON_CREATE_FAILED:
        return {
          ...state,
          loading:false,
          creationSucceeded:false,
        }
    default:
      return state;
  }
};

export default hoursReducer;
