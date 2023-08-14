import styled from "styled-components";

export const PopupOption = styled.p`
  &::before {
    content: "";
    height: 0.87rem;
    width: 1rem;
    background-image: url(/img/icons/arrow-right-short.svg);
    font-weight: bold;
    margin: 0 0.25rem;
    padding-left: 0.5rem;
    display: inline-block;
  }
  &:last-of-type {
    border-bottom: none;
  }
  color: ${({ $danger }) => ($danger ? "var(--danger)" : "black")};

  padding-bottom: 0.5rem;
  cursor: pointer;
  border-bottom: 2px solid var(--secondary);
`;
