import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledFooter = styled.footer`
  min-height: 92px;
  background-color: ${Color.LIGHT_BACKGROUND};
  display: flex;
  justify-content: space-between;
  width: clamp(320px, 1120px, 100%);
`;
export { StyledFooter };
