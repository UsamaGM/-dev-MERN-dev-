import mongoose from "mongoose";
const { Schema } = mongoose;

const classSchema = new Schema({
  name: {
    type: String,
    requried: true,
    trim: true,
  }, // String is shorthand for {type: String}
  teacher: {
    type: String,
    requried: true,
    trim: true,
  },
  courseID: {
    type: String,
    requried: true,
    trim: true,
  },
  students: {
    type: [String],
  },
});
