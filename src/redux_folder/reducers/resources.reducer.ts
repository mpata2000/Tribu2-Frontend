import { Reducer } from 'redux';
import * as constants from 'redux_folder/constants/tickets.constants';
import { IResourcesDefaultState } from 'types/tickets.types';

const defaultState: IResourcesDefaultState = {
  loading: false,
  resources: [],
};

// eslint-disable-next-line default-param-last
const resourcesReducer: Reducer = (state = defaultState, action) => {
  const { data, type } = action;
  switch (type) {
    case constants.RESOURCES_ON_GET_ALL_REQUESTED:
      return {
        ...state,
        loading: true,
        resources: [],
      };
    case constants.RESOURCES_ON_GET_ALL_SUCCEEDED:
      return {
        ...state,
        loading: false,
        resources: data.data.resources,
      }
    case constants.RESOURCES_ON_GET_ALL_FAILED:
      return {
        ...state,
        loading:false,
        resources:[],
      }
    default:
      return state;
  }
};

export default resourcesReducer;
