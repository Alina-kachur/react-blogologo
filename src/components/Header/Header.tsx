import { StyledHeader, StyledLink, StyledLogoIcon } from "./styles";
import { ROUTE } from "router";
import { useInput } from "hooks";
import { Search } from "components/Search/Search";
import { UserAccount } from "components/UserAccount/UserAccount";

export const Header = () => {
  const search = useInput();

  return (
    <StyledHeader>
      <StyledLink to={ROUTE.HOME}>
        <StyledLogoIcon />
      </StyledLink>
      <Search type="text" placeholder="Search..." {...search} />
      <UserAccount />
    </StyledHeader>
  );
};
