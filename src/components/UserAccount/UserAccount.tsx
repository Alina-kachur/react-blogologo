import { SignInIcon } from "assets/icons";
import { ROUTE } from "router";
import { getUserInfo, useAppSelector } from "store";
import { StyledLink, StyledUserAccount, Text } from "./styles";
import { memo } from "react";
import { useWindowSize } from "hooks";

interface UserAccountProps {
  handleClose: () => void;
}

export const UserAccount = ({ handleClose }: UserAccountProps) => {
  const { name, isAuth } = useAppSelector(getUserInfo);
  const { width = 0 } = useWindowSize();

  return (
    <StyledUserAccount>
      {isAuth ? (
        <StyledLink to={ROUTE.USER_ACCOUNT} onClick={handleClose}>
          {" "}
          {width > 568 && <SignInIcon />}
          <Text>{isAuth ? name : "Sign in"}</Text>
        </StyledLink>
      ) : (
        <StyledLink to={ROUTE.SIGN_IN} onClick={handleClose}>
          {width > 568 && <SignInIcon />}
          <Text>{isAuth ? name : "Sign in"}</Text>
        </StyledLink>
      )}
    </StyledUserAccount>
  );
};
