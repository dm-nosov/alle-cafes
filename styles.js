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
    --main-color: hotpink;
    --editor-background: rgb(167, 167, 167);
  }
  .ProseMirror > div {
    border: 1px dashed var(--editor-background);
    padding: 5px;
  }
`;
