import { useWebsiteContentStore } from "@/store/WebsiteContent";
import { styled } from "styled-components";

const StyledNav = styled.nav`
  background-color: var(--editor-background);
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & button {
    margin: 0 1em;
  }
`;

export function TopAdminToolbar() {
  const preview = useWebsiteContentStore((state) => state.isPreview);
  const togglePreview = useWebsiteContentStore((state) => state.togglePreview);
  return (
    <StyledNav>
      <button onClick={togglePreview} disabled={preview}>
        Preview
      </button>
      <button onClick={togglePreview} disabled={!preview}>
        Edit
      </button>
    </StyledNav>
  );
}