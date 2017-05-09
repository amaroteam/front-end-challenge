import { FETCH_PRODUCTS } from '../actions/index';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case FETCH_PRODUCTS:     
      return state.concat(action.payload.data);
      break;
    default:
      return state;
  }
}