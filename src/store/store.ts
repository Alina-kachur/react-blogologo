import { configureStore } from "@reduxjs/toolkit";
import themeReduser from "./theme/themeSlice";

export const store = configureStore({
  reducer: {
    theme: themeReduser,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
