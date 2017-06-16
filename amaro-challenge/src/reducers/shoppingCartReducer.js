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
      return {
        ...state,
        products: [...state.products, action.product]
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
