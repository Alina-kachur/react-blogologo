import { StylesConfig } from "react-select";
import { ISelectOption } from "types/types";
import { Color } from "ui";

export const styledSelect: StylesConfig<ISelectOption, false> = {
  option: (provided) => ({
    ...provided,
    backgroundColor: `${Color.LIGHT_CARDS}`,
    color: `${Color.SECONDARY_TEXT}`,
    padding: 20,
    fontFamily: "Inter",
    width: "256px",
    cursor: "pointer",
    "&:hover": {
      color: `${Color.PRIMARY}`,
      backgroundColor: `${Color.GRAY}`,
    },
  }),
  control: (styles) => ({
    ...styles,
    width: "256px",
    borderRadius: 10,
    border: "none",
    padding: 10,
    fontSize: "16px",
    fontFamily: "Inter",
    cursor: "pointer",
    backgroundColor: `${Color.LIGHT_CARDS}`,
    color: `${Color.SECONDARY_TEXT}`,
    "&:hover": {
      border: `1px solid ${Color.PRIMARY}`,
    },
  }),
};
