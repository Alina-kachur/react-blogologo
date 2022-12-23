import { StyledSearch } from "./styles";
import { HTMLInputTypeAttribute, ChangeEvent } from "react";

interface ISearch {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Search = (props: ISearch) => {
  return <StyledSearch {...props} />;
};
