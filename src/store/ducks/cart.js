import { createActions, createReducer } from 'reduxsauce';
import { sortByItemName } from '../../utils/productHandler';

export const { Types, Creators } = createActions({
  addToCart: ['product'],
  removeFromCart: ['products'],
  emptyCart: [''],
  checkSizes: [''],
  dismissSizeWarning: [''],
});

const INITIAL_STATE = {
  items: [],
  count: 0,
  sizeIsMissing: false,
};

const add = (state = INITIAL_STATE, action) => ({
  ...state,
  items: sortByItemName([action.product, ...state.items]),
  count: [action.product, ...state.items].length,
});

const remove = (state = INITIAL_STATE, action) => ({
  ...state,
  items: sortByItemName([...action.products]),
  count: [...action.products].length,
});

const empty = (state = INITIAL_STATE) => ({
  ...state,
  items: [],
  count: 0,
  sizeIsMissing: false,
});

const check = (state = INITIAL_STATE) => ({
  ...state,
  sizeIsMissing: true,
});

const dismissWarning = (state = INITIAL_STATE) => ({
  ...state,
  sizeIsMissing: false,
});

export const HANDLERS = {
  [Types.ADD_TO_CART]: add,
  [Types.REMOVE_FROM_CART]: remove,
  [Types.EMPTY_CART]: empty,
  [Types.CHECK_SIZES]: check,
  [Types.DISMISS_SIZE_WARNING]: dismissWarning,
};

export default createReducer(INITIAL_STATE, HANDLERS);
