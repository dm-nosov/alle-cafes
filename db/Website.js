import mongoose from "mongoose";

const { Schema } = mongoose;

const websiteSchema = new Schema({
  title: String,
  slug: String,
  editorContent: {
    type: Schema.Types.ObjectId,
    ref: "EditorContent",
  },
});

const Website =
  mongoose.models.Website || mongoose.model("Website", websiteSchema);

export default Website;
