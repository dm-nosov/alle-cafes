import { useState } from "react";
import { Checkbox } from "../Checkbox";
import { FormErrorText } from "../FormErrorText";
import { Input } from "../Input";
import { CUP_EMPTY, CUP_LARGE, CUP_MEDIUM, CUP_SMALL } from "@/utils/cupSize";
import { PriceInput } from "../PriceInput";
import { Label } from "../Label";

export function PriceDiscountInput({
  initialPrice,
  initialDiscount,
  isDiscounted,
  errors,
  priceOption = null,
}) {
  const [showDiscount, setShowDiscount] = useState(isDiscounted);

  function showDiscountInput(isChecked) {
    setShowDiscount(isChecked);
  }

  function getErrorContainerByPriceOption(errors, priceOption, fieldName) {
    switch (priceOption) {
      case CUP_SMALL:
        return errors && `prices.0.${fieldName}` in errors
          ? errors[`prices.0.${fieldName}`]
          : null;
      case CUP_MEDIUM:
        return errors && `prices.1.${fieldName}` in errors
          ? errors[`prices.1.${fieldName}`]
          : null;
      case CUP_LARGE:
        return errors && `prices.2.${fieldName}` in errors
          ? errors[`prices.2.${fieldName}`]
          : null;
      case CUP_EMPTY:
        return errors && fieldName in errors ? errors[fieldName] : null;
    }
  }
  const namePostfix = priceOption ? `__${priceOption}` : "";

  return (
    <>
      <Label htmlFor={`price${namePostfix}`}>
        {!showDiscount ? "Price" : "Original price"}
      </Label>
      <PriceInput
        type="number"
        name={`price${namePostfix}`}
        id={`price${namePostfix}`}
        defaultValue={initialPrice}
        placeholder="Example: 0.99"
        $error={!!getErrorContainerByPriceOption(errors, priceOption, "price")}
      />
      <FormErrorText>
        {getErrorContainerByPriceOption(errors, priceOption, "price")?.message}
      </FormErrorText>
      <Checkbox
        checkboxName={`isDiscounted${namePostfix}`}
        labelText="Discount"
        description="Check to apply a discount"
        isInitChecked={isDiscounted}
        handleCheck={showDiscountInput}
      />
      {showDiscount && (
        <>
          <Label htmlFor={`discountPrice${namePostfix}`}>New price</Label>
          <PriceInput
            type="number"
            name={`discountPrice${namePostfix}`}
            id={`discountPrice${namePostfix}`}
            defaultValue={initialDiscount}
            placeholder="Example: 0.85"
            $error={
              !!getErrorContainerByPriceOption(
                errors,
                priceOption,
                "discountPrice"
              )
            }
          />
          <FormErrorText>
            {
              getErrorContainerByPriceOption(
                errors,
                priceOption,
                "discountPrice"
              )?.message
            }
          </FormErrorText>
        </>
      )}
    </>
  );
}
