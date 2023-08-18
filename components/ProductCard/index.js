import { useState } from "react";
import {
  ACTION_EDIT,
  ACTION_VIEW,
  ACTION_ADD,
  ACTION_PREVIEW,
} from "@/utils/websiteCard";
import { ProductCardPreview } from "../ProductCardPreview";
import { ProductCardView } from "../ProductCardView";
import { ProductCardEdit } from "../ProductCardEdit";

export function ProductCard({ product, action }) {
  const [cardAction, setCardAction] = useState(action);

  let cardView;

  switch (cardAction) {
    case ACTION_PREVIEW:
      cardView = <ProductCardPreview product={product} />;
      break;
    case ACTION_VIEW:
      cardView = (
        <ProductCardView product={product} changeCardAction={setCardAction} />
      );
      break;
    case ACTION_EDIT:
      cardView = (
        <ProductCardEdit product={product} changeCardAction={setCardAction} />
      );
      break;
  }

  return <>{cardView}</>;
}
