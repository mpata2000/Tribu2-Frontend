import { Reducer } from 'redux';
import * as constants from 'redux_folder/constants/hours.constants';
import { IHoursDefaultState } from 'types/hours.types';

const defaultState: IHoursDefaultState = {
  loading: false,
  hours: [],
  actionSucceeded: false,
  editSucceeded: false,
  deleteSucceeded: false,
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
    case constants.HOURS_ON_EDIT_REQUESTED:
      case constants.HOURS_ON_DELETE_REQUESTED:
      return {
        ...state,
        loading:true,
        actionSucceeded:false,
      }
      case constants.HOURS_ON_CREATE_SUCCEEDED:
      case constants.HOURS_ON_EDIT_SUCCEEDED:
      case constants.HOURS_ON_DELETE_SUCCEEDED:
        return {
          ...state,
          loading:false,
          actionSucceeded:true,
        }
      case constants.HOURS_ON_CREATE_FAILED:
        case constants.HOURS_ON_EDIT_FAILED:
        case constants.HOURS_ON_DELETE_FAILED:
        return {
          ...state,
          loading:false,
          actionSucceeded:false,
        }
    default:
      return state;
  }
};

export default hoursReducer;
