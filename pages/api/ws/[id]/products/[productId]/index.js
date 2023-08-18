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
import { authOptions } from "../../../../auth/[...nextauth]";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);
  if (!session) {
    response.status(BACKEND_NOTAUTH_CODE).json(BACKEND_NOTAUTH);
    return;
  }

  await dbConnect();

  const { productId } = request.query;

  if (request.method === "PUT") {
    try {
      const product = await Product.findOneAndUpdate(
        { _id: productId },
        request.body,
        {
          runValidators: true,
        }
      );
      return response.status(BACKEND_SUCCESS_CODE).json(product);
    } catch (err) {
      let errContainer = processUniqueError(err);
      return response.status(BACKEND_INVALID_CODE).json(errContainer);
    }
  }

  return response.status(BACKEND_NOT_ALLOWED_CODE).json(BACKEND_NOT_ALLOWED);
}
