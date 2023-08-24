import { headingFont } from "@/fonts";
import { ProductCategory } from "../ProductCategory";
import { MenuCategoryHeading } from "../MenuCategoryHeading";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useWebsiteContentStore } from "@/store/WebsiteContent";

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
