import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./slices/articlesSlice/articlesSlice";
import themeReducer from "./slices/themeSlice/themeSlice";
import userReducer from "./slices/userSlice/userSlice";
import newsReducer from "./slices/newsSlice/newsSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    articles: articleReducer,
    news: newsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
