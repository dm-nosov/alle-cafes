import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import { StyledCard } from "../StyledCard/index";
import { PopupGeneral } from "../PopupGeneral";
import { ACTION_EDIT } from "@/utils/websiteCard";

const StyledCardView = styled(StyledCard)`
  img:active {
    background-color: #d0d0d09f;
    border-radius: 12px;
    transition: background-color 1.5s ease;
    transform: scale(1.2);
  }

  small {
    color: var(--editor-background);
  }
`;

export function WebsiteCardView({ title, slug, changeCardAction }) {
  const [showActionsPopup, setShowActionsPopup] = useState(false);
  const [showRemovePopup, setShowRemovePopup] = useState(false);

  function closePopup() {
    setShowActionsPopup(false);
    setShowRemovePopup(false);
  }

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
        <small>/{slug}</small>
        <Link href="/admin/123/edit">
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
          <p onClick={() => changeCardAction(ACTION_EDIT)}>Edit</p>
          <p
            onClick={() => {
              closePopup();
              setShowRemovePopup(true);
            }}
          >
            Remove
          </p>
        </PopupGeneral>
      )}
      {showRemovePopup && (
        <PopupGeneral handleClosePopup={closePopup}>
          <p>
            Are you sure you want to remove <strong>{title}</strong> website?
          </p>
          <menu>
            <li>
              <button
                onClick={() => {
                  closePopup();
                }}
              >
                Cancel
              </button>
            </li>
            <li>
              <button
                onClick={() => {
                  console.log("Remove click");
                  closePopup();
                }}
              >
                Yes
              </button>
            </li>
          </menu>
        </PopupGeneral>
      )}
    </>
  );
}
