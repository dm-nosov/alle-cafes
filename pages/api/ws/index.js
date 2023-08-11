import dbConnect from "@/db/connect";
import Website from "@/db/Website";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const websiteList = await Website.find().select("-editorContent -__v");
    return response.status(200).json(websiteList);
  }

  if (request.method === "POST") {
    try {
      const website = await Website.create(request.body);
      return response.status(200).json(website);
    } catch (err) {
      let errContainer = err;

      //Unique constraint is invalid
      if (err?.code === 11000) {
        errContainer = { errors: {} };
        errContainer.errors[Object.keys(err.keyValue)[0]] = {
          message: "The field must be unique",
        };
      }
      return response.status(400).json(errContainer);
    }
  }
}
