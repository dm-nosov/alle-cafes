import { cinzel } from "@/fonts";
import { ProductCategoryTitle } from "../ProductCategoryTitle";
import { ProductCategoryAdd } from "../ProductCategoryAdd";

export function ProductCategoryCardEmpty() {
  return (
    <ProductCategoryAdd>
      <ProductCategoryTitle className={cinzel.className}>
        Ask a webmaster to add menu items
      </ProductCategoryTitle>
    </ProductCategoryAdd>
  );
}
