import { NavLink, PathMatch } from "react-router-dom";
import styled from "styled-components";

const StyledNavLink = styled(NavLink)<{ $isActive: PathMatch<"*"> | null }>`
  color: ${({ $isActive }) => ($isActive ? "#6C1BDB" : "#98989b")};
`;

export { StyledNavLink };
