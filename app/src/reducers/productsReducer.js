import {
  PRODUCTS_PENDING,
  PRODUCTS_FULFILLED,
  PRODUCTS_REJECTED,
  PRODUCTS_SEARCH,
  PRODUCTS_FILTER
} from '../constants'

const initialState = {
  data: [],
  filtering: false,
  fetching: true,
  fetched: false,
  search: false,
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
    case PRODUCTS_FILTER:
      return {
        ...state,
        filtering: !state.filtering
      }
    case PRODUCTS_SEARCH:
      return {
        ...state,
        search: action.payload
      }
    default:
      return state
  }
}
