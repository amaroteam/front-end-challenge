export const initialState = {
  products: [],
  productsFilters: {
    sale: false,
  },
  cart: [],
  cartFilters: {},
  modal: {
    isOpen: false,
  },
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
    default:
      return state;
  }
};

const products = (state = initialState.products, action) => {
  if (!action) return false;

  switch (action.type) {
    case 'LOAD_PRODUCTS': {
      return action.list.map((item, index) => ({
        id: index,
        regularPrice: item.regular_price,
        actualPrice: item.actual_price,
        discountPercentage: item.discount_percentage,
        onSale: item.on_sale,
        sizes: item.sizes,
        name: item.name,
        image: item.image,
        installments: item.installments,
      }));
    }

    default:
      return state;
  }
};

const productsFilters = (state = initialState.productsFilters, action) => {
  switch (action.type) {
    case 'UPDATE_SALE_FILTER':
      return {
        sale: !state.sale,
      };

    default:
      return state;
  }
};

const modal = (state = initialState.modal, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return {
        isOpen: true,
      };

    case 'CLOSE_MODAL':
      return {
        isOpen: false,
      };

    default:
      return state;
  }
};

export default {
  products,
  productsFilters,
  cart,
  cartFilters,
  modal,
};
