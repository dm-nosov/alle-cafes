import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    color: #3f3f3f;
  }

  h2 {
    text-align: center;
  }
  p {
    line-height: 24px;
  }

`;
