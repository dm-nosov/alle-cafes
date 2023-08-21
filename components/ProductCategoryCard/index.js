import { useState } from "react";
import {
  ACTION_EDIT,
  ACTION_VIEW,
  ACTION_ADD,
  ACTION_PREVIEW,
  ACTION_SHOW_EMPTY,
} from "@/utils/websiteCard";
import { ProductCategoryCardView } from "../ProductCategoryCardView";
import { ProductCard } from "../ProductCard";
import { ProductCategoryCardNew } from "../ProductCategoryCardNew";
import { ProductCategoryCardEmpty } from "../ProductCategoryCardEmpty";
import { Skeleton } from "../Skeleton";

export function ProductCategoryCard({
  categoryName,
  categoryId,
  category,
  action,
  mutateCategories,
}) {
  const [cardAction, setCardAction] = useState(action);

  let cardView = null;

  switch (cardAction) {
    case ACTION_ADD:
      cardView = <ProductCategoryCardNew categoryId={categoryId} />;
      break;
    case ACTION_SHOW_EMPTY:
      cardView = <ProductCategoryCardEmpty />;
      break;
    case ACTION_PREVIEW:
      cardView = (
        <ProductCategoryCardView
          categoryName={categoryName}
          categoryId={categoryId}
          changeCardAction={setCardAction}
        >
          {category.products.map((product) => (
            <ProductCard
              product={product}
              action={ACTION_PREVIEW}
              key={product._id}
            />
          ))}
        </ProductCategoryCardView>
      );
      break;
    case ACTION_EDIT:
      cardView = (
        <ProductCategoryCardView
          categoryName={categoryName}
          categoryId={categoryId}
          changeCardAction={setCardAction}
        >
          {category.products.map((product) => (
            <ProductCard
              product={product}
              action={ACTION_VIEW}
              mutateCategories={mutateCategories}
              key={product._id}
            />
          ))}
        </ProductCategoryCardView>
      );
      break;
  }

  return <>{cardView}</>;
}
