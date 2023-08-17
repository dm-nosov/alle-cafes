import { useState } from "react";
import { Checkbox } from "../Checkbox";
import { FormErrorText } from "../FormErrorText";
import { Input } from "../Input";

export function PriceDiscountInput({
  initialPrice,
  initialDiscount,
  isDiscount,
  errors,
  priceOption = null,
}) {
  const [showDiscount, setShowDiscount] = useState(isDiscount);

  function showDiscountInput(isChecked) {
    setShowDiscount(isChecked);
  }

  const errorSource = priceOption ? errors?.priceOption : errors;

  return (
    <>
      <label htmlFor={`price${priceOption}`}>Price</label>
      <Input
        type="number"
        name={`price__${priceOption}`}
        id={`price__${priceOption}`}
        defaultValue={initialPrice}
        $error={errorSource?.price ? true : false}
      />
      <FormErrorText>{errorSource?.price?.message}</FormErrorText>
      <Checkbox
        checkboxName={`isDiscount__${priceOption}`}
        labelText="Discount"
        description="Check if you want to apply a discount"
        isInitChecked={isDiscount}
        handleCheck={showDiscountInput}
      />
      {showDiscount && (
        <>
          <label htmlFor="discountPrice">Discount</label>
          <Input
            type="number"
            name={`discountPrice__${priceOption}`}
            id={`discountPrice__${priceOption}`}
            defaultValue={initialDiscount}
            $error={errorSource?.discountPrice ? true : false}
          />
          <FormErrorText>{errorSource?.discountPrice?.message}</FormErrorText>
        </>
      )}
    </>
  );
}
