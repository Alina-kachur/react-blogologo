import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledHeader = styled.header`
  min-height: 96px;
  background-color: ${Color.WHITE_HEADER};
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  width: clamp(320px, 1120px, 100%);
`;
export { StyledHeader };
