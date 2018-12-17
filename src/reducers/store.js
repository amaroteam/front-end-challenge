import { SET_PRODUCTS, SET_BASKET } from '../actions/actionTypes';

const defaultState = {
  products: [],
  basket: [],
  loading: true,
};

const productsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        ...action.data.products,
        loading: action.data.loading,
      };

    case SET_BASKET:
      return {
        ...state,
        basket: [ ...state.basket, action.data ],
      };

    default:
      return state;
  }
};

export default productsReducer;
