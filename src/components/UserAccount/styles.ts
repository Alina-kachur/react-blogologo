import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color, S1 } from "ui";

const StyledUserAccount = styled.div``;
const StyledLink = styled(NavLink)`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  padding-left: 20px;
  height: 100%;
  border-left: 1px solid ${Color.LIGHT};
`;

const Text = styled.p`
  ${S1}
  font-weight: 600;
  color: ${Color.PRIMARY};
`;

export { StyledUserAccount, StyledLink, Text };
