import { StylesConfig } from "react-select";
import { Color } from "ui";
import { IOption } from "./CustomSelect";

export const styledSelect: StylesConfig<IOption, false> = {
  option: (provided, state) => ({
    ...provided,
    backgroundColor: `${Color.LIGHT_CARDS}`,
    color: `${Color.SECONDARY_TEXT}`,
    padding: 20,
    fontFamily: "Inter",
    width: "200px",
    cursor: "pointer",
    "&:hover": {
      color: `${Color.PRIMARY}`,
      backgroundColor: `${Color.GRAY}`,
    },
  }),
  control: (styles) => ({
    ...styles,
    width: "200px",
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
