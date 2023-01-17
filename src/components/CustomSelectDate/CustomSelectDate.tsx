import Select, { OnChangeValue } from "react-select";
import { Period } from "types/types";
import { styledSelect } from "./styles";

export interface IOption {
  value: string;
  label: string;
}
interface IProps {
  value: string;
  onChange: (value: string) => void;
}
export const CustomSelectDate = ({ value, onChange }: IProps) => {
  const options: IOption[] = [
    { value: Period.DAY, label: "Day" },
    { value: Period.WEEK, label: "Week" },
    { value: Period.MONTH, label: "Month" },
    { value: Period.YEAR, label: "Year" },
  ];
  const handleSort = (newValue: OnChangeValue<IOption, boolean>) => {
    onChange((newValue as IOption).value);
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
