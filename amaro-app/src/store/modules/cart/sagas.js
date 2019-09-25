import { call, select, put, all, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import { formatPrice } from '../../../utils/format';

import { addToCartSuccess, updateAmount } from './actions';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(p => p.id === id)
  );

  if (productExists) {
    const amount = productExists.amount + 1;

    yield put(updateAmount(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.regular_price),
    };

    yield put(addToCartSuccess(data));
  }
}

export default all([takeLatest('@cart/ADD_REQUEST', addToCart)]);
