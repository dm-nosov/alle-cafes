import mongoose from "mongoose";

const { Schema } = mongoose;

const editorContentSchema = new Schema({
  _id: Schema.Types.ObjectId,
  about: { json: String, html: String },
  special: { json: String, html: String },
  hours: { json: String, html: String },
});

const EditorContent =
  mongoose.models.EditorContent ||
  mongoose.model("EditorContent", editorContentSchema, "editorContent");

export default EditorContent;
