import Select, { SingleValue } from "react-select";
import { ISelectOption } from "types/types";
import { styledSelect } from "./styles";
import { memo } from "react";
import { sortTitle } from "config";

interface IProps {
  handleSortTitle: (option: SingleValue<ISelectOption | null | any>) => void;
}

export const CustomSelectTitle = memo(({ handleSortTitle }: IProps) => {
  return (
    <Select
      options={sortTitle}
      styles={styledSelect}
      isSearchable={false}
      isMulti={false}
      onChange={handleSortTitle}
      defaultValue={sortTitle[0]}
    />
  );
});
