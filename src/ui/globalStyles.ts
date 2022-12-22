import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { resetCSS } from "./resetCSS";
import { darkTheme, lightTheme } from "./theme";

export const GlobalStyles = createGlobalStyle`
${resetCSS}
${lightTheme}
${darkTheme}
#root {
    background-color: ${Color.LIGHT_BACKGROUND};
  }
`;
