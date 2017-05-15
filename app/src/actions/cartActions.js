import {
  CART_ADD,
  CART_REMOVE,
  CART_QUANTITY,
  CART_TOTAL,
  CART_VISIBLE
} from '../constants'

export function addProduct (product) {
  return {
    type: CART_ADD,
    payload: product
  }
}

export function removeProduct (productId) {
  return {
    type: CART_REMOVE,
    payload: productId
  }
}

export function changeQuantity (id, quantity) {
  return {
    type: CART_QUANTITY,
    payload: {
      id,
      quantity
    }
  }
}

export function changeTotal () {
  return {
    type: CART_TOTAL
  }
}

export function toggleVisibility () {
  return {
    type: CART_VISIBLE
  }
}
