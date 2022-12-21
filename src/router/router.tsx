import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate/MainTemplate";
import { HomePage } from "../pages/HomePage";
import { NotFoundPage } from "../pages/NotFoundPage";
import { ROUTE } from "./routes";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path={ROUTE.HOME} element={<MainTemplate />}>
      <Route index element={<HomePage />} />
      <Route path={ROUTE.NOT_FOUND} element={<NotFoundPage />} />
    </Route>,
  ),
);
