import { SignInIcon } from "assets/icons";
import { ROUTE } from "router";
import { setUser, useAppSelector } from "store";
import { StyledLink, StyledUserAccount, Text } from "./styles";
import { memo } from "react";
import { useWindowSize } from "hooks";

interface UserAccountProps {
  handleClose: () => void;
}

export const UserAccount = ({ handleClose }: UserAccountProps) => {
  const { name, surname, isAuth } = useAppSelector(setUser);
  const { width = 0 } = useWindowSize();

  return (
    <StyledUserAccount>
      <StyledLink to={ROUTE.SIGN_IN} onClick={handleClose}>
        {width > 568 && <SignInIcon />}
        <Text>{isAuth ? name + surname : "Sign in"}</Text>
      </StyledLink>
    </StyledUserAccount>
  );
};
