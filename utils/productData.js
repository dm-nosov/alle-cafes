export const categories = [{ categoryName: "Getränke", categoryId: 1 }];

export const productTemplate = {
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

export const products = [
  {
    id: 1001,
    name: "Espresso",
    description: "Serves with a cookie and a glass of water",
    isMultiPrice: true,
    isDiscounted: false,
    price: 0,
    discountPrice: 0,
    prices: [
      {
        portionType: "s",
        price: 1,
        isDiscounted: false,
        discountPrice: 2.5,
        id: 1,
      },
      {
        portionType: "m",
        price: null,
        isDiscounted: false,
        discountPrice: 2.5,
        id: 2,
      },
      {
        portionType: "l",
        price: null,
        isDiscounted: false,
        discountPrice: 2.5,
        id: 3,
      },
    ],
  },
  {
    id: 1002,
    name: "Hommade lemonade",
    description: "A brief description follows",
    isMultiPrice: true,
    isDiscounted: false,
    price: 0,
    discountPrice: 0,
    prices: [
      {
        portionType: "s",
        price: 3,
        isDiscounted: false,
        discountPrice: 2.5,
        id: 1,
      },
      {
        portionType: "m",
        price: 4,
        isDiscounted: true,
        discountPrice: 3,
        id: 2,
      },
      {
        portionType: "l",
        price: 5,
        isDiscounted: false,
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
    isDiscounted: false,
    price: 0,
    discountPrice: 0,
    prices: [
      {
        portionType: "s",
        price: 3,
        isDiscounted: false,
        discountPrice: 2.5,
        id: 1,
      },
      {
        portionType: "m",
        price: 4,
        isDiscounted: false,
        discountPrice: 2.5,
        id: 2,
      },
      {
        portionType: "l",
        price: 5,
        isDiscounted: true,
        discountPrice: 2.5,
        id: 3,
      },
    ],
  },
  {
    id: 1004,
    name: "White wine",
    description: "A very long drink which nobody actually knows or or",
    isMultiPrice: false,
    isDiscounted: false,
    price: null,
    discountPrice: 0,
    prices: [],
  },
  {
    id: 1005,
    name: "Croissant",
    description: "Serves with butter and wasps",
    isMultiPrice: false,
    isDiscounted: true,
    price: 1.99,
    discountPrice: 0.99,
    prices: [],
  },
  {
    id: 1006,
    name: "French bread",
    description: "Serves with butter and wasps",
    isMultiPrice: false,
    isDiscounted: true,
    price: 1.99,
    discountPrice: 0,
    prices: [],
  },
];

export function formatPrice(num) {
  return "€" + (Math.round(num * 100) / 100).toFixed(2);
}
