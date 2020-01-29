/* eslint-disable no-param-reassign */
/* eslint-disable no-case-declarations */
/* eslint-disable no-fallthrough */
export const Types = {
  ADD_TO_CART: '@minicart/ADD_TO_CART',
  REMOVE_FROM_CART: '@minicart/REMOVE_FROM_PRODUCT',
  UPDATE_AMOUNT: '@minicart/UPDATE_AMOUNT',
  TOGGLE_MINICART: '@minicart/TOGGLE_MINICART',
};

const INITIAL_STATE = {
  data: [],
  toggle: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.TOGGLE_MINICART:
      return {
        ...state,
        toggle: action.payload,
      };
    case Types.ADD_TO_CART:
      const productIndex = state.data.findIndex(
        test => test.name === action.product.name,
      );
      if (productIndex === -1) {
        return {
          ...state,
          data: [...state.data, action.product],
        };
      }
      return {
        ...state,
      };

    case Types.REMOVE_FROM_CART:
      state.data.splice(action.id, 1);
      return { ...state };

    case Types.UPDATE_AMOUNT:
      if (state.data[action.id].amount < 1) {
        return { ...state };
      }
      state.data[action.id].amount = action.amount;
      return { ...state };

    default:
      return { ...state };
  }
}

export const Creators = {
  toggleMinicart: boolean => ({
    type: Types.TOGGLE_MINICART,
    payload: boolean,
  }),
  addToCart: product => ({
    type: Types.ADD_TO_CART,
    product,
  }),
  removeFromCart: id => ({
    type: Types.REMOVE_FROM_CART,
    id,
  }),
  updateAmount: (id, amount) => ({
    type: Types.UPDATE_AMOUNT,
    id,
    amount,
  }),
};
