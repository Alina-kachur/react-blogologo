import { StyledInput } from "./styles";
import { memo } from "react";
interface IProps {
  placeholder: string;
  type?: string;
  value: string;
}

export const Input = memo(({ placeholder, type, value }: IProps) => {
  return <StyledInput placeholder={placeholder} type={type} value={value}></StyledInput>;
});
