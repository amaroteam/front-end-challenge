import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  search: ['products'],
});

const INITIAL_STATE = {
  itemsFound: [],
};

const search = (state = INITIAL_STATE, action) => ({
  ...state,
  itemsFound: [...action.products],
});

export const HANDLERS = {
  [Types.SEARCH]: search,
};

export default createReducer(INITIAL_STATE, HANDLERS);
