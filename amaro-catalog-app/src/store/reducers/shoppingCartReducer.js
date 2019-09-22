const initialState = {
  shoppingCartItens: []
};

export default (state = initialState, action) => {
  switch (action.type) {

    case "ADD_ITEM":
      return { ...state, shoppingCartItens: state.shoppingCartItens.concat(action.payload) };

    case "REMOVE_ITEM":
      console.log(action.payload)
      return { ...state, shoppingCartItens: state.shoppingCartItens.slice(action.payload, 1) };

    default:
      return state;
  }
};

