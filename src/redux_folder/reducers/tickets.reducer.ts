import { Reducer } from 'redux';
import * as constants from 'redux_folder/constants/tickets.constants';
import { ITicketsDefaultState } from 'types/tickets.types';

const defaultState: ITicketsDefaultState = {
  loading: false,
  tickets: [],
};

// eslint-disable-next-line default-param-last
const ticketsReducer: Reducer = (state = defaultState, action) => {
  const { data, type } = action;
  switch (type) {
    case constants.TICKETS_ON_GET_ALL_REQUESTED:
      return {
        ...state,
        loading: true,
        tickets: [],
      };
    case constants.TICKETS_ON_GET_ALL_SUCCEEDED:
      return {
        ...state,
        loading: false,
        tickets: data.data,
      }
    case constants.TICKETS_ON_GET_ALL_FAILED:
      return {
        ...state,
        loading:false,
        tickets:[],
      }
    default:
      return state;
  }
};

export default ticketsReducer;
