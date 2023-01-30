import { store } from "./store";
import { themeSlice } from "./slices/themeSlice/themeSlice";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
import { setTheme } from "./selectors/themeSelector";
import { setSearch } from "./slices/blogSlice/blogSlice";
import { fetchArticles } from "./slices/blogSlice/blogSlice";
import { fetchArticleById } from "./slices/blogInfoSlice/blogInfoSlice";
import { fetchNews } from "./slices/blogSlice/blogSlice";
import { fetchNewsById } from "./slices/blogInfoSlice/blogInfoSlice";
import { addToFavorites } from "./slices/favoritesSlice/favoritesSlice";
import { removeFavorite } from "./slices/favoritesSlice/favoritesSlice";
import { toggleTheme } from "./slices/themeSlice/themeSlice";
import { fetchSignIn } from "./slices/userSlice/userSlice";
import { fetchSignUp } from "./slices/userSlice/userSlice";
import { getBlog } from "./selectors/blogSelector";
import { getArticlesById } from "./selectors/blogInfoSelector";
import { fetchResetPassword } from "./slices/userSlice/userSlice";
import { getUserInfo } from "./selectors/userSelector";

export {
  store,
  themeSlice,
  useAppDispatch,
  useAppSelector,
  setTheme,
  setSearch,
  fetchArticleById,
  fetchArticles,
  fetchNews,
  fetchNewsById,
  addToFavorites,
  toggleTheme,
  removeFavorite,
  fetchSignIn,
  fetchSignUp,
  getBlog,
  getArticlesById,
  fetchResetPassword,
  getUserInfo,
};
