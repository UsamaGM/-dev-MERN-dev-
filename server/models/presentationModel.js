import { Schema } from "mongoose";

const presentationSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  class: {
    type: Schema.Types.ObjectId,
    ref: "Class",
    required: true,
  },
  grade: {
    type: Number,
  },
  peersGrade: {
    type: [
      {
        type: {
          peerId: { type: Schema.Types.ObjectId, ref: "User" },
          grade: Number,
        },
      },
    ],
  },
});

const Presentation = mongoose.model("Presentation", presentationSchema);

export default Presentation;
