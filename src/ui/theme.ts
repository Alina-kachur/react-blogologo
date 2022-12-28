import { css } from "styled-components";

const lightTheme = css`
  html[theme="light"] {
    --light-bg: #f3f3f3;
    --white: #ffffff;
    --secondary-text: #313037;
    --medium-text: #5a595f;
    --light-button: #eaeaeb;
    --switch-theme-button: #98989b;
    --light-cards: #ffffff;
  }
`;
const darkTheme = css`
  html[theme="dark"] {
    --light-bg: #313037;
    --white: #5a595f;
    --secondary-text: #ffffff;
    --medium-text: #98989b;
    --light-button: #5a595f;
    --switch-theme-button: #912ef2;
    --light-cards: #98989b;
  }
`;
export { darkTheme, lightTheme };
