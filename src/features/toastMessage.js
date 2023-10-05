import { createSlice } from "@reduxjs/toolkit";

export const toastMessageSlice = createSlice({
  name: "toastMessage",
  initialState: { value: false, message: "" },
  reducers: {
    clickToast: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default toastMessageSlice.reducer;
export const { clickToast } = toastMessageSlice.actions;
