import { put, select, all, takeLatest } from "redux-saga/effects";
import { toast } from 'react-toastify';
import { getProduct } from "../../../services/api";

import { addToCartSuccess, updateAmountSuccess, removeFromCart } from "./actions";

function* addToCart({ id, size }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.code_color === id)
  );

  if (productExists) {
    const desiredAmount = productExists.amount + 1;
    const idx = yield select(state =>
      state.cart.findIndex(p => p.code_color === id)
    );

    yield put(updateAmountSuccess(desiredAmount, idx));
  } else {
    const response = getProduct(id);
    const data = {
      ...response,
      amount: 1
    };

    yield put(addToCartSuccess(data));
  }

  toast.success('Item adicionado ao carrinho');
}

function* updateAmount({ amount, idx }) {
  if (amount < 1) return;

  yield put(updateAmountSuccess(amount, idx));
}

function* removeProduct({ id }) {

  yield put(removeFromCart(id));

  toast.success('Item removido do carrinho');
}

export default all([
  takeLatest("@cart/ADD_REQUEST", addToCart),
  takeLatest("@cart/UPDATE_AMOUNT_REQUEST", updateAmount),
  takeLatest("@cart/REMOVE_REQUEST", removeProduct)
]);
