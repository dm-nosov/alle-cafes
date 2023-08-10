import dbConnect from "@/db/connect";
import mongoose from "mongoose";
import Website from "@/db/Website";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "PUT") {
    const website = await Website.findByIdAndUpdate(id, request.body);
    return response.status(200).json(website);
  }
}
