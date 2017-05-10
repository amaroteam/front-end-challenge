export default function reducer (state=[], action) {
  switch (action.type) {
    case 'FETCH_PRODUCTS_FULFILLED':
      return [...state, ...action.payload.data.products]
    default:
      return state
  }
}
