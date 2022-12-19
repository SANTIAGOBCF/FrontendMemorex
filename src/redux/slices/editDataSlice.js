import { createSlice } from "@reduxjs/toolkit";

export const editDataSlice = createSlice({
  name: "editData",
  initialState: {
    data: JSON.parse(window.sessionStorage.getItem("data")),
  },
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
      window.sessionStorage.setItem("data", JSON.stringify(action.payload));
    },
  },
});

export default editDataSlice.reducer;
export const { setData } = editDataSlice.actions;
