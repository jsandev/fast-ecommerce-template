import { configureStore } from "@reduxjs/toolkit";

import { navigationReducer } from "./navigation";

export const store = configureStore({
  reducer: {
    navigation: navigationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
