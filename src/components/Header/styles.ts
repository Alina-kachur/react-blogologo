import { LogoIcon } from "assets/icons";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Color, Media } from "ui";

const StyledHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 8fr 1fr;
  align-items: center;
  padding: 20px 32px;
  width: 100%;
  background-color: ${Color.WHITE_HEADER};
  ${Media.XL} {
    grid-template-columns: 1fr 6fr 1fr;
  }
  ${Media.LG} {
    grid-template-columns: 1fr 4fr 1fr;
  }
  ${Media.MD} {
    grid-template-columns: 1fr 2fr 1fr;
  }
  ${Media.XS} {
    padding: 20px 15px;
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
