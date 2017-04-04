const cartItem = (state={}, action) => {

  switch(action.type) {

    case 'ADD_TO_CART':
      let { id, name, regular_price, actual_price, on_sale } = state
      return {
        id,
        name,
        regular_price,
        actual_price,
        on_sale,
        amount: 1
      }

    case 'INCREMENT_AMOUNT':
      return Object.assign({}, state, {
        amount: state.amount + 1
      })

    case 'DECREMENT_AMOUNT':
      return Object.assign({}, state, {
        amount: state.amount - 1
      })

    default:
      return state

  }

}

const cart = (state=[], action) => {

  switch(action.type) {

    case 'ADD_TO_CART':
      return [
        ...state,
        cartItem(
          state.products.findOne(val => val.id === action.id),
          action
        )
      ]

    case 'REMOVE_FROM_CART':
      return state.filter(val =>
        val.id !== action.id
      )

    case 'INCREMENT_AMOUNT':
    case 'DECREMENT_AMOUNT':
      return state.map(val => {
        return (val.id === action.id) ? cartItem(val, action) : val
      })

    default:
      return state

  }

}

export default cart