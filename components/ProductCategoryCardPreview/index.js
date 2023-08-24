import { headingFont } from "@/fonts";
import { ProductCategory } from "../ProductCategory";
import { CupRow } from "../CupRow";
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
}) {
  return (
    <ProductCategoryRelative>
      <CupRow categoryName={categoryName} isPublicPreview={isPublicPreview} />
      {children}
    </ProductCategoryRelative>
  );
}
