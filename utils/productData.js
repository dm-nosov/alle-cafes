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
      { portionType: "s", price: 3, isDiscount: true, discountPrice: 2.5 },
      { portionType: "m", price: 4, isDiscount: false, discountPrice: 2.5 },
      { portionType: "l", price: null, isDiscount: false, discountPrice: 2.5 },
    ],
  },
  {
    id: 1002,
    name: "Fruit lemonade",
    description: "Contains orange juice and sprite",
    isMultiPrice: true,
    isDiscount: false,
    price: 0,
    discountPrice: 0,
    prices: [
      { portionType: "s", price: 3, isDiscount: true, discountPrice: 2.5 },
      { portionType: "m", price: 4, isDiscount: false, discountPrice: 2.5 },
      { portionType: "l", price: null, isDiscount: false, discountPrice: 2.5 },
    ],
  },

  {
    id: 1003,
    name: "Fanta",
    description: "Contains orange juice and sprite",
    isMultiPrice: true,
    isDiscount: false,
    price: 0,
    discountPrice: 0,
    prices: [
      { portionType: "s", price: 3, isDiscount: true, discountPrice: 2.5 },
      { portionType: "m", price: 4, isDiscount: false, discountPrice: 2.5 },
      { portionType: "l", price: null, isDiscount: false, discountPrice: 2.5 },
    ],
  },
];
