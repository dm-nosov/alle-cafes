import styled, { css } from "styled-components";
import IconTrash from "../../public/img/icons/trash-fill.svg";
import IconEdit from "../../public/img/icons/pencil-square.svg";
import IconPreview from "../../public/img/icons/eye-fill.svg";
import { useState } from "react";
import { Spinner } from "../Spinner";
import {
  BUTTON_DANGER,
  BUTTON_ICON_EDIT,
  BUTTON_ICON_PREVIEW,
  BUTTON_ICON_TRASH,
  BUTTON_PRIMARY,
  BUTTON_SECONDARY,
} from "@/utils/button";

const IconWrapper = styled.span`
  margin-left: 0.5rem;
  opacity: ${({ $isDisabled }) => ($isDisabled ? 0.4 : 1)};
  border: none;
  box-shadow: var(--element-shadow);
  border-radius: 0.25rem;
  padding: 0 0.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  &:active {
    box-shadow: 0 0 0 0.3rem var(--secondary-outline),
      inset 0 0 0.2em 0.1rem rgba(255, 255, 255, 0.2);
  }
  background-color: white;
  svg {
    ${({ $variant }) =>
      $variant === BUTTON_SECONDARY &&
      css`
        fill: var(--editor-background);
      `}
    ${({ $variant }) =>
      $variant === BUTTON_PRIMARY &&
      css`
        fill: var(--primary);
      `}
    ${({ $variant }) =>
      $variant === BUTTON_DANGER &&
      css`
        fill: var(--danger);
      `}
  }

  ${({ $isActive }) =>
    $isActive &&
    css`
      svg {
        fill: var(--success);
      }
      box-shadow: var(--element-shadow--active);
    `}

  &:active {
    transform: scale(1.2);
  }
  }
`;

export function ButtonIcon({
  handleClick,
  iconName,
  isDisabled = false,
  isActive = false,
  variant = BUTTON_PRIMARY,
}) {
  const [loading, setLoading] = useState(false);
  async function onClick(event) {
    if (isDisabled) {
      return;
    }
    setLoading(true);
    if (handleClick) {
      await handleClick(event);
    }
    setLoading(false);
  }

  let icon;

  switch (iconName) {
    case BUTTON_ICON_TRASH:
      icon = <IconTrash />;
      break;
    case BUTTON_ICON_EDIT:
      icon = <IconEdit />;
      break;
    case BUTTON_ICON_PREVIEW:
      icon = <IconPreview />;
  }
  return (
    <IconWrapper
      role="button"
      onClick={onClick}
      $isDisabled={isDisabled}
      $variant={variant}
      $isActive={isActive}
    >
      {!loading && icon}
      {loading && <Spinner $dark={true} />}
    </IconWrapper>
  );
}
