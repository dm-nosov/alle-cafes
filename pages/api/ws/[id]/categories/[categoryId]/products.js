import dbConnect from "@/db/connect";
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
import Product from "@/db/Product";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import ProductCategory from "@/db/ProductCategory";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);
  if (!session) {
    response.status(BACKEND_NOTAUTH_CODE).json(BACKEND_NOTAUTH);
    return;
  }

  await dbConnect();

  const { id: websiteId, categoryId } = request.query;

  if (request.method === "POST") {
    const mergedData = { ...request.body, uid: session.user.id };
    delete mergedData._id;
    try {
      const product = await Product.create(mergedData);

      await ProductCategory.findOneAndUpdate(
        { uid: session.user.id, _id: categoryId },
        { $push: { products: product } }
      );
      return response.status(BACKEND_SUCCESS_CODE).json(product);
    } catch (err) {
      let errContainer = processUniqueError(err);
      return response.status(BACKEND_INVALID_CODE).json(errContainer);
    }
  }

  return response.status(BACKEND_NOT_ALLOWED_CODE).json(BACKEND_NOT_ALLOWED);
}
