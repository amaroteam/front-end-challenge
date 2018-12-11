import { createActions, createReducer } from 'reduxsauce';

export const { Types, Creators } = createActions({
  toogleCart: [''],
  toogleSearch: [''],
  dismissDrawer: [''],
});

const INITIAL_STATE = {
  isDrawerVisible: false,
  isCartOpen: false,
  isSearchOpen: false,
};

const toogleCart = (state = INITIAL_STATE) => ({
  ...state,
  isDrawerVisible: !state.isDrawerVisible,
  isCartOpen: !state.isCartOpen,
  isSearchOpen: false,
});

const toogleSearch = (state = INITIAL_STATE) => ({
  ...state,
  isDrawerVisible: !state.isDrawerVisible,
  isCartOpen: false,
  isSearchOpen: !state.isSearchOpen,
});

const dismissDrawer = (state = INITIAL_STATE) => ({
  ...state,
  isDrawerVisible: false,
  isCartOpen: false,
  isSearchOpen: false,
});

export const HANDLERS = {
  [Types.TOOGLE_CART]: toogleCart,
  [Types.TOOGLE_SEARCH]: toogleSearch,
  [Types.DISMISS_DRAWER]: dismissDrawer,
};

export default createReducer(INITIAL_STATE, HANDLERS);
