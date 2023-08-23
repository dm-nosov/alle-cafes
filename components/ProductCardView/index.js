import styled from "styled-components";
import { Cup } from "../Cup";
import { PriceGroup } from "../PriceGroup";
import { ProductName } from "../ProductName";
import { ProductDescription } from "../ProductDescription";
import { PriceDiscountGroup } from "../PriceDiscountGroup";
import { OptionalPrice } from "../OptionalPrice";
import { StyledCardView } from "../StyledCardView";
import Image from "next/image";
import { useState } from "react";
import { PopupGeneral } from "../PopupGeneral";
import { PopupOption } from "../PopupOption";
import { ButtonGroup } from "../ButtonGroup";
import { BUTTON_DANGER } from "@/utils/button";
import { ACTION_EDIT } from "@/utils/websiteCard";
import { removeProduct } from "@/api-facade/product";
import { useWebsiteContentStore } from "@/store/WebsiteContent";

const HorizontalPriceRow = styled.div`
  display: flex;
  gap: 1rem;
`;

export function ProductCardView({
  product,
  changeCardAction,
  categoryId,
  mutateCategories,
}) {
  const [showActionsPopup, setShowActionsPopup] = useState(false);
  const [showRemovePopup, setShowRemovePopup] = useState(false);
  const websiteId = useWebsiteContentStore((state) => state.websiteId);

  function closePopup() {
    setShowActionsPopup(false);
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
        await removeProduct(websiteId, categoryId, product._id);
        mutateCategories();
        closePopup();
      },
    },
  ];

  return (
    <>
      <StyledCardView>
        <Image
          src="/img/icons/three-dots-vertical.svg"
          alt=""
          width={24}
          height={24}
          style={{
            position: "absolute",
            right: "12px",
          }}
          onClick={() => setShowActionsPopup(true)}
        />

        <ProductName>
          <span>{product.name}</span>
        </ProductName>
        <ProductDescription>{product.description}</ProductDescription>

        <HorizontalPriceRow>
          {product.isMultiPrice &&
            product.prices.map((price) => {
              let priceGroupContent = null;
              if (price.isDiscounted) {
                priceGroupContent = (
                  <>
                    <Cup size={price.portionType} />
                    <PriceDiscountGroup
                      price={price.price}
                      discountPrice={price.discountPrice}
                    />
                  </>
                );
              } else {
                priceGroupContent = (
                  <>
                    <Cup size={price.portionType} />
                    <OptionalPrice price={price.price} />
                  </>
                );
              }
              return (
                <PriceGroup key={price._id}>{priceGroupContent}</PriceGroup>
              );
            })}
          {!product.isMultiPrice && product.isDiscounted && (
            <PriceGroup>
              <Cup size={null} />
              <PriceDiscountGroup
                price={product.price}
                discountPrice={product.discountPrice}
              />
            </PriceGroup>
          )}
          {!product.isMultiPrice && !product.isDiscounted && (
            <PriceGroup>
              <Cup size={null} />
              <OptionalPrice price={product.price} />
            </PriceGroup>
          )}
        </HorizontalPriceRow>
      </StyledCardView>
      {showActionsPopup && (
        <PopupGeneral handleClosePopup={closePopup}>
          <PopupOption handleClick={() => changeCardAction(ACTION_EDIT)}>
            Edit
          </PopupOption>
          <PopupOption
            danger
            handleClick={() => {
              closePopup();
              setShowRemovePopup(true);
            }}
          >
            Remove
          </PopupOption>
        </PopupGeneral>
      )}
      {showRemovePopup && (
        <PopupGeneral handleClosePopup={closePopup}>
          <p>
            Are you sure you want to remove <strong>{product.name}</strong>?
          </p>
          <ButtonGroup buttons={removePopupButtons} />
        </PopupGeneral>
      )}
    </>
  );
}
