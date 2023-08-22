import dbConnect from "@/db/connect";
import Product from "@/db/Product";
import ProductCategory from "@/db/ProductCategory";
import {
  BACKEND_INVALID_CODE,
  BACKEND_NOTAUTH,
  BACKEND_NOTAUTH_CODE,
  BACKEND_NOT_ALLOWED,
  BACKEND_NOT_ALLOWED_CODE,
  BACKEND_NOT_FOUND,
  BACKEND_NOT_FOUND_CODE,
  BACKEND_SUCCESS_CODE,
  processUniqueError,
} from "@/utils/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import mongoose from "mongoose";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);
  if (!session) {
    response.status(BACKEND_NOTAUTH_CODE).json(BACKEND_NOTAUTH);
    return;
  }

  await dbConnect();

  const { productId, categoryId } = request.query;

  if (request.method === "DELETE") {
    try {
      const product = await Product.findOneAndDelete({
        _id: productId,
        uid: session.user.id,
      });

      await ProductCategory.findOneAndUpdate(
        { _id: categoryId, uid: session.user.id },
        {
          $pull: {
            products: new mongoose.Types.ObjectId(productId),
          },
        }
      );

      return response.status(BACKEND_SUCCESS_CODE).json({});
    } catch (err) {
      return response.status(BACKEND_INVALID_CODE).json(err);
    }
  }

  return response.status(BACKEND_NOT_ALLOWED_CODE).json(BACKEND_NOT_ALLOWED);
}
