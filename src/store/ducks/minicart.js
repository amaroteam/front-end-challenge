export const Types = {
  ADD_TO_CART: '@minicart/ADD_TO_CART',
  REMOVE_FROM_CART: '@minicart/REMOVE_FROM_PRODUCT',
  UPDATE_AMOUNT: '@minicart/UPDATE_AMOUNT',
};

const INITIAL_STATE = [];

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_TO_CART:
      return {
        ...state,
        toggle: action.payload,
      };
    case Types.REMOVE_FROM_CART:
      return {
        ...state,
        toolbar: action.payload,
      };

    case Types.UPDATE_AMOUNT:
      return {
        ...state,
      };
    default:
      return state;
  }
}

export const Creators = {
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
