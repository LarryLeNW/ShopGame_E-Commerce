import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: true,
  error: null,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategoriesRequest: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    getCategoriesSuccess: (state, action) => {
      const { data } = action.payload;
      state.loading = false;
      state.data = data;
      state.error = null;
    },
    getCategoriesFailure: (state, action) => {
      const { error } = action.payload;
      state.loading = false;
      state.error = error;
    },
  },
});

export const {
  getCategoriesRequest,
  getCategoriesSuccess,
  getCategoriesFailure,
} = categorySlice.actions;

export default categorySlice.reducer;
