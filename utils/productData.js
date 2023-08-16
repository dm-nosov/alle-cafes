export const categories = [{ categoryName: "Getränke", categoryId: 1 }];

export const products = [
  {
    id: 1001,
    name: "Espresso",
    description: "Serves with a cookie and a glass of water",
    isMultiPrice: true,
    isDiscount: false,
    price: 0,
    discountPrice: 0,
    prices: [
      {
        portionType: "s",
        price: null,
        isDiscount: false,
        discountPrice: 2.5,
        id: 1,
      },
      {
        portionType: "m",
        price: null,
        isDiscount: false,
        discountPrice: 2.5,
        id: 2,
      },
      {
        portionType: "l",
        price: null,
        isDiscount: false,
        discountPrice: 2.5,
        id: 3,
      },
    ],
  },
  {
    id: 1002,
    name: "Hommade lemonade",
    description: "",
    isMultiPrice: true,
    isDiscount: false,
    price: 0,
    discountPrice: 0,
    prices: [
      {
        portionType: "s",
        price: 3,
        isDiscount: false,
        discountPrice: 2.5,
        id: 1,
      },
      {
        portionType: "m",
        price: 4,
        isDiscount: true,
        discountPrice: 3,
        id: 2,
      },
      {
        portionType: "l",
        price: 5,
        isDiscount: false,
        discountPrice: 2.5,
        id: 3,
      },
    ],
  },
  {
    id: 1003,
    name: "Fanta",
    description: "",
    isMultiPrice: true,
    isDiscount: false,
    price: 0,
    discountPrice: 0,
    prices: [
      {
        portionType: "s",
        price: 3,
        isDiscount: false,
        discountPrice: 2.5,
        id: 1,
      },
      {
        portionType: "m",
        price: 4,
        isDiscount: false,
        discountPrice: 2.5,
        id: 2,
      },
      {
        portionType: "l",
        price: 5,
        isDiscount: true,
        discountPrice: 2.5,
        id: 3,
      },
    ],
  },
  {
    id: 1004,
    name: "White wine",
    description: "A very long drink which nobody actually knows or or",
    isMultiPrice: true,
    isDiscount: false,
    price: 0,
    discountPrice: 0,
    prices: [
      {
        portionType: "s",
        price: 3,
        isDiscount: false,
        discountPrice: 2.5,
        id: 1,
      },
      {
        portionType: "m",
        price: 4,
        isDiscount: false,
        discountPrice: 2.5,
        id: 2,
      },
      {
        portionType: "l",
        price: 5,
        isDiscount: true,
        discountPrice: 2.5,
        id: 3,
      },
    ],
  },
];

export function formatPrice(num) {
  return "€" + (Math.round(num * 100) / 100).toFixed(2);
}
