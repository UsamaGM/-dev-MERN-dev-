import mongoose from "mongoose";
import User from "./userModel";
const { Schema } = mongoose;

const classSchema = new Schema({
  name: {
    type: String,
    requried: true,
    trim: true,
  }, // String is shorthand for {type: String}
  teacher: {
    type: Schema.Types.ObjectId,
    ref: User,
    requried: true,
    trim: true,
  },
  students: {
    type: [Schema.Types.ObjectId],
    ref: User,
    default: [],
  },
  courses: {
    type: [Schema.Types.ObjectId],
    ref: Course,
    default: [],
  },
});

const Class = mongoose.Model("Class", classSchema);

export default Class;
