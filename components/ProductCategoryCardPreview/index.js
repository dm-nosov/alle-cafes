import { ProductCategory } from "../ProductCategory";
import { MenuCategoryHeading } from "../MenuCategoryHeading";
import styled from "styled-components";

const ProductCategoryRelative = styled(ProductCategory)`
  position: relative;
`;

export function ProductCategoryCardPreview({
  categoryName,
  children,
  isPublicPreview,
  isMultiPrice,
}) {
  return (
    <ProductCategoryRelative>
      <MenuCategoryHeading
        categoryName={categoryName}
        isPublicPreview={isPublicPreview}
        isMultiPrice={isMultiPrice}
      />
      {children}
    </ProductCategoryRelative>
  );
}
