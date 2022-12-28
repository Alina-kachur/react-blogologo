import styled from "styled-components";
import { Color, Typography } from "ui";

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 0 10px 20px;
  margin-top: 10px;
  border-radius: 5px;
  border: 1px solid ${Color.EXTRA_LIGHT};
  background-color: ${Color.LIGHT_CARDS};
  ${Typography.B1}
  &::placeholder {
    ${Typography.B1}
    color: ${Color.MEDIUM_TEXT};
  }
  &:hover,
  &:focus {
    border: 1px solid ${Color.PRIMARY};
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
