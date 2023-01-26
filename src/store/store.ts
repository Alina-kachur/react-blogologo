import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice/themeSlice";
import userReducer from "./slices/userSlice/userSlice";
import blogReducer from "./slices/blogSlice/blogSlice";
import blogInfoReducer from "./slices/blogInfoSlice/blogInfoSlice";
import favoritesReducer from "./slices/favoritesSlice/favoritesSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    blog: blogReducer,
    blogInfo: blogInfoReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
