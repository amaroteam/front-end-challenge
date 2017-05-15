import axios from 'axios'

import {
  PRODUCTS_SEARCH,
  PRODUCTS_FILTER
} from '../constants'

export function fetchProducts () {
  return {
    type: 'FETCH_PRODUCTS',
    payload: axios.get('products.json')
  }
}

export function filterProducts () {
  return {
    type: PRODUCTS_FILTER
  }
}

export function searchProducts (search) {
  return {
    type: PRODUCTS_SEARCH,
    payload: search
  }
}
