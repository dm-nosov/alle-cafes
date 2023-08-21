import styled from "styled-components";
import { Input } from "../Input";
const InputWrapper = styled.div`
  display: flex;
  gap: 0.25rem;
`;

export function PriceInput(params) {
  return (
    <InputWrapper>
      <span role="complementary">€</span>
      <Input {...params} />
    </InputWrapper>
  );
}
