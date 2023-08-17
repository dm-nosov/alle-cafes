import styled from "styled-components";
import { NewPrice } from "../NewPrice";
import { OriginalPrice } from "../OriginalPrice";
import { DiscountAmount } from "../DiscountAmount";
import { formatPrice } from "@/utils/productData";
export const StyledPriceDiscountGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export function PriceDiscountGroup({ price, discountPrice }) {
  return (
    <StyledPriceDiscountGroup>
      <NewPrice>{formatPrice(discountPrice)}</NewPrice>
      <OriginalPrice>{formatPrice(price)}</OriginalPrice>
      <DiscountAmount>
        {Math.ceil(((discountPrice - price) * 100) / price)}%
      </DiscountAmount>
    </StyledPriceDiscountGroup>
  );
}
