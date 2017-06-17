import {
  ADD_PRODUCT_TO_CART,
  REMOVE_PRODUCT_FROM_CART
} from '../actions/shoppingCartAction'

const SHOPPING_CART_STATE = {
  products: []
}

export const shoppingCart = (state = SHOPPING_CART_STATE, action) => {
  switch(action.type) {
    case ADD_PRODUCT_TO_CART:
      const isDuplicated = state.products.find(currProduct => currProduct.product.name === action.product.name);
      const indexOfDuplicatedProduct = state.products.indexOf(isDuplicated)
      if (isDuplicated) {
        return {
          ...state,
          products: [
            ...state.products.slice(0, indexOfDuplicatedProduct),
              {
                ...state.products[indexOfDuplicatedProduct],
                quantity: state.products[indexOfDuplicatedProduct].quantity + 1
              },
            ...state.products.slice(indexOfDuplicatedProduct+1)
          ]
        }
      }
      return {
        ...state,
        products: [
          ...state.products,
          {
            product: action.product,
            quantity: action.quantity
          }
        ]
      }

    case REMOVE_PRODUCT_FROM_CART:
      return {
        ...state,
        // TODO
      }
    default:
      return {
        ...state
      }
  }
}
