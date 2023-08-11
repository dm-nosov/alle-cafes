import mongoose from "mongoose";

const { Schema } = mongoose;

const websiteSchema = new Schema({
  title: {
    type: String,
    minLength: [3, "A title must exceed 3 symbols"],
    required: [true, "A website must have a non-empty title"],
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minLength: [3, "A slug must exceed 3 symbols"],
    validate: {
      validator: function (v) {
        return /^([a-z]+\-?[a-z]+){1,}$/.test(v);
      },
      message: (props) => `A slug may contain only letters and the '-' symbol`,
    },
  },
  editorContent: {
    type: Schema.Types.ObjectId,
    ref: "EditorContent",
  },
});

const Website =
  mongoose.models.Website || mongoose.model("Website", websiteSchema);

export default Website;
