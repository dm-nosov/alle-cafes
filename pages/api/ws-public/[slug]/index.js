import dbConnect from "@/db/connect";
import Website from "@/db/Website";
import { BACKEND_SUCCESS_CODE } from "@/utils/mongodb";

export default async function handler(request, response) {
  await dbConnect();
  const { slug } = request.query;
  if (request.method === "GET") {
    const website = await Website.findOne({ slug: slug })
      .populate("editorContent")
      .select("-__v -uid -_id");

    return response.status(BACKEND_SUCCESS_CODE).json(website);
  }
}
