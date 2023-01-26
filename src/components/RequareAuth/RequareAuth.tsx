import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "router";
import { setUser, useAppSelector } from "store";

export const RequareAuth = () => {
  const { isAuth } = useAppSelector(setUser);
  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};
