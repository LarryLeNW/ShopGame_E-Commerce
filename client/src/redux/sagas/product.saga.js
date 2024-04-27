import { put, takeEvery, debounce, call } from "redux-saga/effects";
import axios from "axios";

import {
    getProductListRequest,
    getProductListSuccess,
    getProductListFailure,
    getProductDetailRequest,
    getProductDetailSuccess,
    getProductDetailFailure,
} from "../../redux/slicers/product.slice";

function* getProductListSaga(action) {
    try {
        const { category, limit, page, sort, price, status } = action.payload;

        const params = {
            category,
            limit,
            page,
        };

        if (status) {
            params.status = status;
        }

        if (price) {
            params.price = price;
        }

        if (sort) {
            params.order = sort;
        }

        const result = yield call(() =>
            axios.get("http://localhost:6789/products", {
                params,
            })
        );

        yield put(
            getProductListSuccess({
                data: result.data,
            })
        );
    } catch (e) {
        yield put(getProductListFailure("Đã có lỗi xảy ra!"));
    }
}

function* getProductDetailSaga(action) {
    try {
        const { id } = action.payload;
        const result = yield axios.get(
            `http://localhost:6789/products?id=${id}`
        );
        yield put(getProductDetailSuccess({ data: result.data }));
    } catch (e) {
        yield put(getProductDetailFailure("Đã có lỗi xảy ra!"));
    }
}

export default function* productSaga() {
    yield debounce(300, getProductListRequest.type, getProductListSaga);
    yield takeEvery(getProductDetailRequest.type, getProductDetailSaga);
}
