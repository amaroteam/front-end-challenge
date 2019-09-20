export function addToCartRequest(id, size) {
  return {
    type: "@cart/ADD_REQUEST",
    id,
    size
  };
}

export function addToCartSuccess(product) {
  return {
    type: "@cart/ADD_SUCCESS",
    product
  };
}

export function removeFromCartRequest(id) {
  return {
    type: "@cart/REMOVE_REQUEST",
    id
  };
}

export function removeFromCart(id) {
  return {
    type: "@cart/REMOVE",
    id
  };
}

export function updateAmountRequest(amount, idx) {
  return {
    type: "@cart/UPDATE_AMOUNT_REQUEST",
    idx,
    amount
  };
}

export function updateAmountSuccess(amount, idx) {
  return {
    type: "@cart/UPDATE_AMOUNT_SUCCESS",
    idx,
    amount
  };
}
