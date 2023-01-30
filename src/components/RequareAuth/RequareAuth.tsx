import { getAuth, signOut } from "firebase/auth";
import { Navigate, Outlet } from "react-router-dom";
import { ROUTE } from "router";
import { useAppDispatch, useAppSelector } from "store";
import { getUserInfo } from "store/selectors/userSelector";
import { logOut } from "store/slices/userSlice/userSlice";
import { StyledRequareAuth } from "./styles";

export const RequareAuth = () => {
  const { name, email, isAuth } = useAppSelector(getUserInfo);
  const dispatch = useAppDispatch();

  const userInfo = JSON.parse(localStorage.getItem("userInfo")!);
  if (userInfo) {
    userInfo.isAuth = false;
  }

  const handleSignOut = () => {
    dispatch(logOut());
    const auth = getAuth();
    signOut(auth);
    localStorage.length > 0 && localStorage.setItem("userInfo", JSON.stringify(userInfo));
  };

  return (
    <StyledRequareAuth>
      <button onClick={handleSignOut}>sign out</button>
    </StyledRequareAuth>
  );
};
