import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserRequest: (state, action) => {
      state.loading = true;
      state.error = null;
    },
    getUserSuccess: (state, action) => {
      const { data } = action.payload;
      state.data = data;
      state.loading = false;
    },
    getUserError: (state, action) => {
      const { error } = action.payload;
      state.error = error;
      state.loading = false;
    },
  },
});

export const { getUserRequest, getUserSuccess, getUserError } =
  userSlice.actions;

export default userSlice.reducer;
