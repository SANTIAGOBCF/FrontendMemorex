import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
  },
  reducers: {
    confimToken: (state) => {
      state.token = window.sessionStorage.getItem("token");
    },
    setToken: (state, action) => {
      //   let token = action.payload;
      //   state.token = token.payload.token;
      //   window.sessionStorage.setItem("token", token.payload.token);
      state.token = action.payload;
      window.sessionStorage.setItem("token", action.payload);
    },
    logout: (state) => {
      window.sessionStorage.removeItem("token");
      window.sessionStorage.removeItem("data");
      state.token = null;
    },
  },
});

export default authSlice.reducer;

export const { setToken, logout, confimToken } = authSlice.actions;
