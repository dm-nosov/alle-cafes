import dbConnect from "@/db/connect";
import Product from "@/db/Product";
import { products } from "@/utils/productData";

export default async function handler(request, response) {
  await dbConnect();

  let product = null;

  /*   try {
    product = await Product.findOneAndUpdate(
      {
        _id: "64df0732b3fa4bbbc78d8586",
        "prices._id": "64df0d96f343b366c59ae69c",
      },
      {
        $set: {
          "prices.$": {
            _id: "64df0d96f343b366c59ae69c",
            ...products[0].prices[0],
          },
        },
      },
      { runValidators: true }
    );
  } catch (err) {
    console.log(err);
  } */

  product = new Product(products[0]);
  await product.save();
  response.status(200).json({});
}
