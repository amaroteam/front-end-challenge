import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  fetchProductsStart: [''],
  fetchProductsSuccess: ['products'],
  fetchProductsError: ['error'],
});

const INITIAL_STATE = {
  loading: false,
  error: null,
  products: [],
};

const start = (state = INITIAL_STATE) => ({
  ...state,
  loading: true,
  error: null,
});

const success = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  error: null,
  products: action.products,
});

const error = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  error: action.error,
});

export const HANDLERS = {
  [Types.FETCH_PRODUCTS_START]: start,
  [Types.FETCH_PRODUCTS_SUCCESS]: success,
  [Types.FETCH_PRODUCTS_ERROR]: error,
};

export default createReducer(INITIAL_STATE, HANDLERS);
