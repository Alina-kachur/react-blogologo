import { StyledPagination } from "./styles";
import { memo } from "react";

interface IProps {
  paramsPage: number;
  isActive: boolean;
}

export const Pagination = memo(({ paramsPage, isActive }: IProps) => {
  return (
    <StyledPagination current={paramsPage} $isActive={isActive}>
      {paramsPage}
    </StyledPagination>
  );
});
