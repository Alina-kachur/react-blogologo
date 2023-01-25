import { store } from "./store";
import { themeSlice } from "./slices/themeSlice/themeSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { setTheme } from "./selectors/themeSelector";
import { setUser } from "./selectors/userSelector";
import { fetchArticles } from "./slices/blogSlice/blogSlice";
import { fetchArticleById } from "./slices/blogInfoSlice/blogInfoSlice";
import { fetchNews } from "./slices/blogSlice/blogSlice";
import { fetchNewsById } from "./slices/blogInfoSlice/blogInfoSlice";
import { getUserName } from "./slices/userSlice/userSlice";

export {
  store,
  themeSlice,
  useAppDispatch,
  useAppSelector,
  setTheme,
  getUserName,
  setUser,
  fetchArticleById,
  fetchArticles,
  fetchNews,
  fetchNewsById,
};
