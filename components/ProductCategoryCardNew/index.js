import { cinzel } from "@/fonts";
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

const ProductCategoryTitleAdd = styled(ProductCategoryTitle)`
  margin-bottom: 2rem;
`;

export function ProductCategoryCardNew({ categoryId }) {
  const formRef = useRef(null);
  const firstInputRef = useRef(null);
  const [errors, setErrors] = useState(null);

  return (
    <ProductCategoryAdd>
      <ProductCategoryTitleAdd className={cinzel.className}>
        Add a menu category
      </ProductCategoryTitleAdd>
      <Form ref={formRef}>
        <Label htmlFor="categoryName">Category name</Label>
        <Input
          type="text"
          name="categoryName"
          id="categoryName"
          ref={firstInputRef}
          $error={errors?.categoryName ? true : false}
          required={true}
          minLength={3}
        />
        <FormErrorText>{errors?.categoryName?.message}</FormErrorText>
        <Button
          text="Add"
          actionType={BUTTON_PRIMARY}
          handleClick={async () => {}}
        />
      </Form>
    </ProductCategoryAdd>
  );
}
