import { REHYDRATE } from 'redux-persist/constants';
import { createReducer } from 'utils/helpers';

import { ActionTypes } from 'constants/index';

export const productsState = {
  items: [],
  rehydrated: false
};

export default {
  products: createReducer(productsState, {
    [REHYDRATE](state, action) {
      if (action.payload.products) {
        return Object.assign({}, state, action.payload.products, {
          rehydrated: true
        });
      }

      return { ...state };
    },
    [ActionTypes.LOAD_PRODUCTS](state, action) {
      const items = [...action.payload];

      return Object.assign({}, state, { items });
    }
  })
};
