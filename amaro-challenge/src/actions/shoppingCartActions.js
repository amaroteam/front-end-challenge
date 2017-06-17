export const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
export const REMOVE_PRODUCT_FROM_CART = "REMOVE_PRODUCT_FROM_CART";

export const addProductToCart = (product, quantity = 1, size) => ({
  type: ADD_PRODUCT_TO_CART,
  product,
  quantity,
  size
})

export const removeProductFromCart = productName => ({ // estou usando name para identificar porque não vem id no json
  type: REMOVE_PRODUCT_FROM_CART,
  productName
})
