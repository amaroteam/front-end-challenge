import { ADD_ITEM, REMOVE_ITEM } from '../actions/cart'

const initialState = {
  items: []
}
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        items: [
          ...state.items,
          action.item
        ]
      }

    case REMOVE_ITEM:
      return {
        items: state.items.filter(i => i.id !== action.id)
      }

    default:
      return state
  }
}

export default cartReducer
