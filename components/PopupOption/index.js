import styled from "styled-components";

export const PopupOption = styled.p`
  &::before {
    content: "";
    height: 0.87em;
    width: 1em;
    background-image: url(/img/icons/arrow-right-short.svg);
    font-weight: bold;
    margin: 0 0.25em;
    padding-left: 0.5em;
    display: inline-block;
  }
  &:last-of-type {
    border-bottom: none;
  }
  color: ${({ $danger }) => ($danger ? "var(--danger)" : "black")};

  padding-bottom: 0.5em;
  cursor: pointer;
  border-bottom: 2px solid var(--secondary);
`;
