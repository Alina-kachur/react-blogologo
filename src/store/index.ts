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
import { addToFavorites } from "./slices/favoritesSlice/favoritesSlice";
import { removeFavorite } from "./slices/favoritesSlice/favoritesSlice";
import { toggleTheme } from "./slices/themeSlice/themeSlice";
import { fetchSignIn } from "./slices/userSlice/userSlice";
import { fetchSignUp } from "./slices/userSlice/userSlice";
import { fetchSignOut } from "./slices/userSlice/userSlice";
import { getBlog } from "./selectors/blogSelector";
import { getArticlesById } from "./selectors/blogInfoSelector";

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
  addToFavorites,
  toggleTheme,
  removeFavorite,
  fetchSignIn,
  fetchSignOut,
  fetchSignUp,
  getBlog,
  getArticlesById,
};
