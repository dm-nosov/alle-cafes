import styled from "styled-components";

export const Input = styled.input`
  &[type="text"] {
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid
      ${({ $error }) => ($error ? "var(--danger)" : "var(--editor-background)")};
    font-size: 1em;
    margin-bottom: 0.5em;
  }

  &[type="text"]:focus-visible {
    outline: none;
  }
`;
