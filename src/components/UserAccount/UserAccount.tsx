import { SignInIcon } from "assets/icons";
import { ROUTE } from "router";
import { setUser, useAppSelector } from "store";
import { StyledLink, StyledUserAccount, Text } from "./styles";

export const UserAccount = () => {
  const { name, surname, isAuth } = useAppSelector(setUser);
  return (
    <StyledUserAccount>
      <StyledLink to={ROUTE.SIGN_IN}>
        <SignInIcon />
        <Text>{isAuth ? name + surname : "Sign in"}</Text>
      </StyledLink>
    </StyledUserAccount>
  );
};
