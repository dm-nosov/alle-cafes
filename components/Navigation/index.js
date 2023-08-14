import styled from "styled-components";
import { signIn, signOut } from "next-auth/react";
const StyledNav = styled.nav`
  display: flex;
  justify-content: end;
  gap: 1rem;
  & button {
    margin: 1rem;
  }
`;

export function Navigation({ session }) {
  return (
    <StyledNav>
      {session ? (
        <button onClick={() => signOut()}>Sign out</button>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </StyledNav>
  );
}
