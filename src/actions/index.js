export const addToCart = id => {
  return {
    type: 'ADD_TO_CART',
    id
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
    type: 'SET_FITER',
    filter
  }
}