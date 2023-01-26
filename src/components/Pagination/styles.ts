import styled from "styled-components";
import { B2, Color, S1 } from "ui";

interface SetCurrent {
  current: number;
  $isActive: boolean;
}

const StyledPagination = styled.button<SetCurrent>`
  padding: 10px 15px;
  ${B2}
  color: ${({ $isActive }) => ($isActive ? `${Color.WHITE}` : `${Color.SECONDARY_TEXT}`)};
  border-radius: 10px;
  background-color: ${({ $isActive }) =>
    $isActive ? `${Color.PRIMARY}` : `${Color.LIGHT_BACKGROUND}`};
  border: none;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.5);
`;

export { StyledPagination };
