import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice/themeSlice";
import userReducer from "./slices/userSlice/userSlice";
import blogReducer from "./slices/blogSlice/blogSlice";
import blogInfoReducer from "./slices/blogInfoSlice/blogInfoSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    blog: blogReducer,
    blogInfo: blogInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
