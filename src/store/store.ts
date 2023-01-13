import { configureStore } from "@reduxjs/toolkit";
import articleReducer from "./slices/articlesSlice/articlesSlice";
import themeReducer from "./slices/themeSlice/themeSlice";
import userReducer from "./slices/userSlice/userSlice";
import newsReducer from "./slices/newsSlice/newsSlice";
import newsInfoReducer from "./slices/newsInfoSlice/newsInfoSlice";

import articlesInfoReducer from "./slices/articlesInfoSlice/articlesInfoSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    user: userReducer,
    articles: articleReducer,
    news: newsReducer,
    newsInfo: newsInfoReducer,
    articlesInfo: articlesInfoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
