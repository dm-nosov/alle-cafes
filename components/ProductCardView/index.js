import { useState } from "react";
import styled from "styled-components";
import { PopupGeneral } from "../PopupGeneral";
import { ACTION_EDIT } from "@/utils/websiteCard";
import { PopupOption } from "../PopupOption";
import { ButtonGroup } from "../ButtonGroup";
import { BUTTON_DANGER } from "@/utils/button";
import { Cup } from "../Cup";
import { formatPrice } from "@/utils/productData";

const ProductGrid = styled.article`
  display: grid;
  grid-template-columns: 1fr repeat(3, 60px);
  margin-top: 1rem;
  min-height: 4.5rem;
  @media (max-width: 440px) {
    min-height: 6rem;
  }
`;

const ProductGroup = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(/img/icons/dot.svg);
  background-repeat-y: no-repeat;
  background-position-y: 0.4rem;
  margin-top: 1.6rem;
`;

const PriceGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
  padding: 0;
  margin: 0;
  span {
    background-color: white;
  }
`;

const ProductDescription = styled.p`
  font-size: 0.8rem;
  color: var(--editor-background);
  padding: 0;
  margin: 0;
`;

const Price = styled.p`
  font-size: 0.9rem;
  padding: 0;
  margin: 0;
  align-self: center;
  line-height: 1.2rem;
`;

const OriginalPrice = styled(Price)`
  text-decoration: line-through;
  color: var(--editor-background);
  line-height: 0.9rem;
  font-size: 0.7rem;
`;

const NewPrice = styled(Price)`
  font-weight: 600;
`;

const DiscountAmount = styled(Price)`
  font-weight: 600;
  color: green;
  line-height: 0.8rem;
`;
const PriceDiscountGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
                <PriceDiscountGroup>
                  <NewPrice>{formatPrice(price.discountPrice)}</NewPrice>
                  <OriginalPrice>{formatPrice(price.price)}</OriginalPrice>
                  <DiscountAmount>
                    {Math.ceil(
                      ((price.discountPrice - price.price) * 100) / price.price
                    )}
                    %
                  </DiscountAmount>
                </PriceDiscountGroup>
              </>
            );
          } else {
            priceGroupContent = (
              <>
                <Cup size={price.portionType} />
                {price.price && <Price>{formatPrice(price.price)}</Price>}
                {!price.price && <Price> — </Price>}
              </>
            );
          }
          return <PriceGroup key={price.id}>{priceGroupContent}</PriceGroup>;
        })}
    </ProductGrid>
  );
}
