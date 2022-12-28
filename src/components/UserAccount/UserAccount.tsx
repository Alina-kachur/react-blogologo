import { SignInIcon } from "assets/icons";
import { ROUTE } from "router";
import { StyledLink, StyledUserAccount } from "./styles";

export const UserAccount = () => {
  return (
    <StyledUserAccount>
      <StyledLink to={ROUTE.SIGN_IN}>
        <SignInIcon />
      </StyledLink>
      <p>Sign In</p>
    </StyledUserAccount>
  );
};
