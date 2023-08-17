import styled from "styled-components";

const StyledFieldSet = styled.fieldset`
  border: 1px solid var(--editor-background);
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export function PriceOptionDiscountInput({ children, priceOption }) {
  return (
    <>
      <StyledFieldSet>
        <legend>
          Price Option <strong>&quot;{priceOption.toUpperCase()}&quot;</strong>
        </legend>
        {children}
      </StyledFieldSet>
    </>
  );
}
