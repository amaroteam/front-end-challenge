export const loadProductsList = products => {
  return {
    type: 'LOAD_PRODUCTS_LIST',
    products
  }
}

export const setProductsListFilter = activeFilter => {
  return {
    type: 'SET_PRODUCTS_LIST_FILTER',
    activeFilter
  }
}

// Add product to cart
// Remove Product from cart
