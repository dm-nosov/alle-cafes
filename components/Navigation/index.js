import styled from "styled-components";
import { signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
const StyledNav = styled.nav`
  display: flex;
  justify-content: end;
  gap: 1em;
  & button {
    margin: 1em;
  }
`;

export function Navigation({ session }) {
  const router = useRouter();

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
