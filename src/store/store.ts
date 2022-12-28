import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice/themeSlice";
import userReducer from "./slices/userSlice/userSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
