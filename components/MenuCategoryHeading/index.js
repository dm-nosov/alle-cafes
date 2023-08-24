import styled from "styled-components";
import { Cup } from "../Cup";
import { CUP_SMALL } from "../../utils/cupSize";
import { CUP_MEDIUM } from "@/utils/cupSize";
import { CUP_LARGE } from "@/utils/cupSize";
import { headingFont } from "@/fonts";
import { ProductCategoryTitle } from "../ProductCategoryTitle";

const StyledCupRow = styled.aside`
  display: grid;
  grid-template-columns: 1fr repeat(3, 60px);
`;

const HeadingWrapper = styled.hgroup`
  position: sticky;
  top: ${({ $isPublicPreview }) => ($isPublicPreview ? "0" : "3.1rem")};
  right: 0;
  z-index: 1;
  width: 100%;
  background-color: white;
  padding: 1rem 0 0 0;
`;

export function MenuCategoryHeading({ categoryName, isPublicPreview = false }) {
  console.log("isPublicPreview", isPublicPreview);
  return (
    <HeadingWrapper $isPublicPreview={isPublicPreview}>
      <ProductCategoryTitle className={headingFont.className}>
        {categoryName}
      </ProductCategoryTitle>
      <StyledCupRow>
        <div></div>
        {[CUP_SMALL, CUP_MEDIUM, CUP_LARGE].map((cupSize) => (
          <Cup size={cupSize} key={cupSize} />
        ))}
      </StyledCupRow>
    </HeadingWrapper>
  );
}
