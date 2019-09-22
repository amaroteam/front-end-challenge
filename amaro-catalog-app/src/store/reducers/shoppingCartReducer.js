const initialState = {
  shoppingCartItens: []
};

export default (state = initialState, action) => {
  switch (action.type) {

    case "ADD_ITEM":
      console.log(state.shoppingCartItens);
      return { ...state, shoppingCartItens: state.shoppingCartItens.concat(action.payload) };

    case "REMOVE_ITEM":
      return { ...state, shoppingCartItens: state.shoppingCartItens - 1 };

    default:
      return state;
  }
};

