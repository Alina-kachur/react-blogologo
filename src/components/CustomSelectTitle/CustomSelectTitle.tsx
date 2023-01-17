import Select from "react-select";
import { SortTitle } from "types/types";
import { styledSelect } from "./styles";

export interface ISelectOption {
  value: string;
  label: string;
}
interface IProps {
  options: ISelectOption[];
  value: ISelectOption;
  onChange: (newValue: ISelectOption | null) => void;
}

export const sortOptions: ISelectOption[] = [
  { value: SortTitle.AZ, label: "Title (A-Z)" },
  { value: SortTitle.ZA, label: "Title (Z-A)" },
];

export const CustomSelectTitle = (props: IProps) => {
  return <Select styles={styledSelect} isSearchable={false} isMulti={false} {...props} />;
};
