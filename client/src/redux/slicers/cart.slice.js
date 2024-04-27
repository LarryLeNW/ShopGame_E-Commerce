import { createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";

const initialState = {
  cartList: [],
  loading: false,
  error: null,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCartRequest: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    addToCartSuccess: (state, action) => {
      state.loading = false;
      notification.success({ message: "Bỏ vào giỏ thành công", duration: 2 });
    },
    addToCartError: (state, action) => {
      state.loading = false;
      notification.warning({
        message: "Sản phẩm này đã tồn tại trong giỏ hàng của bạn .",
        duration: 1,
      });
    },
    getCartListRequest: (state, action) => {
      state.loading = true;
    },
    getCartListSuccess: (state, action) => {
      const { data } = action.payload;
      state.loading = false;
      state.cartList = data;
    },
    getCartListError: (state, action) => {
      const { error } = action.payload;
      state.loading = false;
      state.error = error;
    },
    deleteCartRequest: (state, action) => {
      state.loading = true;
    },
    deleteCartSuccess: (state, action) => {
      const { data } = action.payload;
      state.loading = false;
      state.cartList = data;
    },
    deleteCartError: (state, action) => {
      const { error } = action.payload;
      state.loading = false;
      state.error = error;
    },
    clearCartRequest: (state) => {
      state.cartList = [];
    },
  },
});

export const {
  addToCartRequest,
  addToCartSuccess,
  addToCartError,
  getCartListRequest,
  getCartListSuccess,
  getCartListError,
  // doing
  deleteCartRequest,
  deleteCartSuccess,
  deleteCartError,
  clearCartRequest,
} = cartSlice.actions;

export default cartSlice.reducer;
