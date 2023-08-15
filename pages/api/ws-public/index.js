import dbConnect from "@/db/connect";
import Website from "@/db/Website";
import EditorContent from "@/db/EditorContent";
import {
  BACKEND_NOT_ALLOWED,
  BACKEND_NOT_ALLOWED_CODE,
  BACKEND_SUCCESS_CODE,
} from "@/utils/mongodb";

export default async function handler(request, response) {
  await dbConnect();
  if (request.method === "GET") {
    const websites = await Website.find({})
      .populate("editorContent")
      .select("-__v -uid -_id");
    return response.status(BACKEND_SUCCESS_CODE).json(websites);
  }
  return response.status(BACKEND_NOT_ALLOWED_CODE).json(BACKEND_NOT_ALLOWED);
}
