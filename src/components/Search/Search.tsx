import { StyledCloseIcon, StyledInput, StyledSearch, StyledSearchIcon } from "./styles";
import { HTMLInputTypeAttribute, ChangeEvent, useEffect } from "react";
import { useToggle } from "hooks";

interface ISearch {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = (props: ISearch) => {
  const [isActiveSearch, toggleIsActiveSearch] = useToggle();
  const handleSearch = () => {
    toggleIsActiveSearch();
  };
  // useEffect(() => {
  //   handleSearch();
  // }, []);

  return (
    <>
      {isActiveSearch ? (
        <StyledSearch>
          <StyledInput placeholder="Search..." type="search" />
          <StyledCloseIcon onClick={handleSearch} />
        </StyledSearch>
      ) : (
        <>
          <StyledSearchIcon onClick={handleSearch} />
        </>
      )}
    </>
  );
};
