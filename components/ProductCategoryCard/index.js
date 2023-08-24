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
import { productTemplate } from "@/utils/productData";
import { ProductCategoryCardPreview } from "../ProductCategoryCardPreview";

export function ProductCategoryCard({
  category,
  action,
  mutateCategories,
  websiteId,
  isPublicPreview,
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
        <ProductCategoryCardPreview
          categoryName={category.name}
          isPublicPreview={isPublicPreview}
        >
          {category.products.map((product) => (
            <ProductCard
              product={product}
              action={ACTION_PREVIEW}
              categoryId={category._id}
              categoryName={category.name}
              key={product._id}
            />
          ))}
        </ProductCategoryCardPreview>
      );
      break;
    case ACTION_EDIT:
      cardView = (
        <ProductCategoryCardView
          categoryName={category.name}
          mutateCategories={mutateCategories}
          websiteId={websiteId}
          categoryId={category._id}
        >
          {category.products.map((product) => (
            <ProductCard
              product={product}
              action={ACTION_VIEW}
              categoryId={category._id}
              mutateCategories={mutateCategories}
              key={product._id}
            />
          ))}
          <ProductCard
            product={productTemplate}
            action={ACTION_ADD}
            categoryId={category._id}
            categoryName={category.name}
            mutateCategories={mutateCategories}
          />
        </ProductCategoryCardView>
      );
      break;
  }

  return <>{cardView}</>;
}
