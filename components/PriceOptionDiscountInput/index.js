import styled from "styled-components";

const StyledFieldSet = styled.fieldset`
  border: none;
  box-shadow: var(--element-shadow);
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  legend {
    background-color: white;
  }
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
