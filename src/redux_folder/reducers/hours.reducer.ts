import { Reducer } from 'redux';
import * as constants from 'redux_folder/constants/hours.constants';
import { IHoursDefaultState } from 'types/hours.types';

const defaultState: IHoursDefaultState = {
  loading: false,
  hours: [],
};

// eslint-disable-next-line default-param-last
const hoursReducer: Reducer = (state = defaultState, action) => {
  const { data, type } = action;
  switch (type) {
    case constants.HOURS_ON_GET_ALL_REQUESTED:
      return {
        ...state,
        loading: true,
        hours: [],
      };
    case constants.HOURS_ON_GET_ALL_SUCCEEDED:
      return {
        ...state,
        loading: false,
        hours: data.data.hours,
      }
    case constants.HOURS_ON_GET_ALL_FAILED:
      return {
        ...state,
        loading:false,
        hours:[],
      }
    default:
      return state;
  }
};

export default hoursReducer;
