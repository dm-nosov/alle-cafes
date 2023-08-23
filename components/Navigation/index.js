import styled from "styled-components";
import { signIn, signOut } from "next-auth/react";
import { Button } from "../Button";
import { BUTTON_PRIMARY } from "@/utils/button";
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
        <Button text="Sign out" handleClick={() => signOut()} />
      ) : (
        <Button
          text="Sign in"
          actionType={BUTTON_PRIMARY}
          handleClick={() => signIn()}
        />
      )}
    </StyledNav>
  );
}
