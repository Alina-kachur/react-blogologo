import { getAuth, signOut } from "firebase/auth";
import { logOut, useAppDispatch } from "store";
import { LogOutButton, UserEmail, UserInfo, UserName, WrapperAccountPage } from "./styles";
import { Title } from "components";
import { SignInIcon } from "assets";

export const AccountPage = () => {
  const dispatch = useAppDispatch();
  const userName = JSON.parse(localStorage.getItem("userInfo")!);

  const userInfo = JSON.parse(localStorage.getItem("userInfo")!);
  if (userInfo) {
    userInfo.isAuth = false;
  }

  const handleLogOut = () => {
    dispatch(logOut());
    const auth = getAuth();
    signOut(auth);
    localStorage.length > 0 && localStorage.setItem("userInfo", JSON.stringify(userInfo));
  };
  return (
    <WrapperAccountPage
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <Title>Account</Title>
      <UserInfo>
        <SignInIcon />
        <UserName> Name: {userName !== null && userName.name}</UserName>
        <UserEmail>Email: {userName !== null && userName.email}</UserEmail>
        <LogOutButton onClick={handleLogOut}>Log Out </LogOutButton>
      </UserInfo>
    </WrapperAccountPage>
  );
};
