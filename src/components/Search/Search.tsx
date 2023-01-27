import { StyledCloseIcon, StyledInput, StyledSearch, StyledSearchIcon } from "./styles";
import { HTMLInputTypeAttribute, ChangeEvent, FormEvent, useEffect } from "react";
import { useDebounce, useInput, useToggle } from "hooks";
import { setSearch } from "store";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { useDispatch } from "react-redux";
import { memo } from "react";

interface ISearch {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  handleClose?: () => void;
  onClick?: () => void;
}

export const Search = memo((props: ISearch) => {
  const dispatch = useDispatch();
  const titleWord = useInput();

  const [isActiveSearch, toggleIsActiveSearch] = useToggle();
  const handleSearchActive = () => {
    toggleIsActiveSearch();
  };
  const navigate = useNavigate();
  const debouncedValue = useDebounce(titleWord.value, 1000);

  const { reset } = useForm();
  const handleSearch = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    navigate(ROUTE.SEARCH);

    reset();
  };

  useEffect(() => {
    dispatch(
      setSearch({
        titleWord: debouncedValue,
      }),
    );
  }, [debouncedValue, dispatch]);

  return (
    <>
      {isActiveSearch ? (
        <StyledSearch onSubmit={handleSearch} onClick={props.onClick}>
          <StyledInput placeholder="Search..." type="search" {...titleWord} />
          <StyledCloseIcon onClick={handleSearchActive} />
        </StyledSearch>
      ) : (
        <>
          <StyledSearchIcon onClick={handleSearchActive} />
        </>
      )}
    </>
  );
});
