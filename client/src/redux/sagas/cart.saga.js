import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import {
    addToCartRequest,
    addToCartSuccess,
    addToCartError,
    getCartListRequest,
    getCartListSuccess,
    getCartListError,
    // doing
    updateCartRequest,
    deleteCartRequest,
    deleteCartSuccess,
    deleteCartError,
    clearCartRequest,
} from "../slicers/cart.slice";

function* getCartListSaga(action) {
    try {
        const { id } = action.payload;
        const result = yield axios.get(`http://localhost:6789/carts?id=${id}`);
        yield put(getCartListSuccess({ data: result.data }));
    } catch (e) {
        yield put(getCartListError({ error: "Đã có lỗi xảy ra!" }));
    }
}

function* createCartSaga(action) {
    try {
        const { data } = action.payload;
        const result = yield axios.post("http://localhost:6789/carts", data);
        yield put(addToCartSuccess(result.data));
        yield put(getCartListRequest({ id: data.user_id }));
    } catch (e) {
        yield put(addToCartError("Đã có lỗi xảy ra!"));
    }
}

function* deleteCartSaga(action) {
    try {
        const data = action.payload;
        const result = yield axios.delete("http://localhost:6789/carts", {
            data,
        });
        yield put(deleteCartSuccess(result));
    } catch (e) {
        yield put(deleteCartError("Đã có lỗi xảy ra!"));
    }
}

export default function* cartSaga() {
    yield takeEvery(getCartListRequest.type, getCartListSaga);
    yield takeEvery(addToCartRequest.type, createCartSaga);
    yield takeEvery(deleteCartRequest.type, deleteCartSaga);
}
