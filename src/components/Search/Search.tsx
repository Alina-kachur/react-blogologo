import { StyledCloseIcon, StyledInput, StyledSearch, StyledSearchIcon } from "./styles";
import { HTMLInputTypeAttribute, ChangeEvent, useEffect, FormEvent, useState } from "react";
import { useToggle } from "hooks";
import { useAppDispatch, useAppSelector } from "store";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";
import { getNewsArticlesBySearch } from "store/selectors/searchSelector";

interface ISearch {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  searchTerm?: string | null;
}

export const Search = (props: ISearch) => {
  const [isActiveSearch, toggleIsActiveSearch] = useToggle();
  const handleSearchActive = () => {
    toggleIsActiveSearch();
  };
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();
  const handleSearch = (event: FormEvent<HTMLFormElement>): void => {
    navigate(ROUTE.SEARCH);
    reset();
  };
  // const { articles, error, isLoading } = useAppSelector(getNewsArticlesBySearch);
  // const [searchTerm, setSearchTerm] = useState("");
  // const displayedItems = articles.filter((article) => {
  //   return article.title.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  return (
    <>
      {isActiveSearch ? (
        <StyledSearch onSubmit={handleSearch}>
          {/* <StyledInput placeholder="Search..." type="search" value={searchTerm} {...register} /> */}
          <StyledCloseIcon onClick={handleSearchActive} />
        </StyledSearch>
      ) : (
        <>
          <StyledSearchIcon onClick={handleSearchActive} />
        </>
      )}
    </>
  );
};
