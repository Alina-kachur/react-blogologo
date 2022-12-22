import { css } from "styled-components";

export const resetCSS = css`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap");
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
  }
  a,
  a:link,
  a:visited {
    text-decoration: none;
  }
  a:hover {
    text-decoration: none;
  }
  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-size: inherit;
    font-weight: inherit;
    margin: 0;
    padding: 0;
  }
  button,
  input {
    display: inline-block;
    box-shadow: none;
    background-color: transparent;
    background: none;
    cursor: pointer;
  }
`;
