import { headingFont } from "@/fonts";
import styled from "styled-components";
import { Input } from "../Input";
import { FormErrorText } from "../FormErrorText";
import { useRef, useState } from "react";

import { BUTTON_PRIMARY } from "@/utils/button";
import { ProductCategoryTitle } from "../ProductCategoryTitle";
import { Form } from "../Form";
import { ProductCategoryAdd } from "../ProductCategoryAdd";
import { Button } from "../Button";
import { Label } from "../Label";
import { createProductCategory } from "@/api-facade/product-category";

const ProductCategoryTitleAdd = styled(ProductCategoryTitle)`
  margin-bottom: 2rem;
`;

const StyledForm = styled(Form)`
  margin-top: 2rem;
`;

export function ProductCategoryCardNew({ websiteId, mutateCategories }) {
  const formRef = useRef(null);
  const firstInputRef = useRef(null);
  const [errors, setErrors] = useState(null);

  return (
    <ProductCategoryAdd>
      <ProductCategoryTitleAdd className={headingFont.className}>
        Add a menu category
      </ProductCategoryTitleAdd>
      <StyledForm ref={formRef}>
        <Label htmlFor="categoryName">Category name</Label>
        <Input
          type="text"
          name="name"
          id="categoryName"
          ref={firstInputRef}
          $error={errors?.name ? true : false}
          required={true}
          minLength={3}
          autoComplete="off"
        />
        <FormErrorText>{errors?.name?.message}</FormErrorText>
        <Button
          text="Add"
          actionType={BUTTON_PRIMARY}
          handleClick={async () => {
            if (formRef.current.reportValidity()) {
              let response = await createProductCategory(
                websiteId,
                Object.fromEntries(new FormData(formRef.current))
              );

              if ("errors" in response) {
                setErrors(response.errors);
              } else {
                formRef.current.reset();
                mutateCategories();
              }
            }
          }}
        />
      </StyledForm>
    </ProductCategoryAdd>
  );
}
