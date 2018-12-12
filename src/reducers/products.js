import { SET_PRODUCTS } from '../actions/actionTypes';

const defaultState = {
  products: [],
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

    default:
      return state;
  }
};

export default productsReducer;
