import styled from "styled-components";
export const Skeleton = styled.div`
  display: block;
  height: ${({ $height }) => $height}em;
  position: relative;
  overflow: hidden;
  background-color: var(--secondary);
  padding: 1em;
  margin: 1em;
  border-radius: 0.25em;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background: linear-gradient(
      336deg,
      rgba(63, 35, 5, 0.8),
      rgba(63, 35, 5, 0) 70.71%
    );
    animation: shimmer 2s infinite;
    content: "";
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }
`;
