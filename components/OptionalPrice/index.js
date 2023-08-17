import { formatPrice } from "@/utils/productData";
import { Price } from "../Price";

export function OptionalPrice({ price }) {
  return price ? <Price>{formatPrice(price)}</Price> : <Price> — </Price>;
}
