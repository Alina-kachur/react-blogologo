import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color } from "ui";

const StyledUserAccount = styled.div`
  /* justify-self: flex-end; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  border-left: 1px solid ${Color.LIGHT};
  height: 100%;
`;
const StyledLink = styled(NavLink)``;

export { StyledUserAccount, StyledLink };
