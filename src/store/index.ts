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
import { removeFavorites } from "./slices/favoritesSlice/favoritesSlice";
import { toggleTheme } from "./slices/themeSlice/themeSlice";
import { fetchSignIn } from "./slices/userSlice/userSlice";
import { fetchSignUp } from "./slices/userSlice/userSlice";
import { getBlog } from "./selectors/blogSelector";
import { getArticlesById } from "./selectors/blogInfoSelector";
import { fetchResetPassword } from "./slices/userSlice/userSlice";
import { getUserInfo } from "./selectors/userSelector";
import { getFavorite } from "./selectors/favoritesSelector";
import { logOut } from "./slices/userSlice/userSlice";

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
  removeFavorites,
  fetchSignIn,
  fetchSignUp,
  getBlog,
  getArticlesById,
  fetchResetPassword,
  getUserInfo,
  getFavorite,
  logOut,
};
