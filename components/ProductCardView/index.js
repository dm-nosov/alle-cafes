import styled from "styled-components";
import { Cup } from "../Cup";
import { ProductGroup } from "../ProductGroup";
import { PriceGroup } from "../PriceGroup";
import { ProductName } from "../ProductName";
import { ProductDescription } from "../ProductDescription";
import { PriceDiscountGroup } from "../PriceDiscountGroup";
import { OptionalPrice } from "../OptionalPrice";

const ProductGrid = styled.article`
  display: grid;
  grid-template-columns: 1fr repeat(3, 60px);
  margin-top: 1rem;
  min-height: 4.5rem;
  @media (max-width: 440px) {
    min-height: 6rem;
  }
`;

export function ProductCardView({ product }) {
  return (
    <ProductGrid>
      <ProductGroup>
        <ProductName>
          <span>{product.name}</span>
        </ProductName>
        <ProductDescription>{product.description}</ProductDescription>
      </ProductGroup>
      {product.isMultiPrice &&
        product.prices.map((price) => {
          let priceGroupContent = null;
          if (price.isDiscount) {
            priceGroupContent = (
              <>
                <Cup size={price.portionType} />
                <PriceDiscountGroup
                  price={price.price}
                  discountPrice={price.discountPrice}
                />
              </>
            );
          } else {
            priceGroupContent = (
              <>
                <Cup size={price.portionType} />
                <OptionalPrice price={price.price} />
              </>
            );
          }
          return <PriceGroup key={price.id}>{priceGroupContent}</PriceGroup>;
        })}
      {!product.isMultiPrice && product.isDiscount && (
        <PriceGroup>
          <Cup size={null} />
          <PriceDiscountGroup
            price={product.price}
            discountPrice={product.discountPrice}
          />
        </PriceGroup>
      )}
      {!product.isMultiPrice && !product.isDiscount && (
        <PriceGroup>
          <Cup size={null} />
          <OptionalPrice price={product.price} />
        </PriceGroup>
      )}
    </ProductGrid>
  );
}
