import { useState } from "react";
import styled from "styled-components";
import { PopupGeneral } from "../PopupGeneral";
import { ACTION_EDIT } from "@/utils/websiteCard";
import { PopupOption } from "../PopupOption";
import { ButtonGroup } from "../ButtonGroup";
import { BUTTON_DANGER } from "@/utils/button";
import { SizeCup } from "../SizeCup";

const ProductGrid = styled.article`
  display: grid;
  grid-template-columns: 1fr repeat(3, 60px);
  margin-top: 1rem;
`;

const ProductGroup = styled.div`
  display: flex;
  flex-direction: column;
  background-image: url(/img/icons/dot.svg);
  background-repeat-y: no-repeat;
  background-position-y: 0.4rem;
`;

const PriceGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductName = styled.p`
  font-size: 1.2rem;
  font-weight: 300;
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
      <PriceGroup>
        <SizeCup cupSize="s" />
        <Price>€3.50</Price>
      </PriceGroup>
      <PriceGroup>
        <SizeCup cupSize="m" />
        <PriceDiscountGroup>
          <NewPrice>€4.20</NewPrice>
          <OriginalPrice>€4.50</OriginalPrice>
          <DiscountAmount>-20%</DiscountAmount>
        </PriceDiscountGroup>
      </PriceGroup>
      <PriceGroup>
        <SizeCup cupSize="l" />
        <Price>€5.50</Price>
      </PriceGroup>
    </ProductGrid>
  );
}
