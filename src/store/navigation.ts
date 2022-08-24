import { createSlice } from "@reduxjs/toolkit";

interface IState {
  viewCartVisible: boolean;
  modalLoginVisible: boolean;
}

export const navigationSlice = createSlice({
  name: "navigation",
  initialState: {
    viewCartVisible: false,
    modalLoginVisible: false,
  } as IState,
  reducers: {
    viewCartVisibleToggled: (state) => {
      state.viewCartVisible = !state.viewCartVisible;
    },
    modalLoginVisibleToggled: (state) => {
      state.modalLoginVisible = !state.modalLoginVisible;
    },
  },
});

export const navigationActions = navigationSlice.actions;
export const navigationReducer = navigationSlice.reducer;
