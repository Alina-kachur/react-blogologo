import { MainTemplate, RequareAuth } from "components";
import {
  ArticlesInfoPage,
  FavoritesPage,
  HomePage,
  NewsInfoPage,
  NotFoundPage,
  ResetPasswordPage,
  SearchPage,
  SignInPage,
  SignUpPage,
} from "pages";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={ROUTE.HOME} element={<MainTemplate />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
        <Route path={ROUTE.SIGN_IN} element={<SignInPage />} />
        <Route path={ROUTE.SIGN_UP} element={<SignUpPage />} />
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route path={ROUTE.ARTICLES_INFO} element={<ArticlesInfoPage />} />
        <Route path={ROUTE.NEWS_INFO} element={<NewsInfoPage />} />
      </Route>
      ,
      <Route element={<RequareAuth />}>
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        <Route path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPage />} />
      </Route>
    </>,
  ),
);
