import styled from "styled-components";

export const Input = styled.input`
  &[type="text"],
  &[type="number"] {
    border: none;
    border-bottom: 1px solid
      ${({ $error }) => ($error ? "var(--danger)" : "var(--editor-background)")};
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  &[type="text"]:focus-visible,
  &[type="number"]:focus-visible {
    outline: none;
  }
`;
