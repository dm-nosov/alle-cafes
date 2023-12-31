import { Button } from "../Button";
import { StyledCard } from "../StyledCard/index";
import { ACTION_EDIT } from "@/utils/websiteCard";
import { BUTTON_PRIMARY } from "@/utils/button";

export function ProductCardNew({ changeCardAction, categoryName }) {
  return (
    <StyledCard>
      <p>
        Add a product to <em>{categoryName}</em>
      </p>
      <Button
        text="Add"
        actionType={BUTTON_PRIMARY}
        handleClick={() => changeCardAction(ACTION_EDIT)}
      />
    </StyledCard>
  );
}
