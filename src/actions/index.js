export const addToCart = payload => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      id: payload.id,
      name: payload.name,
      regular_price: payload.regular_price,
      actual_price: payload.actual_price,
      on_sale: payload.on_sale,
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