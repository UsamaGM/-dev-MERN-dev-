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
  User: String,
  Name: String,
  Email: String,
  Password: String,
  Role: String,
  Classes: [String],
  Courses: [String],
  Grades: [String],
  UpcomingActivities: [String],
  Quizzes: [String],
  CGPA: Number,
});
