import { fork } from "redux-saga/effects";

import authSaga from "./auth.saga";
import productSaga from "./product.saga";
import reviewSaga from "./review.saga";
import cartSaga from "./cart.saga";
import categorySaga from "./category.saga";
import PostsSaga from "./post.saga";
import userSaga from "./user.saga";
export default function* rootSaga() {
  yield fork(authSaga);
  yield fork(productSaga);
  yield fork(reviewSaga);
  yield fork(cartSaga);
  yield fork(categorySaga);
  yield fork(PostsSaga);
  yield fork(userSaga);
}
