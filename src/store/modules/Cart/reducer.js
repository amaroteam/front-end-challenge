export default function cart(state = [], action) {
  switch (action.type) {
    case "@cart/ADD_SUCCESS":
      const { product } = action;
      return [
        ...state,
        product
      ];
    case "@cart/REMOVE":
      return state.filter((product) => product.code_color !== action.id)
    case "@cart/UPDATE_AMOUNT_SUCCESS": 
      const newCart = [...state]
      newCart[action.idx].amount = Number(action.amount);
      return newCart
    default:
      return state;
  }
}
