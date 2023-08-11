import styled from "styled-components";

export const Spinner = styled.div`
  display: inline-block;
  width: 0.9em;
  height: 0.9em;
  margin: 0 1em;

  &::after {
    content: "";
    display: block;
    width: 0.9em;
    height: 0.9em;
    border-radius: 50%;
    border: 2px solid #fff;
    border-color: ${({ $dark }) =>
      $dark ? "black transparent" : "white transparent"};
    animation: lds-dual-ring 1.2s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
