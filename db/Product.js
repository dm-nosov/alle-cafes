import mongoose from "mongoose";

const { Schema } = mongoose;

const priceOptionSchema = new Schema({
  portionType: {
    type: String,
    enum: ["s", "m", "l"],
    required: [true, "A price option must a portion type"],
  },
  price: {
    type: Number,
    min: [0, "A price must be a non-negative number"],
  },
  discountPrice: {
    type: Number,
    min: [0, "A discounted price must be a non-negative number"],
  },
  isDiscount: {
    type: Boolean,
    required: true,
  },
});

const productSchema = new Schema({
  name: {
    type: String,
    minLength: [3, "A product name must exceed 3 symbols"],
    required: [true, "A product must have a non-empty name"],
  },
  description: {
    type: String,
  },
  isMultiPrice: {
    type: Boolean,
    required: true,
  },
  isDiscount: {
    type: Boolean,
    required: true,
  },
  price: {
    type: Number,
    min: [0, "A price must be a non-negative number"],
  },
  discountPrice: {
    type: Number,
    min: [0, "A discounted price must be a non-negative number"],
  },
  prices: [priceOptionSchema],
});

const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);

export default Product;
