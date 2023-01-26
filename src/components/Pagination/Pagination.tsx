import React, { useState, useEffect } from "react";
import { fetchArticles, fetchNews, fetchNewsById, useAppDispatch } from "store";
import { StyledPagination } from "./styles";

interface IProps {
  paramsPage: number;
  isActive: boolean;
  handlePage: () => void;
}

export const Pagination = ({ paramsPage, isActive, handlePage }: IProps) => {
  return (
    <StyledPagination onClick={handlePage} current={paramsPage} $isActive={isActive}>
      {paramsPage}
    </StyledPagination>
  );
};
