import { css } from "styled-components";

const lightTheme = css`
  html[theme="light"] {
    --light-bg: #f3f3f3;
    --white: #ffffff;
    --secondary-text: #313037;
    --medium-text: #6f6e73;
    --light-button: #eaeaeb;
    --switch-theme-button: #c1c1c3;
  }
`;
const darkTheme = css`
  html[theme="dark"] {
    --light-bg: #313037;
    --white: #6f6e73;
    --secondary-text: #ffffff;
    --medium-text: #c1c1c3;
    --light-button: #6f6e73;
    --switch-theme-button: #912ef2;
  }
`;
export { darkTheme, lightTheme };
