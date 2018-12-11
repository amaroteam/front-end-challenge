import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  loadProductStart: [''],
  loadProductSuccess: ['product'],
  loadProductError: ['error'],
  clearProduct: [''],
  addSize: ['sku'],
});

const INITIAL_STATE = {
  loading: false,
  error: null,
  product: {},
  selectedSize: '',
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
  product: action.product,
});

const error = (state = INITIAL_STATE, action) => ({
  ...state,
  loading: false,
  error: action.error,
});

const addSize = (state = INITIAL_STATE, action) => ({
  ...state,
  selectedSize: action.sku,
});

const clear = (state = INITIAL_STATE) => ({
  ...state,
  loading: false,
  error: null,
  product: {},
  selectedSize: '',
});

export const HANDLERS = {
  [Types.LOAD_PRODUCT_START]: start,
  [Types.LOAD_PRODUCT_SUCCESS]: success,
  [Types.LOAD_PRODUCT_ERROR]: error,
  [Types.ADD_SIZE]: addSize,
  [Types.CLEAR_PRODUCT]: clear,
};

export default createReducer(INITIAL_STATE, HANDLERS);
