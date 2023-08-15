import styled from "styled-components";
const StyledP = styled.p`
  color: ${({ $danger }) => ($danger ? "var(--danger)" : "black")};
  margin-bottom: 0;
  padding-bottom: 0.5rem;
  cursor: pointer;
`;

const OptionGrid = styled.div`
  border-bottom: 2px solid var(--secondary);
  &:last-of-type {
    border-bottom: none;
  }
  display: grid;
  grid-template-columns: 1fr 1rem;
  align-items: center;
  path {
    fill: var(--editor-background);
  }
`;

export function PopupOption({ children, danger, handleClick }) {
  return (
    <OptionGrid onClick={handleClick}>
      <StyledP $danger={danger}>{children}</StyledP>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
        />
      </svg>
    </OptionGrid>
  );
}
