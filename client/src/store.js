import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import authReducer from "./redux/slicers/auth.slice";
import commonReducer from "./redux/slicers/common.slice";
import productReducer from "./redux/slicers/product.slice";
import reviewReducer from "./redux/slicers/review.slice";
import cartReducer from "./redux/slicers/cart.slice";
import categoryReducer from "./redux/slicers/category.slice";
import postReducer from "./redux/slicers/post.slise";
import userReducer from "./redux/slicers/user.slice";
import chatReducer from "./redux/slicers/chat.slice";
import rootSaga from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    auth: authReducer,
    common: commonReducer,
    product: productReducer,
    review: reviewReducer,
    cart: cartReducer,
    category: categoryReducer,
    post: postReducer,
    user: userReducer,
    chat: chatReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export { store };
