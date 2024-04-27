import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import {
    getReviewListRequest,
    getReviewListSuccess,
    getReviewListFailure,
    createReviewRequest,
    createReviewSuccess,
    createReviewFailure,
} from "../slicers/review.slice";

function* getReviewListSaga(action) {
    try {
        const { id } = action.payload;
        const result = yield axios.get(
            `http://localhost:6789/feedbacks?id=${id}`
        );
        yield put(getReviewListSuccess({ data: result.data }));
    } catch (e) {
        yield put(getReviewListFailure("Đã có lỗi xảy ra!"));
    }
}

function* createReviewSaga(action) {
    try {
        const { data, callback } = action.payload;
        const result = yield axios.post(
            "http://localhost:6789/feedbacks",
            data
        );
        yield callback();
        yield put(getReviewListRequest({ id: data.productId }));
        yield put(createReviewSuccess({ data: result.data }));
    } catch (e) {
        yield put(createReviewFailure("Đã có lỗi xảy ra!"));
    }
}

export default function* reviewSaga() {
    yield takeEvery(getReviewListRequest.type, getReviewListSaga);
    yield takeEvery(createReviewRequest.type, createReviewSaga);
}
