export default {
  addItemToShoppingCart(itemToBeAdded) {
    return { type: "ADD_ITEM", payload: itemToBeAdded };
  },

  removeItemFromShoppingCart(positionAtTheList) {
    return { type: "REMOVE_ITEM", payload: positionAtTheList };
  },

  clearShoppingCart() {
    return { type: "CLEAR_SHOPPING_CART", payload: '_CLEAR_' };
  }
};
