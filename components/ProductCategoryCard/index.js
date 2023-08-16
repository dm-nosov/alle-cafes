import { useState } from "react";
import { ACTION_EDIT, ACTION_VIEW, ACTION_ADD } from "@/utils/websiteCard";
import { ProductCategoryCardView } from "../ProductCategoryCardView";
import { ProductCard } from "../ProductCard";

export function ProductCategoryCard({
  categoryName,
  categoryId,
  action,
  products,
}) {
  const [cardAction, setCardAction] = useState(action);

  let cardView = null;

  switch (cardAction) {
    case ACTION_VIEW:
      cardView = (
        <ProductCategoryCardView
          categoryName={categoryName}
          categoryId={categoryId}
          changeCardAction={setCardAction}
        >
          {products.map((product) => (
            <ProductCard
              product={product}
              action={ACTION_VIEW}
              key={product.id}
            />
          ))}
        </ProductCategoryCardView>
      );
      break;
  }

  return <>{cardView}</>;
}
