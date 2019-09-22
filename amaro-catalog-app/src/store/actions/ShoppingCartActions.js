export default {
  addItemToShoppingCart(itemToBeAdded) {
    return { type: "ADD_ITEM", payload: itemToBeAdded };
  },

  removeItemFromShoppingCart(product) {
    return { type: "REMOVE_ITEM", payload: product };
  }
};
