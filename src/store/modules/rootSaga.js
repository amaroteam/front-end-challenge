import { all } from "redux-saga/effects";

import cart from "./Cart/sagas";

export default function* rootSaga() {
  return yield all([cart]);
}
