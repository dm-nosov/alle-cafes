import styled from "styled-components";
import { Cup } from "../Cup";
import { ProductGroup } from "../ProductGroup";
import { PriceGroup } from "../PriceGroup";
import { ProductName } from "../ProductName";
import { ProductDescription } from "../ProductDescription";
import { PriceDiscountGroup } from "../PriceDiscountGroup";
import { OptionalPrice } from "../OptionalPrice";
import { CUP_EMPTY } from "@/utils/cupSize";

const ProductGrid = styled.article`
  display: grid;
  grid-template-columns: 1fr repeat(
      ${({ $isMultiPrice }) => ($isMultiPrice ? "3" : "1")},
      60px
    );
  margin-top: 1rem;
  min-height: 6rem;
  @media (min-width: 440px) {
    min-height: 4.5rem;
  }
`;

export function ProductCardPreview({ product }) {
  return (
    <ProductGrid $isMultiPrice={product.isMultiPrice}>
      <ProductGroup>
        <ProductName>
          <span>{product.name}</span>
        </ProductName>
        {product.description && (
          <ProductDescription>{product.description}</ProductDescription>
        )}
      </ProductGroup>
      {product.isMultiPrice &&
        product.prices.map((price) => {
          let priceGroupContent = null;
          if (price.isDiscounted) {
            priceGroupContent = (
              <>
                <PriceDiscountGroup
                  price={price.price}
                  discountPrice={price.discountPrice}
                />
              </>
            );
          } else {
            priceGroupContent = (
              <>
                <OptionalPrice price={price.price} />
              </>
            );
          }
          return <PriceGroup key={price._id}>{priceGroupContent}</PriceGroup>;
        })}
      {!product.isMultiPrice && product.isDiscounted && (
        <PriceGroup>
          <PriceDiscountGroup
            price={product.price}
            discountPrice={product.discountPrice}
          />
        </PriceGroup>
      )}
      {!product.isMultiPrice && !product.isDiscounted && (
        <PriceGroup>
          <OptionalPrice price={product.price} />
        </PriceGroup>
      )}
    </ProductGrid>
  );
}
