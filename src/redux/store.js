import { configureStore } from "@reduxjs/toolkit";
// import counterReducer from "./slices/counterSlice";
import loggedSlice from "./slices/loggedSlice";
import authSlice from "./slices/authSlice";
import editDataSlice from "./slices/editDataSlice";


export default configureStore({
  reducer: {
    // auth: counterReducer,
    loggedSlice,
    authSlice,
    editDataSlice,

  },
});
