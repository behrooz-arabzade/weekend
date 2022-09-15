import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "stores/store";
import { HYDRATE } from "next-redux-wrapper";

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
  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.template,
      };
    },
  },
});

export const { setTesting } = templateSlice.actions;

export const selectIsTestingState = (state: AppState) =>
  state.template.isTesting;

export const selectTestStringState = (state: AppState) =>
  state.template.testString;

export default templateSlice.reducer;
