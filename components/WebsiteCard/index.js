import Link from "next/link";
import styled from "styled-components";

const StyledCard = styled.nav`
  border: 1px solid black;
  border-radius: 1em;
  margin: 1em;
  padding: 1em;
`;

export function WebsiteCard({ name }) {
  return (
    <StyledCard>
      <p>{name}</p>
      <Link href="/admin/123/edit">edit</Link>
    </StyledCard>
  );
}
