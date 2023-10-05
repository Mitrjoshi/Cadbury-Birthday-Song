import { createSlice } from "@reduxjs/toolkit";

export const tutorialModalSlice = createSlice({
  name: "tutorialModal",
  initialState: { value: false },
  reducers: {
    tutorialModal: (state, action) => {
      state.value = action.payload;
    },
  },
});

export default tutorialModalSlice.reducer;
export const { tutorialModal } = tutorialModalSlice.actions;
