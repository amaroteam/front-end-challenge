import { FETCH_PRODUCTS } from '../actions/index';

const INITIAL_STATE = {
  products: [],
  cart: []
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_PRODUCTS:
      return state.products.concat(action.payload.data);
      break;
    default:
      return state;
  }
}