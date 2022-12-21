import styled from "styled-components";
import { Color } from "../../ui/colors";

const StyledHeader = styled.header`
  min-height: 96px;
  background-color: ${Color.WHITE};
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
`;
export { StyledHeader };
