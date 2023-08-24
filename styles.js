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
    font-size: xx-large;
  }
  p {
    line-height: 24px;
  }

  :root {
    --primary: #3F2305;
    --primary-text: white;
    --secondary: #F5F5F5;
    --secondary-outline: #DFD7BF;
    --editor-background: rgb(167, 167, 167);
    --danger: #C70039;
    --fieldset-border: #f0f0f0;
    --accent: #F2EAD3;
    --success: #125B50;
    --element-shadow: rgb(200 200 200) 1px 1px 2px 1px;
  }

  nav {
    backdrop-filter: blur(10px);
    background-color: rgba(255, 255, 255, 0.3);
  }
  hgroup {
    padding: 0 1rem;
  }
  main {
    min-height: calc(100vh - 66px - 10rem);
  }
`;
