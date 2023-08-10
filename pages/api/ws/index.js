import dbConnect from "@/db/connect";
import Website from "@/db/Website";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const websiteList = await Website.find().select("-editorContent -__v");
    return response.status(200).json(websiteList);
  }
}
