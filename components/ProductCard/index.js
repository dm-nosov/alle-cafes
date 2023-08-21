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
import { ProductCardNew } from "../ProductCardNew";

export function ProductCard({ product, action, mutateCategories }) {
  const [cardAction, setCardAction] = useState(action);

  let cardView;

  switch (cardAction) {
    case ACTION_ADD:
      cardView = <ProductCardNew changeCardAction={setCardAction} />;
      break;
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
        <ProductCardEdit
          product={product}
          changeCardAction={setCardAction}
          mutateCategories={mutateCategories}
        />
      );
      break;
  }

  return <>{cardView}</>;
}
