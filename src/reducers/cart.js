const cartItem = ( state={}, action ) => {

  switch( action.type ) {

    case 'ADD_TO_CART':
      return {
        ...state,
        amount: 1
      }

    case 'INCREMENT_AMOUNT':
      return {
        ...state,
        amount: state.amount + 1
      }

    case 'DECREMENT_AMOUNT':
      return {
        ...state,
        amount: state.amount - 1
      }

    default:
      return state

  }

}

const cart = ( state=[], action ) => {

  switch( action.type ) {

    case 'ADD_TO_CART':
      if ( state.find( item =>
          item.id === action.payload.id ) )
        return state

      return [
        ...state,
        cartItem( action.payload, action )
      ]

    case 'REMOVE_FROM_CART':
      return state.filter( item =>
        item.id !== action.id )

    case 'INCREMENT_AMOUNT':
    case 'DECREMENT_AMOUNT':
      return state.map( item =>
        item.id === action.id ?
          cartItem( item, action ) :
          item )

    default:
      return state

  }

}

export default cart