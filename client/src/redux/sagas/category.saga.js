import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
    getCategoriesRequest,
    getCategoriesSuccess,
    getCategoriesFailure,
} from "../slicers/category.slice";

function* getCategoryListSaga() {
    try {
        let data = yield axios.get("http://localhost:6789/getcategory");
        yield put(getCategoriesSuccess(data));
    } catch (error) {
        yield put(getCategoriesFailure({ error: error }));
    }
}

export default function* categorySaga() {
    yield takeEvery(getCategoriesRequest.type, getCategoryListSaga);
}
