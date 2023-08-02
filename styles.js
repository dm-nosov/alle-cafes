import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: system-ui;
  }
  html {
    font-family: var(--font-heebo);
  }
  h2 {
    text-align: center;
  }
`;
