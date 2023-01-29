import styled from "styled-components";
import { B2, Color, S1 } from "ui";

interface SetCurrent {
  current: number;
  $isActive: boolean;
}

const StyledPagination = styled.button<SetCurrent>`
  ${B2}
  color: ${({ $isActive }) => ($isActive ? `${Color.PRIMARY_LIGHT}` : `${Color.SECONDARY_TEXT}`)};
  border: none;
`;

export { StyledPagination };
