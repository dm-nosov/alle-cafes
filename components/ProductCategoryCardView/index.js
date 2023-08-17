import { cinzel } from "@/fonts";
import styled from "styled-components";
const ProductCategory = styled.section`
  margin: 1rem;
  h3 {
    text-align: center;
    font-size: 22px;
    font-weight: 300;
    padding: 0;
    margin: 0;
  }
`;

export function ProductCategoryCardView({
  categoryName,
  categoryId,
  changeCardAction,
  children,
}) {
  return (
    <ProductCategory>
      <h3 className={cinzel.className}>{categoryName}</h3>
      {children}
    </ProductCategory>
  );
}
