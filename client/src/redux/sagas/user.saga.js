import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";

import {
    getUserRequest,
    getUserSuccess,
    getUserError,
} from "../slicers/user.slice";

function* getUserSaga(action) {
    try {
        const params = action.payload;
        const result = yield axios.get(`http://localhost:6789/users`, {
            params,
        });
        yield put(getUserSuccess(result));
    } catch (e) {
        yield put(getUserError({ error: "Đã có lỗi xảy ra!" }));
    }
}

export default function* userSaga() {
    yield takeEvery(getUserRequest.type, getUserSaga);
}
