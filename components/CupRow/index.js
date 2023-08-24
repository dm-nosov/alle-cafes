import styled from "styled-components";
import { Cup } from "../Cup";
import { CUP_SMALL } from "../../utils/cupSize";
import { CUP_MEDIUM } from "@/utils/cupSize";
import { CUP_LARGE } from "@/utils/cupSize";

const StyledCupRow = styled.aside`
  display: grid;
  grid-template-columns: 1fr repeat(3, 60px);
  position: absolute;
  top: ${({ $positionY }) => $positionY}px;
  right: 0;
  transition: top 0.5s ease-in-out;
`;
export function CupRow({ cupRowpositionY }) {
  return (
    <StyledCupRow $positionY={cupRowpositionY}>
      <div></div>
      {[CUP_SMALL, CUP_MEDIUM, CUP_LARGE].map((cupSize) => (
        <Cup size={cupSize} key={cupSize} />
      ))}
    </StyledCupRow>
  );
}
