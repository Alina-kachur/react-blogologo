import { HeartIcon, SignInIcon } from "assets/icons";
import { ROUTE } from "router";
import { getUserInfo, useAppSelector } from "store";
import { StyledLink, StyledLinkFav, StyledUserAccount, Text, WrapperLink } from "./styles";
import { memo } from "react";
import { useWindowSize } from "hooks";
import { NavLink } from "react-router-dom";

interface UserAccountProps {
  handleClose: () => void;
}

export const UserAccount = ({ handleClose }: UserAccountProps) => {
  const { name, isAuth } = useAppSelector(getUserInfo);
  const { width = 0 } = useWindowSize();

  return (
    <StyledUserAccount>
      {isAuth ? (
        <WrapperLink>
          <StyledLinkFav to={ROUTE.FAVORITES} onClick={handleClose}>
            {width > 568 && <HeartIcon height="30" width="30" />}
            {width <= 568 && <Text>Favorites</Text>}
          </StyledLinkFav>
          <StyledLink to={ROUTE.USER_ACCOUNT} onClick={handleClose}>
            {width > 568 && <SignInIcon />}
            <Text>{isAuth ? name : "Sign in"}</Text>
          </StyledLink>
        </WrapperLink>
      ) : (
        <StyledLink to={ROUTE.SIGN_IN} onClick={handleClose}>
          {width > 568 && <SignInIcon />}
          <Text>{isAuth ? name : "Sign in"}</Text>
        </StyledLink>
      )}
    </StyledUserAccount>
  );
};
