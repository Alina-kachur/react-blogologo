import { CloseIcon, SearchIcon } from "assets/icons";
import styled from "styled-components";
import { B1, Color, Media } from "ui";

const StyledSearch = styled.form`
  display: grid;
  grid-template-columns: 99% 0%;
  align-items: center;
  padding: 0 20px;
  width: 1200px;
  ${Media.XXL} {
    width: 1000px;
  }
  ${Media.XL} {
    width: 850px;
  }
  ${Media.LG} {
    width: 600px;
  }
  ${Media.MD} {
    width: 400px;
  }
  ${Media.SM} {
    padding: 30px 0;
    width: 350px;
  }
  ${Media.XS} {
    width: 300px;
  }
  ${Media.XXS} {
    width: 250px;
  }
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
  &::-ms-clear {
    width: 0;
    height: 0;
  }

  .text-field__input[type="search"]::-webkit-search-decoration,
  .text-field__input[type="search"]::-webkit-search-cancel-button,
  .text-field__input[type="search"]::-webkit-search-results-button,
  .text-field__input[type="search"]::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button,
  ::-webkit-clear-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StyledSearchIcon = styled(SearchIcon)`
  justify-self: flex-end;
  cursor: pointer;
  margin-right: 20px;
  ${Media.SM} {
    margin-top: 40px;
  }
`;

const StyledCloseIcon = styled(CloseIcon)`
  cursor: pointer;
  justify-self: flex-end;
`;

export { StyledSearch, StyledInput, StyledCloseIcon, StyledSearchIcon };
