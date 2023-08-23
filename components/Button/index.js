import {
  BUTTON_PRIMARY,
  BUTTON_SECONDARY,
  BUTTON_DANGER,
  BUTTON_SUCCESS,
} from "@/utils/button";
import { useState } from "react";
import styled, { css } from "styled-components";
import { Spinner } from "../Spinner";

const StyledButton = styled.button`
  ${({ $variant }) => {
    switch ($variant) {
      case BUTTON_SECONDARY:
        return css`
          background-color: white;
          color: var(--primary);
          border: 1px solid var(--primary);
        `;
      case BUTTON_PRIMARY:
        return css`
          background-color: var(--primary);
          color: var(--primary-text);
          border: 1px solid var(--primary);
        `;
      case BUTTON_SUCCESS:
        return css`
          background-color: var(--success);
          color: var(--primary-text);
          border: 1px solid var(--success);
        `;
      case BUTTON_DANGER:
        return css`
          background-color: var(--danger);
          color: var(--primary-text);
          border: 1px solid var(--danger);
        `;
    }
  }}

  padding: 0.5rem 1rem;
  min-width: 6rem;
  border-radius: 0.25rem;

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
  isDisabled = false,
}) {
  const [loading, setLoading] = useState(false);

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
        type={isSubmit ? "submit" : "button"}
        disabled={!groupState ? loading || isDisabled : groupLoading > 0}
        $variant={actionType}
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
