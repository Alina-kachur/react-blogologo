import styled from "styled-components";
import { B1, Color } from "ui";

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 0 10px 20px;
  border-radius: 5px;
  border: 1px solid ${Color.EXTRA_LIGHT};
  ${B1}
  &::placeholder {
    ${B1}
    color: ${Color.MEDIUM_TEXT};
  }
  &:hover,
  &:focus {
    border: 1px solid ${Color.PRIMARY};
    transition-duration: 0.5s;
  }
  &:active {
    color: ${Color.MEDIUM_TEXT};
    border: 1px solid ${Color.EXTRA_LIGHT};
  }
  &:invalid {
    border: 1px solid ${Color.ERROR};
  }

  /* &:disabled{
    background-color: ${Color.EXTRA_LIGHT};
    color: ${Color.LIGHT};
  } */
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    display: none;
  }
  cursor: pointer;
`;
export { StyledInput };
