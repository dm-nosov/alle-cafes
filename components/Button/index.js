import { BUTTON_PRIMARY, BUTTON_SECONDARY } from "@/utils/button";
import { useState } from "react";
import styled from "styled-components";
import { Spinner } from "../Spinner";

const StyledButton = styled.button`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $color }) => $color};
  border: 2px solid ${({ $borderColor }) => $borderColor};
  padding: 0.5em 1em;
  min-width: 6em;

  &:active {
    box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2),
      0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
    opacity: 0.6;
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

  let backgroundColor = "var(--secondary)";
  let color = "black";
  let borderColor = "var(--secondary-outline)";

  switch (actionType) {
    case BUTTON_SECONDARY:
      break;
    case BUTTON_PRIMARY:
      backgroundColor = "var(--primary)";
      color = "var(--primary-color)";
      borderColor = "var(--primary)";
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
