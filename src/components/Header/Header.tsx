import { Link } from "react-router-dom";
import { StyledHeader, StyledLink } from "./styles";
import { ROUTE } from "router";
import { useInput } from "hooks";
import { LogoIcon } from "assets/icons";
import { Search } from "components/Search/Search";

export const Header = () => {
  const search = useInput();

  return (
    <StyledHeader>
      <StyledLink to={ROUTE.HOME}>
        <LogoIcon />
      </StyledLink>
      <Search type="text" placeholder="Search..." {...search} />
      <Link to={ROUTE.FAVORITES}>Favorites</Link>
    </StyledHeader>
  );
};
