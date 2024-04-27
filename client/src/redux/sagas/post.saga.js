import { put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
    getPostRequest,
    getPostSuccess,
    getPostError,
    createPostRequest,
    createPostSuccess,
    createPostError,
    deletePostRequest,
    deletePostSuccess,
    deletePostError,
    editPostRequest,
    editPostSuccess,
    editPostError,
    createReactionRequest,
    createReactionSuccess,
    createReactionError,
    createCommentRequest,
    createCommentSuccess,
    createCommentError,
} from "../slicers/post.slise";

function* getPostListSaga() {
    try {
        let data = yield axios.get("http://localhost:6789/posts");
        yield put(getPostSuccess(data));
    } catch (error) {
        yield put(getPostError({ error }));
    }
}
function* createPostSaga(action) {
    try {
        let { data, callback } = action.payload;
        yield axios.post("http://localhost:6789/posts", data);
        yield put(getPostRequest());
        yield put(createPostSuccess());
        yield callback();
    } catch (error) {
        console.log(error);
        yield put(createPostError({ error }));
    }
}
function* deletePostSaga(action) {
    try {
        let { id, callback } = action.payload;
        yield axios.delete(`http://localhost:6789/posts?id=${id}`);
        yield put(getPostRequest());
        yield put(deletePostSuccess());
        yield callback();
    } catch (error) {
        console.log(error);
        yield put(deletePostError({ error }));
    }
}

function* editPostSaga(action) {
    try {
        let { data, callback } = action.payload;
        yield axios.put(`http://localhost:6789/posts`, data);
        yield put(getPostRequest());
        yield put(editPostSuccess());
        yield callback();
    } catch (error) {
        console.log(error);
        yield put(editPostError({ error }));
    }
}

function* CreateReactionSaga(action) {
    try {
        let { data, callback } = action.payload;
        yield axios.post(`http://localhost:6789/postReactions`, data);
        yield put(getPostRequest());
        yield put(createReactionSuccess());
        yield callback();
    } catch (error) {
        console.log(error);
        yield put(createReactionError({ error }));
    }
}
function* CreateCommentSaga(action) {
    try {
        let { data, callback } = action.payload;
        yield axios.post(`http://localhost:6789/commentPosts`, data);
        yield put(getPostRequest());
        yield put(createCommentSuccess());
        yield callback();
    } catch (error) {
        console.log(error);
        yield put(createCommentError({ error }));
    }
}

export default function* PostsSaga() {
    yield takeEvery(getPostRequest.type, getPostListSaga);
    yield takeEvery(createPostRequest.type, createPostSaga);
    yield takeEvery(deletePostRequest.type, deletePostSaga);
    yield takeEvery(editPostRequest.type, editPostSaga);
    yield takeEvery(createReactionRequest.type, CreateReactionSaga);
    yield takeEvery(createCommentRequest.type, CreateCommentSaga);
}
