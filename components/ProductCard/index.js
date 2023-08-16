import { useState } from "react";
import { ACTION_EDIT, ACTION_VIEW, ACTION_ADD } from "@/utils/websiteCard";
import { ProductCardView } from "../ProductCardView";

export function ProductCard({ product, action }) {
  const [cardAction, setCardAction] = useState(action);

  let cardView = null;

  switch (cardAction) {
    case ACTION_VIEW:
      cardView = <ProductCardView product={product} />;
      break;
  }

  return <>{cardView}</>;
}
