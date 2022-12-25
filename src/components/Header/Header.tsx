import { Link } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { StyledHeader, StyledLink } from "./styles";
import { StyledSearch } from "components/Search/styles";
import { ROUTE } from "router";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledLink to={ROUTE.HOME}>
        <LogoIcon />
      </StyledLink>
      <StyledSearch type={"text"} placeholder="Search..." />
      <Link to={ROUTE.FAVORITES}>Favorites</Link>
    </StyledHeader>
  );
};
