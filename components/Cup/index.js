import { CUP_EMPTY, CUP_LARGE, CUP_MEDIUM, CUP_SMALL } from "@/utils/cupSize";
import styled, { css } from "styled-components";

const CupWrapper = styled.div`
  height: 1.5rem;
  width: 100%;
  display: flex;
  align-items: end;
  align-self: center;
  margin-bottom: 0.2rem;
  justify-content: center;
`;

const CupDiv = styled.div`
  font-variant: small-caps;
  display: flex;
  align-items: end;

  position: relative;
  justify-content: end;
  p {
    margin-top: 0;
    margin-bottom: 0;
    line-height: 0.6rem;
    font-size: 0.8rem;
    font-weight: 700;
    position: absolute;
    color: white;
    left: 50%;
    top: 50%;
    transform: translate(-70%,-50%);
  }
    ${({ $size }) => {
      switch ($size) {
        case CUP_EMPTY:
          return css`
            height: 0.8rem;
            width: 1rem;
            svg {
              height: 1rem;
              width: 1rem;
              display: none;
            }
          `;
        case CUP_SMALL:
          return css`
            height: 0.8rem;
            width: 1rem;
            svg {
              height: 1rem;
              width: 1rem;
              fill: var(--primary);
            }
          `;
        case CUP_MEDIUM:
          return css`
            height: 1.2rem;
            width: 1.5rem;
            svg {
              height: 1.5rem;
              width: 1.5rem;
              fill: var(--primary);
            }
          `;
        case CUP_LARGE:
          return css`
            height: 1.5rem;
            width: 2rem;
            svg {
              height: 2rem;
              width: 2rem;
              fill: var(--primary);
            }
          `;
      }
    }}
  }
`;

export function Cup({ size }) {
  return (
    <CupWrapper>
      <CupDiv $size={size}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="10"
          fill="currentColor"
          viewBox="0 0 16 10"
        >
          <path d="M.11 3.187A.5.5 0 0 1 .5 3h13a.5.5 0 0 1 .488.608l-.22.991a3.001 3.001 0 0 1-1.3 5.854l-.132.59A2.5 2.5 0 0 1 9.896 13H4.104a2.5 2.5 0 0 1-2.44-1.958L.012 3.608a.5.5 0 0 1 .098-.42Zm12.574 6.288a2 2 0 0 0 .866-3.899l-.866 3.9Z" />
        </svg>
        <p>{size}</p>
      </CupDiv>
    </CupWrapper>
  );
}
