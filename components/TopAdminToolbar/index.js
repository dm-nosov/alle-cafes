import { saveContent } from "@/api-facade/editor-content";
import { useWebsiteContentStore } from "@/store/WebsiteContent";
import styled from "styled-components";
import { Button } from "../Button";
import { BUTTON_PRIMARY } from "@/utils/button";

const StyledNav = styled.nav`
  background-color: rgba(255, 255, 255, 0.3);
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  & button {
    margin: 0 1rem;
  }
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
`;

export function TopAdminToolbar({ websiteId }) {
  const preview = useWebsiteContentStore((state) => state.isPreview);
  const togglePreview = useWebsiteContentStore((state) => state.togglePreview);
  const content = useWebsiteContentStore((state) => state.content);

  return (
    <StyledNav>
      <Button text="Preview" handleClick={togglePreview} isDisabled={preview} />
      <Button text="Edit" handleClick={togglePreview} isDisabled={!preview} />
      <Button
        text="Save"
        actionType={BUTTON_PRIMARY}
        handleClick={() => saveContent(websiteId, content)}
      />
    </StyledNav>
  );
}
