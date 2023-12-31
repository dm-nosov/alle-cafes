import { useState } from "react";
import styled, { css } from "styled-components";
import { Label } from "../Label";

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const CheckboxDescription = styled.small`
  font-size: small;
  color: var(--editor-background);
`;

const StyledCheckbox = styled.div`
  display: block;
  background: ${({ $isChecked }) =>
    $isChecked ? "var(--primary)" : "var(--editor-background)"};
  border-radius: 16px;
  width: 58px;
  height: 12px;
  margin-block: 10px;
  position: relative;
  transition: background 0.25s;
  &:before,
  &:after {
    content: "";
  }
  &:before {
    display: block;
    background: linear-gradient(to bottom, #fff 0%, #eee 100%);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    width: 24px;
    height: 24px;
    position: absolute;
    top: -5px;
    left: -5px;
  }
   ${({ $isChecked }) =>
     $isChecked
       ? css`
           &:before {
             left: 36px;
             content: url(/img/icons/check.svg);
             border: 3px solid var(--primary);
             box-shadow: none;
             padding-left: 1px;
             padding-top: 1px;
           }
           input {
             left: 28px;
           }
         `
       : null}
  }

  input[type="checkbox"] {
    position: absolute;
    visibility: hidden;
    height: 24px;
    width: 24px;
    left: 0px;
  }
`;
export function Checkbox({
  checkboxName,
  labelText,
  description,
  isInitChecked,
  handleCheck,
}) {
  const [isChecked, setIsChecked] = useState(isInitChecked);
  return (
    <StyledWrapper
      onClick={async () => {
        const updatedCheckValue = !isChecked;
        setIsChecked(updatedCheckValue);
        if (handleCheck) {
          handleCheck(updatedCheckValue);
        }
      }}
    >
      <Label htmlFor={checkboxName}>{labelText}</Label>
      <CheckboxDescription>{description}</CheckboxDescription>
      <StyledCheckbox $isChecked={isChecked}>
        <input
          id={checkboxName}
          name={checkboxName}
          type="checkbox"
          checked
          onChange={() => {}}
          value={isChecked}
        />
      </StyledCheckbox>
    </StyledWrapper>
  );
}
