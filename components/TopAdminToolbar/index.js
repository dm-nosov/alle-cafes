import { saveContent } from "@/api-facade/editor-content";
import { useWebsiteContentStore } from "@/store/WebsiteContent";
import styled from "styled-components";
import { Button } from "../Button";
import {
  BUTTON_ICON_EDIT,
  BUTTON_ICON_PREVIEW,
  BUTTON_PRIMARY,
  BUTTON_SUCCESS,
} from "@/utils/button";
import { ButtonIcon } from "../ButtonIcon";
import { useRouter } from "next/router";

const StyledNav = styled.nav`
  background-color: var(--secondary);
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & button {
    margin: 0 1rem;
  }
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 3;
`;

export function TopAdminToolbar({ websiteId, mutateEditor }) {
  const preview = useWebsiteContentStore((state) => state.isPreview);
  const togglePreview = useWebsiteContentStore((state) => state.togglePreview);
  const content = useWebsiteContentStore((state) => state.content);
  const router = useRouter();

  return (
    <StyledNav>
      <Button
        text="Back"
        handleClick={() => {
          router.push("/admin");
        }}
      />
      <ButtonIcon
        iconName={BUTTON_ICON_PREVIEW}
        handleClick={togglePreview}
        isDisabled={preview}
      />
      <ButtonIcon
        iconName={BUTTON_ICON_EDIT}
        handleClick={togglePreview}
        isDisabled={!preview}
      />
      <Button
        text="Save"
        actionType={BUTTON_SUCCESS}
        handleClick={() => {
          saveContent(websiteId, content);
          mutateEditor();
        }}
      />
    </StyledNav>
  );
}
