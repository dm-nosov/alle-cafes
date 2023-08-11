import dbConnect from "@/db/connect";
import mongoose from "mongoose";
import Website from "@/db/Website";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "PUT") {
    try {
      const website = await Website.findByIdAndUpdate(id, request.body, {
        runValidators: true,
      });
      return response.status(200).json(website);
    } catch (err) {
      let errContainer;
      errContainer = err;
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
