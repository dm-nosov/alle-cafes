import { cinzel } from "@/fonts";
import { ProductCategory } from "../ProductCategory";
import { CupRow } from "../CupRow";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";

const ProductCategoryRelative = styled(ProductCategory)`
  position: relative;
`;

export function ProductCategoryCardPreview({
  categoryName,
  children,
  windowY,
}) {
  const categoryRef = useRef(null);
  const [cupRowpositionY, setCupRowPositionY] = useState(0);

  useEffect(() => {
    let categoriesElement = categoryRef.current;
    const { top, height } = categoriesElement.getBoundingClientRect();
    console.log("height", height);
    console.log("top", top);
    if (top > 16 * 2 || top < -height + 16 * 7) {
      setCupRowPositionY(16 * 2);
    } else {
      setCupRowPositionY(16 * 4 - top);
    }
  }, [windowY]);

  console.log("cupRowpositionY", cupRowpositionY);

  return (
    <ProductCategoryRelative ref={categoryRef}>
      <h3 className={cinzel.className}>{categoryName}</h3>
      <CupRow cupRowpositionY={cupRowpositionY} />
      {children}
    </ProductCategoryRelative>
  );
}
