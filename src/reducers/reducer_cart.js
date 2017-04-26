import { ADD_PRODUCT } from '../actions/index';

const INITIAL_STATE = [];

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_PRODUCT:     
      return state.concat(action.payload.data);
      break;
    default:
      return state;
  }
}