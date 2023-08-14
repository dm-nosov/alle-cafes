import dbConnect from "@/db/connect";
import Website from "@/db/Website";
import {
  BACKEND_INVALID_CODE,
  BACKEND_NOTAUTH,
  BACKEND_NOTAUTH_CODE,
  BACKEND_NOT_FOUND,
  BACKEND_NOT_FOUND_CODE,
  BACKEND_SUCCESS_CODE,
  processUniqueError,
} from "@/utils/mongodb";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../../auth/[...nextauth]";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);
  if (!session) {
    response.status(BACKEND_NOTAUTH_CODE).json(BACKEND_NOTAUTH);
    return;
  }

  await dbConnect();
  const { id } = request.query;

  if (request.method === "PUT") {
    try {
      const website = await Website.findOneAndUpdate(
        { _id: id, uid: session.user.id },
        request.body,
        {
          runValidators: true,
        }
      );
      return response.status(BACKEND_SUCCESS_CODE).json(website);
    } catch (err) {
      let errContainer = processUniqueError(err);
      return response.status(BACKEND_INVALID_CODE).json(errContainer);
    }
  }

  if (request.method === "DELETE") {
    try {
      const website = await Website.findByIdAndDelete(
        { _id: id, uid: session.user.id },
        {
          runValidators: true,
        }
      );

      if (!website) {
        return response.status(BACKEND_NOT_FOUND_CODE).json(BACKEND_NOT_FOUND);
      }

      return response.status(BACKEND_SUCCESS_CODE).json(website);
    } catch (err) {
      let errContainer = processUniqueError(err);
      return response.status(BACKEND_INVALID_CODE).json(errContainer);
    }
  }
}
