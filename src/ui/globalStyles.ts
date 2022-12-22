import { createGlobalStyle } from "styled-components";
import { Color } from "./colors";
import { resetCSS } from "./resetCSS";
import { darkTheme, ligtTheme } from "./theme";

export const GlobalStyles = createGlobalStyle`
${resetCSS}
${ligtTheme}
${darkTheme}
#root {
    background-color: ${Color.LIGHT_BACKGROUND};
  }
`;
