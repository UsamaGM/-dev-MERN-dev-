import { Schema } from "mongoose";
import User from "./userModel";

const presentationSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  course: {
    type: Schema.Types.ObjectId,
    ref: Course,
    required: true,
  },
  grade: {
    type: Number,
  },
  peersGrade: {
    type: [
      { peerId: { type: Schema.Types.ObjectId, ref: User }, grade: Number },
    ],
  },
});
