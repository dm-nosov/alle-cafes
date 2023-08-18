import { useState } from "react";
import { Checkbox } from "../Checkbox";
import { FormErrorText } from "../FormErrorText";
import { Input } from "../Input";

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

  const errorSource = priceOption ? errors?.priceOption : errors;

  return (
    <>
      <label htmlFor={`price${priceOption}`}>Original price</label>
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
        isInitChecked={isDiscounted}
        handleCheck={showDiscountInput}
      />
      {showDiscount && (
        <>
          <label htmlFor="discountPrice">New price</label>
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
