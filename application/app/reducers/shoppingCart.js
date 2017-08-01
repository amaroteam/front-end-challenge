const shoppingCart = (state = [], action) => {
  switch (action.type) {
    case 'CART_ADD_PRODUCT':
      return [
        ...state,
        action.product.product
      ]
    case 'CART_REMOVE_PRODUCT': {

      const index = state.findIndex((product) => product.style === action.style.style)
      
      return [
        ...state.slice(0,index),
        ...state.slice(index+1)
      ]
    }
    default:
      return state
  }
}

export default shoppingCart
