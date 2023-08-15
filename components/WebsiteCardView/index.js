import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { StyledCard } from "../StyledCard/index";
import { PopupGeneral } from "../PopupGeneral";
import { ACTION_EDIT } from "@/utils/websiteCard";
import { PopupOption } from "../PopupOption";
import { ButtonGroup } from "../ButtonGroup";
import { BUTTON_DANGER } from "@/utils/button";
import { removeWebsite } from "@/api-facade/website";

const StyledCardView = styled(StyledCard)`
  img:active {
    background-color: #d0d0d09f;
    border-radius: 12px;
    transition: background-color 1.5s ease;
    transform: scale(1.2);
  }
`;

const PublicLink = styled(Link)`
  &,
  &:visited {
    color: var(--editor-background);
  }
`;

export function WebsiteCardView({
  title,
  slug,
  changeCardAction,
  websiteId,
  mutate,
}) {
  const [showActionsPopup, setShowActionsPopup] = useState(false);
  const [showRemovePopup, setShowRemovePopup] = useState(false);

  function closePopup() {
    setShowActionsPopup(false);
    setShowRemovePopup(false);
  }

  const removePopupButtons = [
    {
      text: "Cancel",
      id: 1,
      handleClick: () => {
        closePopup();
      },
    },
    {
      text: "Remove",
      id: 2,
      actionType: BUTTON_DANGER,
      handleClick: async () => {
        await removeWebsite(websiteId);
        mutate();
        closePopup();
      },
    },
  ];

  return (
    <>
      <StyledCardView>
        <Image
          src="/img/icons/three-dots-vertical.svg"
          alt=""
          width={24}
          height={24}
          style={{
            position: "absolute",
            right: "12px",
          }}
          onClick={() => setShowActionsPopup(true)}
        />
        <p>{title}</p>

        <PublicLink href={`/public/${slug}`} target="_blank">
          /{slug}
        </PublicLink>

        <Link href={`/admin/${websiteId}/edit`}>
          <Image
            src="/img/icons/pencil-square.svg"
            alt=""
            width={24}
            height={24}
            style={{
              position: "absolute",
              bottom: "12px",
              right: "12px",
            }}
          />
        </Link>
      </StyledCardView>
      {showActionsPopup && (
        <PopupGeneral handleClosePopup={closePopup}>
          <PopupOption handleClick={() => changeCardAction(ACTION_EDIT)}>
            Edit settings
          </PopupOption>
          <PopupOption
            danger
            handleClick={() => {
              closePopup();
              setShowRemovePopup(true);
            }}
          >
            Remove
          </PopupOption>
        </PopupGeneral>
      )}
      {showRemovePopup && (
        <PopupGeneral handleClosePopup={closePopup}>
          <p>
            Are you sure you want to remove <strong>{title}</strong> website?
          </p>
          <ButtonGroup buttons={removePopupButtons} />
        </PopupGeneral>
      )}
    </>
  );
}
