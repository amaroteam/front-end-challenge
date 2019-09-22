const getSavedShoppingCart = () => {
  const shoppingCartItens = [];

  if ( ! localStorage.shoppingCartItens ){
    localStorage.setItem(
      "shoppingCartItens",
      JSON.stringify(shoppingCartItens)
    );
  }
  
  return JSON.parse(localStorage.getItem('shoppingCartItens'));
}


const initialState = {
  shoppingCartItens: getSavedShoppingCart()
};

export default (state = initialState, action) => {
  switch (action.type) {

    case "ADD_ITEM":
      let _tempAddCart = JSON.parse(localStorage.getItem('shoppingCartItens'))
       _tempAddCart.push(action.payload);
      localStorage.setItem("shoppingCartItens", JSON.stringify(_tempAddCart));
      return { ...state, shoppingCartItens: state.shoppingCartItens.concat(action.payload) };

    case "REMOVE_ITEM":
       let _tempRemoveCart = JSON.parse(localStorage.getItem("shoppingCartItens"));
       let _newCart = _tempRemoveCart.slice(action.payload); 
       localStorage.setItem("shoppingCartItens", JSON.stringify(_newCart));
      return { ...state, shoppingCartItens: state.shoppingCartItens.slice(action.payload) };

    default:
      return state;
  }
};

