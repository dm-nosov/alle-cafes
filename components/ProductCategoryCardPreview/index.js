import { cinzel } from "@/fonts";
import { ProductCategory } from "../ProductCategory";
import { CupRow } from "../CupRow";
import styled from "styled-components";
import { useEffect, useRef, useState } from "react";
import { useWebsiteContentStore } from "@/store/WebsiteContent";

const ProductCategoryRelative = styled(ProductCategory)`
  position: relative;
  padding-top: 3rem;
`;

export function ProductCategoryCardPreview({ categoryName, children }) {
  const categoryRef = useRef(null);

  const windowY = useWebsiteContentStore((state) => state.windowY);

  const [cupRowpositionY, setCupRowPositionY] = useState(0);

  useEffect(() => {
    let categoriesElement = categoryRef.current;
    const { top, height } = categoriesElement.getBoundingClientRect();
    if (top > 56 || top < -height + 16 * 7) {
      setCupRowPositionY(0);
    } else {
      setCupRowPositionY(46 - top);
    }
  }, [windowY]);

  return (
    <ProductCategoryRelative ref={categoryRef}>
      <CupRow cupRowpositionY={cupRowpositionY} categoryName={categoryName} />
      {children}
    </ProductCategoryRelative>
  );
}
