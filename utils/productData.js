export const categories = [{ categoryName: "Getränke", categoryId: 1 }];

export const productTemplate = {
  _id: 0,
  name: "",
  description: "",
  isMultiPrice: false,
  isDiscounted: false,
  price: null,
  discountPrice: null,
  prices: [
    {
      portionType: "s",
      price: null,
      isDiscounted: false,
      discountPrice: null,
    },
    {
      portionType: "m",
      price: null,
      isDiscounted: false,
      discountPrice: null,
    },
    {
      portionType: "l",
      price: null,
      isDiscounted: false,
      discountPrice: null,
    },
  ],
};

export function formatPrice(num) {
  return "€" + (Math.round(num * 100) / 100).toFixed(2);
}
