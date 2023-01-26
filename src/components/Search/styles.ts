import { CloseIcon, SearchIcon } from "assets/icons";
import styled from "styled-components";
import { B1, Color } from "ui";

const StyledSearch = styled.form`
  display: grid;
  grid-template-columns: 98% 2%;
  align-items: center;
  padding: 0 20px;

  /* border: none; */
`;
const StyledInput = styled.input`
  padding: 10px 10px;
  ${B1}
  border: 1px solid ${Color.EXTRA_LIGHT};
  border-radius: 5px;
  background-color: ${Color.WHITE_HEADER};

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
  .text-field__input[type="search"]::-webkit-search-decoration,
  .text-field__input[type="search"]::-webkit-search-cancel-button,
  .text-field__input[type="search"]::-webkit-search-results-button,
  .text-field__input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  cursor: pointer;
  margin-right: 20px;
  justify-self: flex-end;

  /* fill: ${Color.MEDIUM_TEXT}; */
`;

const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  justify-self: flex-end;
`;

export { StyledSearch, StyledInput, StyledCloseIcon, StyledSearchIcon };
