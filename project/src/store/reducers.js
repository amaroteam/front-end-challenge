export const initialState = {
  products: [],
  productsFilters: {},
  cart: [],
  cartFilters: {},
};

const cart = (state = initialState.cart, action) => {
  if (!action) return false;

  switch (action.type) {
    case 'ADD_PRODUCT_CART': {
      const { product } = action;

      const alreadyAdded =
        state.filter(item => {
          return item.id === product.id;
        }).length > 0;

      if (alreadyAdded) return state;

      return [action.product, ...state];
    }

    case 'DELETE_PRODUCT_CART': {
      return state.filter(product => product.id !== action.id);
    }

    default:
      return state;
  }
};

const cartFilters = (state = initialState.cartFilters, action) => {
  switch (action.type) {
    case 'UPDATE_FILTER': {
      return {
        ...state,
        active: action.filter,
      };
    }

    default:
      return state;
  }
};

const products = (state = initialState.products, action) => {
  if (!action) return false;

  switch (action.type) {
    /* TODO remove if not contract update */
    case 'LOAD_PRODUCTS': {
      return action.list.map((item, index) => ({
        ...item,
        id: index,
      }));
    }

    default:
      return state;
  }
};

const productsFilters = (state = initialState.productsFilters, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default {
  products,
  productsFilters,
  cart,
  cartFilters,
};
