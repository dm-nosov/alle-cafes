import { BUTTON_PRIMARY } from "@/utils/button";
import { Button } from "../Button";
import { StyledCard } from "../StyledCard/index";
import { ACTION_EDIT } from "@/utils/websiteCard";

export function ProductCardNew({ changeCardAction }) {
  return (
    <StyledCard>
      <p>Add a product to this category</p>
      <Button
        text="Add"
        actionType={BUTTON_PRIMARY}
        handleClick={() => changeCardAction(ACTION_EDIT)}
      />
    </StyledCard>
  );
}
