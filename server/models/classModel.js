import mongoose from "mongoose";
const { Schema } = mongoose;

const classSchema = new Schema({
  Title: String, // String is shorthand for {type: String}
  Teacher: String,
  CourseID: String,
  Students: [String],
});
