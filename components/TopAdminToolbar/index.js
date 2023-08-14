import { saveContent } from "@/api-facade/editor-content";
import { useWebsiteContentStore } from "@/store/WebsiteContent";
import styled from "styled-components";

const StyledNav = styled.nav`
  background-color: var(--secondary);
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & button {
    margin: 0 1em;
  }
`;

export function TopAdminToolbar({ websiteId }) {
  const preview = useWebsiteContentStore((state) => state.isPreview);
  const togglePreview = useWebsiteContentStore((state) => state.togglePreview);
  const content = useWebsiteContentStore((state) => state.content);

  return (
    <StyledNav>
      <button onClick={togglePreview} disabled={preview}>
        Preview
      </button>
      <button onClick={togglePreview} disabled={!preview}>
        Edit
      </button>
      <button onClick={() => saveContent(websiteId, content)}>Save</button>
    </StyledNav>
  );
}
