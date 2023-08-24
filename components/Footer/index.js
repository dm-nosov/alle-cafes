import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10rem;
  background-color: var(--secondary);
  color: black;
  width: 100%;
  bottom: 0;
`;

export function Footer() {
  return <StyledFooter>Copyright, 2023</StyledFooter>;
}
