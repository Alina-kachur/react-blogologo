import { Link } from "react-router-dom";
import { ROUTE } from "../../router";
import { StyledSearch } from "../Search/styles";

import { StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledSearch type={"text"} placeholder="Search..." />
      <Link to={ROUTE.FAVORITES}>Favorites</Link>
      <Link to={ROUTE.HOME}>Home</Link>
    </StyledHeader>
  );
};
