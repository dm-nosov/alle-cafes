import dbConnect from "@/db/connect";
import Website from "@/db/Website";
import ProductCategory from "@/db/ProductCategory";
import mongoose from "mongoose";

import { getServerSession } from "next-auth/next";
import {
  BACKEND_INVALID_CODE,
  BACKEND_NOT_ALLOWED,
  BACKEND_NOT_ALLOWED_CODE,
  BACKEND_NOT_FOUND,
  BACKEND_NOT_FOUND_CODE,
  BACKEND_NOTAUTH,
  BACKEND_NOTAUTH_CODE,
  BACKEND_SUCCESS_CODE,
} from "@/utils/mongodb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);
  if (!session) {
    response.status(BACKEND_NOTAUTH_CODE).json(BACKEND_NOTAUTH);
    return;
  }
  await dbConnect();

  const { id: websiteId, categoryId } = request.query;

  if (request.method === "DELETE") {
    const category = await ProductCategory.findOneAndDelete({
      _id: categoryId,
      uid: session.user.id,
    });

    await Website.findOneAndUpdate(
      {
        uid: session.user.id,
        _id: websiteId,
      },
      { $pull: { categories: new mongoose.Types.ObjectId(categoryId) } }
    );
    return response.status(BACKEND_SUCCESS_CODE).json(category);
  }

  return response.status(BACKEND_NOT_ALLOWED_CODE).json(BACKEND_NOT_ALLOWED);
}
