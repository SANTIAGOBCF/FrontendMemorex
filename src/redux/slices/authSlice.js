import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: JSON.parse(sessionStorage.getItem("token")),
    loading: false,
    error: false,
    user: JSON.parse(sessionStorage.getItem("user")),
  },
  reducers: {
    registerSuccess: (state, action) => {
      // const nuevo = action.payload.user;
      const nuevo = action.payload;
      sessionStorage.setItem("user", JSON.stringify(nuevo));
      return {
        ...state,
        user: nuevo,
        loading: false,
        error: false,
      };
    },
    loginSuccess: (state, action) => {
      // sessionStorage.setItem("token", JSON.stringify(action.payload.token));
      sessionStorage.setItem("token", JSON.stringify(action.payload));
      return {
        ...state,
        token: action.payload,
        loading: false,
        error: false,
      };
    },
    updateData: (state, action) => {
      const nuevo = action.payload;
      const a = { ...state.user, ...nuevo };
      sessionStorage.setItem("user", JSON.stringify(a));
      return {
        ...state,
        user: { ...state.user, ...nuevo },
      };
    },
    // duda
    newRole: (state, action) => {
      const prueba = action.payload;
      const nuevo = { ...state, user: { ...state.user, ...prueba } };
      console.log(nuevo);
    },
    logout: (state) => {
      sessionStorage.clear();
      return {
        ...state,
        user: null,
        token: null,
      };
    },
  },
});

export default authSlice.reducer;

export const { loginSuccess, registerSuccess, updateData, newRole, logout } =
  authSlice.actions;
