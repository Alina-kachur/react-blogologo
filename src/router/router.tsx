import { MainTemplate, RequareAuth } from "components";
import {
  AccountPage,
  FavoritesPage,
  HomePage,
  NotFoundPage,
  ResetPasswordPage,
  SearchPage,
  SignInPage,
  SignUpPage,
} from "pages";
import { BlogInfoPage } from "pages/BlogInfoPage/BlogInfoPage";
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
        <Route path={ROUTE.RESET_PASSWORD} element={<ResetPasswordPage />} />
        <Route path={ROUTE.SEARCH} element={<SearchPage />} />
        <Route path={ROUTE.BLOG_INFO} element={<BlogInfoPage />} />
        <Route element={<RequareAuth />}>
          <Route path={ROUTE.USER_ACCOUNT} element={<AccountPage />} />
          <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
        </Route>
      </Route>
    </>,
  ),
  { basename: "/react-blogologo" },
);
