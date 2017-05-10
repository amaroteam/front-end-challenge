import axios from 'axios'


export function fetchProducts () {
  return {
    type: 'FETCH_PRODUCTS',
    payload: axios.get('products.json')
  }
}
