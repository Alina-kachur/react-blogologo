import React, { ReactNode } from "react";
import { StyledTitle } from "./styles";

interface IProps {
  children: ReactNode;
}

export const Title = ({ children }: IProps) => {
  return <StyledTitle>{children}</StyledTitle>;
};
