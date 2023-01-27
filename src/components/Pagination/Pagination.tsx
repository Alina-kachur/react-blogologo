import { useState, useEffect } from "react";
import { fetchArticles, fetchNews, fetchNewsById, useAppDispatch } from "store";
import { StyledPagination } from "./styles";

interface IProps {
  paramsPage: number;
  isActive: boolean;
}

export const Pagination = ({ paramsPage, isActive }: IProps) => {
  return (
    <StyledPagination current={paramsPage} $isActive={isActive}>
      {paramsPage}
    </StyledPagination>
  );
};
