import { createSlice } from "@reduxjs/toolkit";

interface IState {
  viewCartVisible: boolean;
}

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    viewCartVisible: false,
  } as IState,
  reducers: {
    viewCartVisibleToggled: (state) => {
      state.viewCartVisible = !state.viewCartVisible;
    },
  },
});

export const navigationActions = navigationSlice.actions;
export const navigationReducer = navigationSlice.reducer;
