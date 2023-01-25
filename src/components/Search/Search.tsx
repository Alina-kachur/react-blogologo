import { StyledCloseIcon, StyledInput, StyledSearch, StyledSearchIcon } from "./styles";
import { HTMLInputTypeAttribute, ChangeEvent, useEffect, FormEvent, useState } from "react";
import { useToggle } from "hooks";
import { useAppDispatch, useAppSelector } from "store";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ROUTE } from "router";

import { useDispatch } from "react-redux";
import { setSearch } from "store/slices/blogSlice/blogSlice";

interface ISearch {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  value: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = (props: ISearch) => {
  const dispatch = useDispatch();

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

  return (
    <>
      {isActiveSearch ? (
        <StyledSearch onSubmit={handleSearch}>
          <StyledInput placeholder="Search..." type="search" {...register} />
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
