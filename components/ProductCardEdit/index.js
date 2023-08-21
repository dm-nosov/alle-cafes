import { useRef, useState, useEffect } from "react";
import { ACTION_ADD, ACTION_VIEW } from "@/utils/websiteCard";
import { BUTTON_PRIMARY } from "@/utils/button";
import { ButtonGroup } from "../ButtonGroup";
import { FormErrorText } from "../FormErrorText/index";
import { Input } from "../Input";
import { Checkbox } from "../Checkbox";
import { PriceDiscountInput } from "../PriceDiscountInput";
import { PriceOptionDiscountInput } from "../PriceOptionDiscountInput";
import { CUP_EMPTY, CUP_LARGE, CUP_MEDIUM, CUP_SMALL } from "@/utils/cupSize";
import { productTemplate } from "@/utils/productData";
import { createProduct, updateProduct } from "@/api-facade/product";
import { useWebsiteContentStore } from "@/store/WebsiteContent";
import { Form } from "../Form";
import { StyledCard } from "../StyledCard";
import { Label } from "../Label";

export function ProductCardEdit({
  product,
  changeCardAction,
  mutateCategories,
  categoryId,
}) {
  const firstInputRef = useRef(null);
  const formRef = useRef(null);
  const [errors, setErrors] = useState(null);
  const [multiPriceInput, setMultiPriceInput] = useState(product.isMultiPrice);
  const websiteId = useWebsiteContentStore((state) => state.websiteId);

  useEffect(() => {
    firstInputRef.current.focus();
  }, []);

  const buttons = [
    {
      text: "Cancel",
      id: 1,
      handleClick: () => {
        product._id
          ? changeCardAction(ACTION_VIEW)
          : changeCardAction(ACTION_ADD);
      },
    },
    {
      text: product._id ? "Update" : "Create",
      id: 2,
      actionType: BUTTON_PRIMARY,
      handleClick: async () => {
        if (formRef.current.reportValidity()) {
          const processedData = processFormDataToProduct(
            product._id,
            Object.fromEntries(new FormData(formRef.current))
          );
          let response;

          if (product._id) {
            response = await updateProduct(
              websiteId,
              product._id,
              processedData
            );
          } else {
            response = await createProduct(
              websiteId,
              categoryId,
              processedData
            );
          }

          if ("errors" in response) {
            setErrors(response.errors);
          } else {
            product._id
              ? changeCardAction(ACTION_VIEW)
              : changeCardAction(ACTION_ADD);
            mutateCategories();
          }
        }
      },
    },
  ];

  function processFormDataToProduct(productId, formData) {
    function getNullableValue(fieldValue) {
      return fieldValue ? parseFloat(fieldValue) : null;
    }

    function getBool(fieldValue) {
      return fieldValue === "true";
    }

    function getPriceOptionObject(formData, optionName) {
      let priceOptionObject = { portionType: optionName };
      priceOptionObject["price"] = getNullableValue(
        formData[`price__${optionName}`]
      );
      priceOptionObject["discountPrice"] = getNullableValue(
        formData[`discountPrice__${optionName}`]
      );
      priceOptionObject["isDiscounted"] = getBool(
        formData[`isDiscounted__${optionName}`]
      );
      return priceOptionObject;
    }

    let product = { _id: productId, ...productTemplate };
    product.prices = productTemplate.prices.slice();
    product["name"] = formData["name"];
    product["description"] = formData["description"];
    product["isMultiPrice"] = getBool(formData["isMultiPrice"]);
    if (!product.isMultiPrice) {
      product["isDiscounted"] = getBool(formData["isDiscounted"]);
      product["price"] = getNullableValue(formData["price"]);
      product["discountPrice"] = getNullableValue(formData["discountPrice"]);
    } else {
      product.prices = [CUP_SMALL, CUP_MEDIUM, CUP_LARGE].map((item) =>
        getPriceOptionObject(formData, item)
      );
    }
    return product;
  }

  function getDiscountInputByPriceOption(priceOption, product) {
    const priceOptionGroup = product.prices.find(
      (item) => item.portionType === priceOption
    );
    return (
      <PriceOptionDiscountInput priceOption={priceOption} key={priceOption}>
        <PriceDiscountInput
          initialPrice={priceOptionGroup.price}
          initialDiscount={priceOptionGroup.discountPrice}
          isDiscounted={priceOptionGroup.isDiscounted}
          priceOption={priceOption}
          errors={errors}
        />
      </PriceOptionDiscountInput>
    );
  }

  return (
    <>
      <StyledCard>
        <Form ref={formRef}>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            id="name"
            defaultValue={product.name}
            ref={firstInputRef}
            $error={errors?.name ? true : false}
            required={true}
            minLength={3}
            autoComplete="off"
          />
          <FormErrorText>{errors?.name?.message}</FormErrorText>

          <Label htmlFor="description">Description</Label>
          <Input
            type="text"
            name="description"
            id="description"
            defaultValue={product.description}
            $error={errors?.description ? true : false}
          />
          <FormErrorText>{errors?.description?.message}</FormErrorText>
          <Checkbox
            checkboxName="isMultiPrice"
            labelText="Multi-price"
            description="Check to use S, M, L prices"
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
              isDiscounted={product.isDiscounted}
              priceOption={CUP_EMPTY}
              errors={errors}
            />
          )}

          <ButtonGroup buttons={buttons} />
        </Form>
      </StyledCard>
    </>
  );
}
