import { StyledPagination } from "./styles";
import { memo } from "react";

interface IProps {
  paramsPage: number;
  isActive: boolean;
  handlePage: () => void;
}

export const Pagination = memo(({ paramsPage, isActive, handlePage }: IProps) => {
  return (
    <StyledPagination current={paramsPage} $isActive={isActive} onClick={handlePage}>
      {paramsPage}
    </StyledPagination>
  );
});
