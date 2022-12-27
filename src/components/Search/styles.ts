import { CloseIcon, SearchIcon } from "assets/icons";
import styled from "styled-components";
import { Color, Typography } from "ui";

const StyledSearch = styled.div`
  display: grid;
  grid-template-columns: 98% 2%;
  align-items: center;

  /* border: none; */
`;
const StyledInput = styled.input`
  ${Typography.B1}
  padding: 10px 10px;
  border: 1px solid ${Color.EXTRA_LIGHT};
  border-radius: 5px;
  background-color: ${Color.WHITE_HEADER};

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
  .text-field__input[type="search"]::-webkit-search-decoration,
  .text-field__input[type="search"]::-webkit-search-cancel-button,
  .text-field__input[type="search"]::-webkit-search-results-button,
  .text-field__input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  cursor: pointer;
  justify-self: flex-end;
`;

const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  justify-self: flex-end;
`;

export { StyledSearch, StyledInput, StyledCloseIcon, StyledSearchIcon };
