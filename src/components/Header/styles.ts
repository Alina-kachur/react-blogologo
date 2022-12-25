import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledHeader = styled.header`
  background-color: ${Color.WHITE_HEADER};
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  align-items: center;
  width: 100%;
  padding: 20px 32px;
`;

const StyledLink = styled(NavLink)`
  justify-self: flex-start;
`;
export { StyledHeader, StyledLink };
