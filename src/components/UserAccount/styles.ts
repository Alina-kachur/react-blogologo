import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

const StyledUserAccount = styled.div`
  /* justify-self: flex-end; */
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  padding-left: 20px;
  border-left: 1px solid ${Color.LIGHT};
  height: 100%;
`;
const StyledLink = styled(NavLink)``;

export { StyledUserAccount, StyledLink };
