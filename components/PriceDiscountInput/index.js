import { useState } from "react";
import { Checkbox } from "../Checkbox";
import { FormErrorText } from "../FormErrorText";
import { Input } from "../Input";

export function PriceDiscountInput({
  initialPrice,
  initialDiscount,
  isDiscount,
  errors,
}) {
  const [showDiscount, setShowDiscount] = useState(isDiscount);

  function showDiscountInput(isChecked) {
    setShowDiscount(isChecked);
  }

  return (
    <>
      <label htmlFor="price">Price</label>
      <Input
        type="number"
        name="price"
        id="price"
        defaultValue={initialPrice}
        $error={errors?.price ? true : false}
      />
      <FormErrorText>{errors?.price?.message}</FormErrorText>
      <Checkbox
        checkboxName="isDiscount"
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
            name="discountPrice"
            id="discountPrice"
            defaultValue={initialDiscount}
            $error={errors?.discountPrice ? true : false}
          />
          <FormErrorText>{errors?.price?.message}</FormErrorText>
        </>
      )}
    </>
  );
}
