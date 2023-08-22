import { cinzel } from "@/fonts";
import { ProductCategory } from "../ProductCategory";
import {
  BUTTON_DANGER,
  BUTTON_ICON_EDIT,
  BUTTON_ICON_PREVIEW,
  BUTTON_ICON_TRASH,
} from "@/utils/button";
import { ButtonIcon } from "../ButtonIcon/index";
import { useState } from "react";
import { PopupGeneral } from "../PopupGeneral";
import { ButtonGroup } from "../ButtonGroup";
import { removeProductCategory } from "@/api-facade/product-category";

export function ProductCategoryCardView({
  categoryName,
  children,
  websiteId,
  categoryId,
  mutateCategories,
}) {
  const [showRemovePopup, setShowRemovePopup] = useState(false);
  function closePopup() {
    setShowRemovePopup(false);
  }

  const removePopupButtons = [
    {
      text: "Cancel",
      id: 1,
      handleClick: () => {
        closePopup();
      },
    },
    {
      text: "Remove",
      id: 2,
      actionType: BUTTON_DANGER,
      handleClick: async () => {
        await removeProductCategory(websiteId, categoryId);
        mutateCategories();
        closePopup();
      },
    },
  ];

  return (
    <>
      <ProductCategory>
        <h3 className={cinzel.className}>
          {categoryName}
          <ButtonIcon
            iconName={BUTTON_ICON_TRASH}
            variant={BUTTON_DANGER}
            handleClick={() => setShowRemovePopup(true)}
          />
        </h3>

        {children}
      </ProductCategory>
      {showRemovePopup && (
        <PopupGeneral handleClosePopup={closePopup}>
          <p>
            Are you sure you want to remove <strong>{categoryName}</strong>?
          </p>
          <ButtonGroup buttons={removePopupButtons} />
        </PopupGeneral>
      )}
    </>
  );
}
