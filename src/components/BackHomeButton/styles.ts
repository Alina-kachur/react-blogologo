import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color, S1 } from "ui";

const StyledBackHomeButton = styled.button`
  padding: 10px;
  margin-top: 30px;
  border-radius: 5px;
  ${S1}
  color: ${Color.WHITE};
  background-color: ${Color.PRIMARY};
  border: none;
  :hover {
    background-color: ${Color.PRIMARY_LIGHT};
    transition-duration: 0.5s;
  }
`;

const Link = styled(NavLink)``;
export { StyledBackHomeButton, Link };
