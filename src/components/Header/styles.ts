import { LogoIcon } from "assets/icons";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color, Media } from "ui";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 32px;
  width: 100%;
  background-color: ${Color.WHITE_HEADER};

  ${Media.XS} {
    padding: 10px 10px;
  }
`;
const StyledLogoIcon = styled(LogoIcon)`
  ${Media.MD} {
    height: 56px;
  }
  ${Media.XS} {
    height: 44px;
  }
`;

const StyledLink = styled(NavLink)`
  justify-self: flex-start;
`;
export { StyledHeader, StyledLink, StyledLogoIcon };
