import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import editDataSlice from "./slices/editDataSlice";

export default configureStore({
  reducer: {
    authSlice,
    editDataSlice,
  },
});
