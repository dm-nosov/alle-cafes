import {
  BUTTON_PRIMARY,
  BUTTON_SECONDARY,
  BUTTON_DANGER,
} from "@/utils/button";
import { useState } from "react";
import styled from "styled-components";
import { Spinner } from "../Spinner";

const StyledButton = styled.button`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $color }) => $color};
  border: 1px solid ${({ $borderColor }) => $borderColor};
  padding: 0.5em 1em;
  min-width: 6em;
  border-radius: 0.25em;

  &:active {
    box-shadow: 0 0 0 0.3rem var(--secondary-outline),
      inset 0 0 0.2em 0.1rem rgba(255, 255, 255, 0.2);
  }

  &:disabled {
    opacity: 0.6;
  }
`;

export function Button({
  text,
  handleClick,
  actionType = BUTTON_SECONDARY,
  isSubmit = false,
  groupState = false,
  groupLoading = 0,
  setGroupLoading = null,
  groupId = 0,
}) {
  const [loading, setLoading] = useState(false);

  let backgroundColor = "white";
  let color = "var(--primary)";
  let borderColor = "var(--primary)";

  switch (actionType) {
    case BUTTON_SECONDARY:
      break;
    case BUTTON_PRIMARY:
      backgroundColor = "var(--primary)";
      color = "var(--primary-color)";
      borderColor = "var(--primary)";
      break;
    case BUTTON_DANGER:
      backgroundColor = "var(--danger)";
      color = "var(--primary-color)";
      borderColor = "var(--danger)";
      break;
  }

  async function onClick(event) {
    if (!groupState) {
      setLoading(true);
      if (handleClick) {
        await handleClick(event);
      }
      setLoading(false);
    } else {
      setGroupLoading(groupId);
      if (handleClick) {
        await handleClick(event);
      }
      setGroupLoading(0);
    }
  }

  return (
    <>
      <StyledButton
        onClick={onClick}
        $backgroundColor={backgroundColor}
        $color={color}
        $borderColor={borderColor}
        type={isSubmit ? "submit" : "button"}
        disabled={!groupState ? loading : groupLoading > 0}
      >
        {(!groupState && loading) ||
        (groupState && groupLoading === groupId) ? (
          <Spinner $dark={actionType === BUTTON_SECONDARY} />
        ) : (
          text
        )}
      </StyledButton>
    </>
  );
}
