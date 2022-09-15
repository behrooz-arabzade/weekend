import { createSlice } from "@reduxjs/toolkit";

// Type for our state
export interface TemplateState {
  isTesting: boolean;
  testString: string;
}

// Initial state
const initialState: TemplateState = {
  isTesting: true,
  testString: "test",
};

// Actual Slice
export const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    // Action to set the authentication status
    setTesting(state, action) {
      state.isTesting = action.payload;
    },
  },
});

export const { setTesting } = templateSlice.actions;

export default templateSlice.reducer;
