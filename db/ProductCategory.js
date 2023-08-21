import mongoose from "mongoose";
import Product from "@/db/Product";

const { Schema } = mongoose;

const productCategorySchema = new Schema({
  name: {
    type: String,
    minLength: [3, "A product name must exceed 3 symbols"],
    required: [true, "A product category must have a non-empty name"],
  },
  products: {
    type: [Schema.Types.ObjectId],
    ref: "Product",
  },
  uid: {
    type: String,
    required: true,
  },
});

const ProductCategory =
  mongoose.models.ProductCategory ||
  mongoose.model("ProductCategory", productCategorySchema);

export default ProductCategory;
