import { createSlice } from "@reduxjs/toolkit";

export const loggedSlice = createSlice({
  name: "logged",
  initialState: {
    isLogged: false,
  },
  reducers: {
    getIsLogged: (state, action) => {
      state.isLogged = Boolean(window.sessionStorage.getItem("token"));
    },
  },
});

export default loggedSlice.reducer;
export const { getIsLogged } = loggedSlice.actions;
