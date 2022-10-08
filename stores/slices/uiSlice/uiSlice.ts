import { createSlice } from "@reduxjs/toolkit";

// Type for our state
export interface UiState {
}

// Initial state
const initialState: UiState = {
};

// Actual Slice
export const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    // Action to set the authentication status
  },
});

export const { } = uiSlice.actions;

export default uiSlice.reducer;
