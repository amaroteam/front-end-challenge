const products = (
  state = {
    products: [],
    isFetching: true
  },
  action
) => {
  switch (action.type) {
    case 'LOAD_PRODUCTS_LIST':
      return Object.assign({}, state, {
        isFetching: false,
        products: action.products.products
      })

    default:
      return state
  }
}

export default products
