import dbConnect from "@/db/connect";
import Website from "@/db/Website";

import { getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";
import {
  BACKEND_INVALID_CODE,
  BACKEND_NOTAUTH,
  BACKEND_NOTAUTH_CODE,
  BACKEND_SUCCESS_CODE,
  processUniqueError,
} from "@/utils/mongodb";
import EditorContent from "@/db/EditorContent";
import { INITIAL_SECTION_HTML, INITIAL_SECTION_TEXT } from "@/utils/editorData";
import { uid } from "uid";

export default async function handler(request, response) {
  const session = await getServerSession(request, response, authOptions);
  if (!session) {
    response.status(BACKEND_NOTAUTH_CODE).json(BACKEND_NOTAUTH);
    return;
  }
  await dbConnect();

  if (request.method === "GET") {
    const websiteList = await Website.find({ uid: session.user.id }).select(
      "-editorContent -__v"
    );

    return response.status(BACKEND_SUCCESS_CODE).json(websiteList);
  }

  if (request.method === "POST") {
    function addId(text) {
      const textCopy = [{ ...text[0] }];
      textCopy[0].id = uid(16);
      return JSON.stringify(textCopy);
    }

    try {
      const website = await Website.create({
        ...request.body,
        uid: session.user.id,
      });

      const editorContent = await EditorContent.create({
        about: {
          json: addId(INITIAL_SECTION_TEXT),
          html: INITIAL_SECTION_HTML,
        },
        special: {
          json: addId(INITIAL_SECTION_TEXT),
          html: INITIAL_SECTION_HTML,
        },
        hours: {
          json: addId(INITIAL_SECTION_TEXT),
          html: INITIAL_SECTION_HTML,
        },
      });

      website.editorContent = editorContent;
      website.save();

      return response.status(BACKEND_SUCCESS_CODE).json(website);
    } catch (err) {
      let errContainer = processUniqueError(err);
      return response.status(BACKEND_INVALID_CODE).json(errContainer);
    }
  }
}
