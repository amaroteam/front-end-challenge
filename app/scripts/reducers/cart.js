import { REHYDRATE } from 'redux-persist/constants';
import { createReducer, round } from 'utils/helpers';

import { ActionTypes } from 'constants/index';
import config from 'config';

export const cartState = {
  frete: 14.99,
  items: [],
  quantity: 0,
  rehydrated: false,
  subtotal: 0,
  total: 0,
  visible: false
};

function parseData(items) {
  const data = {
    quantity: 0,
    subtotal: 0,
    total: 0
  };

  items.forEach(d => {
    data.quantity += d.quantity;
    data.subtotal += round(d.quantity * d.price);
  });

  if (items.length) {
    data.total = round(data.subtotal + cartState.frete);
  }

  return data;
}

export default {
  cart: createReducer(cartState, {
    [REHYDRATE](state, action) {
      if (action.payload.cart && action.payload.cart.storageVersion === config.storageVersion) {
        return Object.assign({}, state, action.payload.cart, {
          visible: false,
          rehydrated: true
        });
      }

      return { ...state };
    },
    [ActionTypes.ADD_TO_CART](state, action) {
      const items = [...state.items];
      const inCart = items.find(d => d.sku === action.payload.sku);

      if (inCart) {
        inCart.quantity++;
      }
      else {
        items.push(action.payload);
      }

      return { ...state, items, ...parseData(items) };
    },
    [ActionTypes.REMOVE_FROM_CART](state, action) {
      const items = [...state.items].filter(d => d.sku !== action.payload.sku);

      return { ...state, items, ...parseData(items) };
    },
    [ActionTypes.UPDATE_CART_QUANTITY](state, action) {
      const items = [];
      [...state.items].forEach(d => {
        if (d.sku === action.payload.sku) {
          d.quantity += action.payload.value;
        }

        if (d.quantity) {
          items.push(d);
        }
      });

      return { ...state, items, ...parseData(items) };
    },
    [ActionTypes.TOGGLE_CART](state, action) {
      const visible = action.payload !== undefined ? action.payload : !state.visible;

      return { ...state, visible };
    },
    [ActionTypes.RESET_CART]() {
      return cartState;
    },
  })
};
