import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "auth",
  initialState: {
    token: "",
    isLogged: "",
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    // login: (state, action) => {
    //   let token = action.payload;
    //   state.token = token.payload.token;
    //   window.sessionStorage.setItem("token", token.payload.token);
    //   state.isLogged = true;
    // },
    // logout: (state) => {
    //   window.sessionStorage.removeItem("token");
    //   state.token = "";
    // },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
