import { cinzel } from "@/fonts";
import styled from "styled-components";
import { ProductCategory } from "../ProductCategory";

export function ProductCategoryCardPreview({ categoryName, children }) {
  return (
    <ProductCategory>
      <h3 className={cinzel.className}>{categoryName}</h3>
      {children}
    </ProductCategory>
  );
}
