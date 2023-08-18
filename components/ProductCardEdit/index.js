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
import { CUP_EMPTY, CUP_LARGE, CUP_MEDIUM, CUP_SMALL } from "@/utils/cupSize";

export function ProductCardEdit({ product, changeCardAction }) {
  const firstInputRef = useRef(null);
  const formRef = useRef(null);
  const [errors, setErrors] = useState(null);
  const [multiPriceInput, setMultiPriceInput] = useState(product.isMultiPrice);

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
      handleClick: () => {
        console.log(
          "Form data",
          Object.fromEntries(new FormData(formRef.current))
        );
      },
    },
  ];

  function getDiscountInputByPriceOption(priceOption, product) {
    const priceOptionGroup = product.prices.find(
      (item) => item.portionType === priceOption
    );
    return (
      <PriceOptionDiscountInput priceOption={priceOption} key={priceOption}>
        <PriceDiscountInput
          initialPrice={priceOptionGroup.price}
          initialDiscount={priceOptionGroup.discountPrice}
          isDiscount={priceOptionGroup.isDiscount}
          priceOption={priceOption}
          errors={errors}
        />
      </PriceOptionDiscountInput>
    );
  }

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
            description="Check if you want to use S, M, L prices for this product"
            handleCheck={() => setMultiPriceInput(!multiPriceInput)}
            isInitChecked={product.isMultiPrice}
          />

          {multiPriceInput &&
            [CUP_SMALL, CUP_MEDIUM, CUP_LARGE].map((item) =>
              getDiscountInputByPriceOption(item, product)
            )}

          {!multiPriceInput && (
            <PriceDiscountInput
              initialPrice={product.price}
              initialDiscount={product.discountPrice}
              isDiscount={product.isDiscount}
              priceOption={CUP_EMPTY}
              errors={errors}
            />
          )}

          <ButtonGroup buttons={buttons} />
        </form>
      </StyledCardEdit>
    </>
  );
}
