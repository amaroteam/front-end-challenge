import uuid from 'uuid'

import {
  CART_ADD,
  CART_REMOVE,
  CART_QUANTITY,
  CART_TOTAL,
  CART_VISIBLE
} from '../constants'

const initialState = {
  products: [],
  total: 0,
  visible: false
}

export default function reducer (state=initialState, action) {
  switch (action.type) {
    case CART_ADD:
      const newProduct = Object.assign({}, action.payload, {
        cid: uuid(),
        quantity: 1,
        cart_price: action.payload.actual_price
      })

      return {
        ...state,
        products: [...state.products, newProduct]
      }
    case CART_REMOVE:
      const products = state.products.filter(product => product.cid !== action.payload)

      return {
        ...state,
        products
      }
    case CART_QUANTITY:
      let product = state.products.filter(product => product.cid === action.payload.id)[0]

      const quantity = product.quantity + action.payload.quantity
      const price = parseFloat(product.actual_price.replace(/[^0-9,]+/g, '').replace(',', '.')) * quantity

      if (quantity < 1 || quantity > 999) {
        return state
      }

      product = Object.assign(product, product, {
        quantity: quantity,
        cart_price: price.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
      })

      return {
        ...state,
        products: [...state.products, ...product]
      }
    case CART_TOTAL:
      const total = state.products.map(product => (
        parseFloat(product.cart_price.replace(/[^0-9,]+/g, '').replace(',', '.'))
      )).reduce((x, y) => x + y, 0)

      return {
        ...state,
        total: total.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
      }
    case CART_VISIBLE:
      return {
        ...state,
        visible: !state.visible
      }
    default:
      return state
  }
}
