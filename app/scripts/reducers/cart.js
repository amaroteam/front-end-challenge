import { REHYDRATE } from 'redux-persist/constants';
import { createReducer } from 'utils/helpers';

import { ActionTypes } from 'constants/index';
import config from 'config';

export const cartState = {
  items: [],
  total: 0,
  rehydrated: false
};

export default {
  cart: createReducer(cartState, {
    [REHYDRATE](state, action) {
      if (action.payload.cart && action.payload.cart.storageVersion === config.storageVersion) {
        return Object.assign({}, state, action.payload.cart, {
          rehydrated: true
        });
      }

      return { ...state };
    },
    [ActionTypes.ADD_TO_CART](state, action) {
      const notifications = {
        ...state.notifications,
        visible: true,
        message: action.message,
        status: action.status,
        withTimeout: action.withTimeout !== undefined || true
      };
      return Object.assign({}, state, { notifications });
    },
    [ActionTypes.REMOVE_FROM_CART](state) {
      const notifications = {
        ...state.notifications,
        visible: false,
        withTimeout: true
      };
      return Object.assign({}, state, { notifications });
    },
    [ActionTypes.RESET_CART](state) {
      const notifications = {
        ...state.notifications,
        visible: false,
        withTimeout: true
      };
      return Object.assign({}, state, { notifications });
    }
  })
};
