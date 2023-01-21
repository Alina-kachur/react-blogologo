import { store } from "./store";
import { themeSlice } from "./slices/themeSlice/themeSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { getAllArticles } from "./selectors/articleSelector";
import { getArticleById } from "./selectors/articleInfoSelector";
import { getAllNews } from "./selectors/newsSelector";
import { getNewsByID } from "./selectors/newInfoSelector";
import { setTheme } from "./selectors/themeSelector";
import { setUser } from "./selectors/userSelector";
import { fetchArticles } from "./slices/articlesSlice/articlesSlice";
import { fetchNewsInfo } from "./slices/newsInfoSlice/newsInfoSlice";
import { fetchArticlesInfo } from "./slices/articlesInfoSlice/articlesInfoSlice";
import { fetchNews } from "./slices/newsSlice/newsSlice";

import { getUserName } from "./slices/userSlice/userSlice";

export {
  store,
  themeSlice,
  useAppDispatch,
  useAppSelector,
  getAllArticles,
  getArticleById,
  getAllNews,
  getNewsByID,
  setTheme,
  fetchArticles,
  fetchNewsInfo,
  fetchNews,
  getUserName,
  fetchArticlesInfo,
};
