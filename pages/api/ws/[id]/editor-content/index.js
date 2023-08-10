import EditorContent from "@/db/EditorContent";
import Website from "@/db/Website";
import dbConnect from "@/db/connect";

export default async function handler(request, response) {
  await dbConnect();
  const { id } = request.query;

  if (request.method === "GET") {
    /*     const sleep = (delay) =>
      new Promise((resolve) => setTimeout(resolve, delay));
    await sleep(7000); */
    const website = await Website.findById(id).populate(
      "editorContent",
      "about special hours -_id"
    );
    return response.status(200).json(website.editorContent);
  }

  if (request.method === "PUT") {
    const website = await Website.findById(id);
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
    return response.status(200).json({ website: id, newContent: newContent });
  }
}
