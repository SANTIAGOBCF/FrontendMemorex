import { createSlice } from "@reduxjs/toolkit";

export const editDataSlice = createSlice({
  name: "editData",
  initialState: {
    data: { username: "Cristian", firstName: "Aquino", phone: 123456789 },
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
