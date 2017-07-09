// Load List
export const loadProductsList = products => {
  return {
    type: 'LOAD_PRODUCTS_LIST',
    products
  }
}

// Shopping Cart
export const cartAddProduct = product => {
  return {
    type: 'CART_ADD_PRODUCT',
    product
  }
}

export const cartRemoveProduct = style => {
  return {
    type: 'CART_REMOVE_PRODUCT',
    style
  }
}

// Filter List
export const setProductsListFilter = activeFilter => {
  return {
    type: 'SET_PRODUCTS_LIST_FILTER',
    activeFilter
  }
}
