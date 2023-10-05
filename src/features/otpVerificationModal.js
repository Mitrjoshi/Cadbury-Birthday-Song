import { createSlice } from "@reduxjs/toolkit";

export const otpModalSlice = createSlice({
  name: "otpModal",
  initialState: { value: false },
  reducers: {
    otpModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default otpModalSlice.reducer;
export const { otpModal } = otpModalSlice.actions;
