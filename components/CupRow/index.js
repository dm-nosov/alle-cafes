import styled from "styled-components";
import { Cup } from "../Cup";
import { CUP_SMALL } from "../../utils/cupSize";
import { CUP_MEDIUM } from "@/utils/cupSize";
import { CUP_LARGE } from "@/utils/cupSize";
import { cinzel } from "@/fonts";

const StyledCupRow = styled.aside`
  display: grid;
  grid-template-columns: 1fr repeat(3, 60px);
`;

const HeadingWrapper = styled.hgroup`
  position: absolute;
  top: ${({ $positionY }) => $positionY}px;
  right: 0;
  z-index: 1;
  background-color: white;
  width: 100%;
  padding: 2rem 0 0 0;
  margin-top: -1.5rem;
`;

export function CupRow({ cupRowpositionY, categoryName }) {
  return (
    <HeadingWrapper $positionY={cupRowpositionY}>
      <h3 className={cinzel.className}>{categoryName}</h3>
      <StyledCupRow>
        <div></div>
        {[CUP_SMALL, CUP_MEDIUM, CUP_LARGE].map((cupSize) => (
          <Cup size={cupSize} key={cupSize} />
        ))}
      </StyledCupRow>
    </HeadingWrapper>
  );
}
