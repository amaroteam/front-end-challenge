/* global fetching */

export const fetching = () => {
  return {
    type: 'FETCHING'
  }
}

export const fetchProducts = () => {
  return dispatch => {

     dispatch(
      fetching() )

    fetch('./products.json')
      .then( res => res.json() )
      .then( products =>
        dispatch(
          fetchProductsSuccess(products) ) )
      .catch( err =>
        dispatch(
          fetchProductsFail(err) ) )
  }
}

export const fetchProductsSuccess = products => {
  return {
    type: 'FETCH_PRODUCTS_SUCCESS',
    products: products.products
  }
}

export const fetchProductsFail = err => {
  return {
    type: 'FETCH_PRODUCTS_FAIL',
    err
  }
}

export const addToCart = payload => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      id: payload.id,
      name: payload.name,
      image: payload.image,
      price: payload.price,
      size: payload.size,
      amount: 1
    }
  }
}

export const removeFromCart = id => {
  return {
    type: 'REMOVE_FROM_CART',
    id
  }
}

export const increment = id => {
  return {
    type: 'INCREMENT_AMOUNT',
    id
  }
}

export const decrement = id => {
  return {
    type: 'DECREMENT_AMOUNT',
    id
  }
}

export const setFilter = filter => {
  return {
    type: 'SET_FILTER',
    filter
  }
}