import { store } from "./store";
import { themeSlice } from "./slices/themeSlice/themeSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { getAllArticles } from "./selectors/articleSelector";
import { getArticlesByID } from "./selectors/articleSelector";
import { getAllNews } from "./selectors/newsSelector";
import { getNewsByID } from "./selectors/newsSelector";
import { setTheme } from "./selectors/themeSelector";
import { setUser } from "./selectors/userSelector";
import { fetchArticlesInfo } from "./slices/articlesInfoSlice/articlesInfoSlice";
import { fetchArticles } from "./slices/articlesSlice/articlesSlice";
import { fetchNewsInfo } from "./slices/newsInfoSlice/newsInfoSlice";
import { fetchNews } from "./slices/newsSlice/newsSlice";
import { userSlice } from "./slices/userSlice/userSlice";

export {
  store,
  themeSlice,
  useAppDispatch,
  useAppSelector,
  getAllArticles,
  getArticlesByID,
  getAllNews,
  getNewsByID,
  setTheme,
  setUser,
  fetchArticlesInfo,
  fetchArticles,
  fetchNewsInfo,
  fetchNews,
  userSlice,
};
