import { ReactNode, memo } from "react";
import { StyledTitle } from "./styles";

interface IProps {
  children: ReactNode;
}

export const Title = memo(({ children }: IProps) => {
  return <StyledTitle>{children}</StyledTitle>;
});
