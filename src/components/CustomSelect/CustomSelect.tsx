import Select, { OnChangeValue } from "react-select";
import { styledSelect } from "./styles";

interface IProps {
  value: string;
  onSelect: (value: string) => void;
}
export interface IOption {
  value: string;
  label: string;
}
export const CustomSelect = ({ value, onSelect }: IProps) => {
  const options: IOption[] = [
    { value: "az", label: "Title (A-Z)" },
    { value: "za", label: "Title (Z-A)" },
  ];
  const handleSort = (newValue: OnChangeValue<IOption, boolean>) => {
    onSelect((newValue as IOption).value);
  };
  const getValue = (value: string): IOption | undefined => {
    return value ? options.find((option) => option.value === value) : undefined;
  };
  return (
    <Select
      options={options}
      styles={styledSelect}
      isSearchable={false}
      value={getValue(value)}
      onChange={handleSort}
    />
  );
};
