import { useRef, useState, useEffect } from "react";
import { ACTION_ADD, ACTION_VIEW } from "@/utils/websiteCard";
import { BUTTON_PRIMARY } from "@/utils/button";
import { updateWebsiteSettings, createWebsite } from "@/api-facade/website";
import { ButtonGroup } from "../ButtonGroup";
import { FormErrorText } from "../FormErrorText/index";
import { Input } from "../Input";
import { StyledCardEdit } from "../StyledCardEdit";

export function WebsiteCardEdit({
  title,
  slug,
  changeCardAction,
  websiteId,
  mutate,
}) {
  const firstInputRef = useRef(null);
  const formRef = useRef(null);

  const [errors, setErrors] = useState(null);

  useEffect(() => {
    firstInputRef.current.focus();
  }, []);

  async function updateWebsiteData() {
    if (formRef.current.reportValidity()) {
      const data = Object.fromEntries(new FormData(formRef.current));
      let response;

      if (websiteId) {
        response = await updateWebsiteSettings(websiteId, data);
      } else {
        response = await createWebsite(data);
      }
      if ("errors" in response) {
        setErrors(response.errors);
      } else {
        if (websiteId) {
          changeCardAction(ACTION_VIEW);
        } else {
          changeCardAction(ACTION_ADD);
        }
        mutate();
      }
    }
  }

  const buttons = [
    {
      text: "Cancel",
      id: 1,
      handleClick: () => {
        websiteId
          ? changeCardAction(ACTION_VIEW)
          : changeCardAction(ACTION_ADD);
      },
    },
    {
      text: websiteId ? "Update" : "Create",
      id: 2,
      actionType: BUTTON_PRIMARY,
      handleClick: () => updateWebsiteData(),
    },
  ];

  return (
    <>
      <StyledCardEdit>
        <form ref={formRef}>
          <label htmlFor="title">Title</label>
          <Input
            type="text"
            name="title"
            id="title"
            defaultValue={title}
            ref={firstInputRef}
            $error={errors?.title ? true : false}
            required={true}
            minLength={3}
          />
          <FormErrorText>{errors?.title?.message}</FormErrorText>

          <label htmlFor="slug">Slug</label>
          <Input
            type="text"
            name="slug"
            id="slug"
            defaultValue={slug}
            $error={errors?.slug ? true : false}
            required={true}
            minLength={3}
          />
          <FormErrorText>{errors?.slug?.message}</FormErrorText>
          <ButtonGroup buttons={buttons} />
        </form>
      </StyledCardEdit>
    </>
  );
}
