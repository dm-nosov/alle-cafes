import { useRef, useState, useEffect } from "react";
import { ACTION_VIEW } from "@/utils/websiteCard";
import { BUTTON_PRIMARY } from "@/utils/button";
import { ButtonGroup } from "../ButtonGroup";
import { FormErrorText } from "../FormErrorText/index";
import { Input } from "../Input";
import { StyledCardEdit } from "../StyledCardEdit";
import { Checkbox } from "../Checkbox";
import { PriceDiscountInput } from "../PriceDiscountInput";
import { PriceOptionDiscountInput } from "../PriceOptionDiscountInput";

export function ProductCardEdit({ product, changeCardAction }) {
  const firstInputRef = useRef(null);
  const formRef = useRef(null);

  const [errors, setErrors] = useState(null);

  useEffect(() => {
    firstInputRef.current.focus();
  }, []);

  const buttons = [
    {
      text: "Cancel",
      id: 1,
      handleClick: () => {
        changeCardAction(ACTION_VIEW);
      },
    },
    {
      text: "Update",
      id: 2,
      actionType: BUTTON_PRIMARY,
      handleClick: () => {},
    },
  ];

  return (
    <>
      <StyledCardEdit>
        <form ref={formRef}>
          <label htmlFor="name">Name</label>
          <Input
            type="text"
            name="name"
            id="name"
            defaultValue={product.name}
            ref={firstInputRef}
            $error={errors?.name ? true : false}
            required={true}
            minLength={3}
          />
          <FormErrorText>{errors?.name?.message}</FormErrorText>

          <label htmlFor="description">Description</label>
          <Input
            type="text"
            name="description"
            id="description"
            defaultValue={product.description}
            $error={errors?.description ? true : false}
            required={true}
            minLength={3}
          />
          <FormErrorText>{errors?.description?.message}</FormErrorText>
          <Checkbox
            checkboxName="isMultiProduct"
            labelText="Multi-price"
            description="Specify if you want to use S, M, L prices for this product"
          />
          <PriceOptionDiscountInput priceOption="M">
            <PriceDiscountInput
              initialPrice={product.price}
              initialDiscount={product.discountPrice}
              isDiscount={product.isDiscount}
              errors={errors}
            />
          </PriceOptionDiscountInput>

          <PriceOptionDiscountInput priceOption="L">
            <PriceDiscountInput
              initialPrice={product.price}
              initialDiscount={product.discountPrice}
              isDiscount={product.isDiscount}
              errors={errors}
            />
          </PriceOptionDiscountInput>

          <ButtonGroup buttons={buttons} />
        </form>
      </StyledCardEdit>
    </>
  );
}
