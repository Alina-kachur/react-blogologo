import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";
import { RequareAuth } from "../components/RequareAuth/RequareAuth";
import { FavoritesPage, HomePage, NotFoundPage } from "../pages";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
      <Route element={<RequareAuth />}>
        <Route path={ROUTE.FAVORITES} element={<FavoritesPage />} />
      </Route>
    </Route>,
  ),
);
