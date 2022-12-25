import { Link } from "react-router-dom";
import { ROUTE } from "../../router";
import { StyledSearch } from "../Search/styles";
import { ReactComponent as LogoIcon } from "../../assets/icons/logo.svg";
import { StyledHeader, StyledLink } from "./styles";

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
