import EditorContent from "@/db/EditorContent";
import Website from "@/db/Website";
import dbConnect from "@/db/connect";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import {
  BACKEND_NOTAUTH,
  BACKEND_NOTAUTH_CODE,
  BACKEND_NOT_ALLOWED,
  BACKEND_NOT_ALLOWED_CODE,
  BACKEND_NOT_FOUND,
  BACKEND_NOT_FOUND_CODE,
  BACKEND_SUCCESS_CODE,
} from "@/utils/mongodb";
import { getServerSession } from "next-auth/next";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);
  if (!session) {
    response.status(BACKEND_NOTAUTH_CODE).json(BACKEND_NOTAUTH);
    return;
  }

  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    if (id === "undefined") {
      return response.status(BACKEND_NOT_FOUND_CODE).json(BACKEND_NOT_FOUND);
    }
    const website = await Website.findOne(
      {
        _id: id,
        uid: session.user.id,
      },
      "title slug -_id"
    ).populate("editorContent", "about special hours -_id");
    return response.status(BACKEND_SUCCESS_CODE).json(website);
  }

  if (request.method === "PUT") {
    const website = await Website.findOne({
      _id: id,
      uid: session.user.id,
    });
    if (!website) {
      return response.status(BACKEND_NOT_FOUND_CODE).json(BACKEND_NOT_FOUND);
    }
    const newContent = request.body;

    let updateBatch = {};

    for (const section in newContent) {
      updateBatch[section] = {
        html: newContent[section].html,
        json: JSON.stringify(newContent[section].json),
      };
    }

    await EditorContent.findByIdAndUpdate(website.editorContent, {
      $set: updateBatch,
    });
    return response
      .status(BACKEND_SUCCESS_CODE)
      .json({ website: id, newContent: newContent });
  }
  return response.status(BACKEND_NOT_ALLOWED_CODE).json(BACKEND_NOT_ALLOWED);
}
