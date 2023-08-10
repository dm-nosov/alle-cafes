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

  :root {
    --primary: #3F2305;
    --primary-color: white;
    --secondary: #F5F5F5;
    --secondary-outline: #DFD7BF;
    --editor-background: rgb(167, 167, 167);
  }

  nav {
    background-color: var(--secondary);
  }
  hgroup {
    padding: 0 1em;
  }
`;
