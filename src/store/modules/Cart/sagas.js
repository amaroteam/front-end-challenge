import { put, select, all, takeLatest } from "redux-saga/effects";
import { getProduct } from "../../../services/api";
import history from "../../../services/history";
// import { toast } from "react-toastify";

import { addToCartSuccess, updateAmountSuccess } from "./actions";

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.code_color === id)
  );

  if (productExists) {
    const desiredAmount = productExists.amount + 1;
     yield put(updateAmountSuccess(id, desiredAmount));
  } else {
    const response = getProduct(id);
    const data = {
      ...response,
      amount: 1,
      priceFormatted: response.actual_price
    };

    yield put(addToCartSuccess(data));
    history.push("/cart");
  }
}

function* updateAmount({ code_color, amount }) {
  if (amount <= 0) return;

  // const stock = getProducts();
  // const stockAmount = stock.data.amount;

  // if (amount > stockAmount) {
  //   if (!toast.isActive("updateToast")) {
  //     toast.error("Estoque insuficiente", {
  //       position: "bottom-right",
  //       toastId: "updateToast"
  //     });
  //   }
  //   return;
  // }

  yield put(updateAmountSuccess(code_color, amount));
}

export default all([
  takeLatest("@cart/ADD_REQUEST", addToCart),
  takeLatest("@cart/UPDATE_AMOUNT_REQUEST", updateAmount)
]);
