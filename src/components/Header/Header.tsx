import { Link } from "react-router-dom";
import { ROUTE } from "../../router";

import { StyledHeader } from "./styles";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to={ROUTE.FAVORITES}>Favorites</Link>
      <Link to={ROUTE.HOME}>Home</Link>
    </StyledHeader>
  );
};
