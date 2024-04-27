import { createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const PostSlice = createSlice({
  name: "Post",
  initialState,
  reducers: {
    getPostRequest: (state, action) => {
      state.loading = true;
    },
    getPostSuccess: (state, action) => {
      const { data } = action.payload;
      state.data = data;
      state.loading = false;
    },
    getPostError: (state, action) => {
      const { error } = action.payload;
      state.error = error;
      state.loading = false;
    },
    createPostRequest: (state, action) => {
      state.loading = true;
    },
    createPostSuccess: (state, action) => {
      state.loading = false;
    },
    createPostError: (state, action) => {
      const { error } = action.payload;
      state.error = error;
      state.loading = false;
    },
    createReactionRequest: (state, action) => {
      state.loading = false;
    },
    createReactionSuccess: (state, action) => {
      state.loading = false;
    },
    createReactionError: (state, action) => {
      const { error } = action.payload;
      state.error = error;
      state.loading = false;
    },
    createCommentRequest: (state, action) => {
      state.loading = false;
    },
    createCommentSuccess: (state, action) => {
      state.loading = false;
      notification.success({
        message: "Comment thành công ",
        duration: 0.5,
      });
    },
    createCommentError: (state, action) => {
      const { error } = action.payload;
      state.error = error;
      notification.success({
        message: "Comment thất bại ",
        duration: 0.5,
      });
      state.loading = false;
    },
    deletePostRequest: (state, action) => {
      state.loading = true;
    },
    deletePostSuccess: (state, action) => {
      state.loading = false;
    },
    deletePostError: (state, action) => {
      const { error } = action.payload;
      state.error = error;
      state.loading = false;
    },
    editPostRequest: (state, action) => {
      state.loading = true;
    },
    editPostSuccess: (state, action) => {
      state.loading = false;
    },
    editPostError: (state, action) => {
      const { error } = action.payload;
      state.error = error;
      state.loading = false;
    },
  },
});

export const {
  getPostRequest,
  getPostSuccess,
  getPostError,
  createPostRequest,
  createPostSuccess,
  createPostError,
  createReactionRequest,
  createReactionSuccess,
  createReactionError,
  deletePostRequest,
  deletePostSuccess,
  deletePostError,
  editPostRequest,
  editPostSuccess,
  editPostError,
  createCommentRequest,
  createCommentSuccess,
  createCommentError,
} = PostSlice.actions;

export default PostSlice.reducer;
