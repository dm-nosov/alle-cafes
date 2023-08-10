import { BUTTON_PRIMARY, BUTTON_SECONDARY } from "@/utils/button";
import { useState } from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  color: ${({ $color }) => $color};
  border: 2px solid ${({ $borderColor }) => $borderColor};
  padding: 0.5em 1em;
  progress {
    max-width: 40px;
  }
`;

export function Button({
  text,
  handleClick,
  actionType = BUTTON_SECONDARY,
  isSubmit = false,
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
    setLoading(true);
    if (handleClick) {
      await handleClick(event);
    }
    setLoading(false);
  }

  return (
    <>
      <StyledButton
        onClick={onClick}
        $backgroundColor={backgroundColor}
        $color={color}
        $borderColor={borderColor}
        type={isSubmit ? "submit" : "button"}
      >
        {loading ? (
          <progress aria-label="Operation in progress…"></progress>
        ) : (
          text
        )}
      </StyledButton>
    </>
  );
}
