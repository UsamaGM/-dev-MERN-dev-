import mongoose from "mongoose";
const { Schema } = mongoose;

const classSchema = new Schema({
  name: {
    type: String,
    requried: true,
    trim: true,
  }, // String is shorthand for {type: String}
  teacher: {
    type: Schema.Types.ObjectId,
    ref: "User",
    requried: true,
    trim: true,
  },
  students: {
    type: [Schema.Types.ObjectId],
    ref: "User",
    default: [],
  },
});

const Class = mongoose.model("Class", classSchema);

export default Class;
