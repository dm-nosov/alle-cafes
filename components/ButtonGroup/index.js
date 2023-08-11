import { BUTTON_SECONDARY } from "@/utils/button";
import { Button } from "../Button";
import { useState } from "react";
import styled from "styled-components";

const StyledMenu = styled.menu`
  list-style-type: none;
  display: flex;
  gap: 2em;
  justify-content: end;
`;

export function ButtonGroup({ buttons }) {
  const [groupLoading, setGroupLoading] = useState(0);
  return (
    <StyledMenu>
      {buttons.map((button) => (
        <li key={button.id}>
          <Button
            text={button.text}
            handleClick={button.handleClick}
            actionType={button.actionType ?? BUTTON_SECONDARY}
            isSubmit={button.isSubmit ?? false}
            groupState={true}
            groupLoading={groupLoading}
            setGroupLoading={setGroupLoading}
            groupId={button.id}
          />
        </li>
      ))}
    </StyledMenu>
  );
}
