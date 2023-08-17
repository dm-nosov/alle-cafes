import styled from "styled-components";
import { Price } from "../Price";
export const OriginalPrice = styled(Price)`
  text-decoration: line-through;
  color: var(--editor-background);
  line-height: 0.9rem;
  font-size: 0.7rem;
`;
