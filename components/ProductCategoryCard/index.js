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
import { productTemplate } from "@/utils/productData";

export function ProductCategoryCard({
  categoryName,
  categoryId,
  category,
  action,
  mutateCategories,
  websiteId,
}) {
  const [cardAction, setCardAction] = useState(action);

  let cardView = null;

  switch (cardAction) {
    case ACTION_ADD:
      cardView = (
        <ProductCategoryCardNew
          websiteId={websiteId}
          mutateCategories={mutateCategories}
        />
      );
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
          <ProductCard
            product={productTemplate}
            action={ACTION_ADD}
            mutateCategories={mutateCategories}
          />
        </ProductCategoryCardView>
      );
      break;
  }

  return <>{cardView}</>;
}
