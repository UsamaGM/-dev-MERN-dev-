import mongoose from "mongoose";

/**User
 * Name
 * Email
 * Password
 * Role
 * Classes
 * Courses
 * Grades
 * Upcoming Activities
 * Quizzes
 */

const UserSchema = new mongoose.Schema({
  userID: String,
  name: String,
  email: String,
  password: String,
  role: String,
  classes: [String],
  courses: [String],
  grades: [String],
  upcomingActivities: [String],
  quizzes: [String],
  cGPA: Number,
});
