import { useRef, useState, useEffect } from "react";
import { StyledCard } from "../StyledCard/index";
import styled from "styled-components";
import { ACTION_VIEW } from "@/utils/websiteCard";
import { Button } from "../Button";
import { BUTTON_PRIMARY, BUTTON_SECONDARY } from "@/utils/button";
import { updateWebsiteSettings } from "@/api-facade/website";

const StyledCardEdit = styled(StyledCard)`
  form {
    display: flex;
    flex-direction: column;
  }
  menu {
    list-style-type: none;
    display: flex;
    gap: 2em;
    justify-content: end;
  }
  input[type="text"] {
    border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid var(--editor-background);
    font-size: 1em;
    margin-bottom: 0.5em;
  }
  input[type="text"]:focus-visible {
    outline: none;
  }
  label {
    font-size: x-small;
    margin-bottom: 0.5em;
    margin-left: 2px;
  }
`;

export function WebsiteCardEdit({
  title,
  slug,
  changeCardAction,
  websiteId,
  mutate,
}) {
  const firstInputRef = useRef(null);
  const formRef = useRef(null);

  useEffect(() => {
    firstInputRef.current.focus();
  }, []);

  async function updateWebsiteData() {
    const data = Object.fromEntries(new FormData(formRef.current));
    await updateWebsiteSettings(websiteId, data);
    changeCardAction(ACTION_VIEW);
    mutate();
  }

  return (
    <>
      <StyledCardEdit>
        <form ref={formRef}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            defaultValue={title}
            ref={firstInputRef}
          />
          <label htmlFor="slug">Slug</label>
          <input type="text" name="slug" id="slug" defaultValue={slug} />
          <menu>
            <li>
              <Button
                text="Cancel"
                actionType={BUTTON_SECONDARY}
                handleClick={() => changeCardAction(ACTION_VIEW)}
              />
            </li>
            <li>
              <Button
                text="Update"
                actionType={BUTTON_PRIMARY}
                handleClick={() => updateWebsiteData()}
              />
            </li>
          </menu>
        </form>
      </StyledCardEdit>
    </>
  );
}
