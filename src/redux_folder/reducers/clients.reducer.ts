import { Reducer } from 'redux';
import * as constants from 'redux_folder/constants/tickets.constants';
import { IClientsDefaultState } from 'types/tickets.types';

const defaultState: IClientsDefaultState = {
  loading: false,
  clients: [],
};

// eslint-disable-next-line default-param-last
const clientsReducer: Reducer = (state = defaultState, action) => {
  const { data, type } = action;
  switch (type) {
    case constants.CLIENTS_ON_GET_ALL_REQUESTED:
      return {
        ...state,
        loading: true,
        clients: [],
      };
    case constants.CLIENTS_ON_GET_ALL_SUCCEEDED:
      return {
        ...state,
        loading: false,
        clients: data.data,
      }
    case constants.CLIENTS_ON_GET_ALL_FAILED:
      return {
        ...state,
        loading:false,
        clients:[],
      }
    default:
      return state;
  }
};

export default clientsReducer;
