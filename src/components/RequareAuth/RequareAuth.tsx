import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "router";
import { useAppSelector } from "store";
import { setUser } from "store/selectors/userSelector";

export const RequareAuth = () => {
  const { isAuth } = useAppSelector(setUser);
  return isAuth ? <Outlet /> : <Navigate to={ROUTE.SIGN_IN} />;
};
