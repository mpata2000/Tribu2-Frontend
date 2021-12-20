import { Reducer } from 'redux';
import * as constants from 'redux_folder/constants/tickets.constants';
import { IProductsDefaultState } from 'types/tickets.types';

const defaultState: IProductsDefaultState = {
  loading: false,
  products: [],
};

// eslint-disable-next-line default-param-last
const productsReducer: Reducer = (state = defaultState, action) => {
  const { data, type } = action;
  switch (type) {
    case constants.PRODUCTS_ON_GET_ALL_REQUESTED:
      return {
        ...state,
        loading: true,
        products: [],
      };
    case constants.PRODUCTS_ON_GET_ALL_SUCCEEDED:
      return {
        ...state,
        loading: false,
        products: data.data,
      }
    case constants.PRODUCTS_ON_GET_ALL_FAILED:
      return {
        ...state,
        loading:false,
        products:[],
      }
    default:
      return state;
  }
};

export default productsReducer;
