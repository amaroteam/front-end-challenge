import {
  PRODUCTS_PENDING,
  PRODUCTS_FULFILLED,
  PRODUCTS_REJECTED
} from '../constants'

const initialState = {
  data: [],
  fetching: true,
  fetched: false,
  error: null
}

export default function reducer (state=initialState, action) {
  switch (action.type) {
    case PRODUCTS_PENDING:
      return state
    case PRODUCTS_FULFILLED:
      return {
        ...state,
        fetching: false,
        fetched: true,
        data: action.payload.data.products
      }
    case PRODUCTS_REJECTED:
      return {
        ...state,
        error: action.payload.message
      }
    default:
      return state
  }
}
