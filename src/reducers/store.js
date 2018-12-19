import {
  SET_PRODUCTS,
  SET_BASKET,
  REMOVE_BASKET,
} from '../actions/actionTypes';

const defaultState = {
  products: [],
  basket: [],
  isLoading: true,
};

const storeReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        ...action.data.products,
        isLoading: false,
      };

    case SET_BASKET:
      return {
        ...state,
        basket: [ ...state.basket, action.data ],
        isLoading: false,
      };

    case REMOVE_BASKET:
      return {
        ...state,
        basket: state.basket.splice((item, index) => index !== action.index),
      };

    default:
      return state;
  }
};

export default storeReducer;
