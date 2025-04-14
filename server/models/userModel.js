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
 */

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    requried: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["teacher", "student"],
    required: true,
  },
  classes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: Class,
  },
  courses: {
    type: [Course],
  },
  grades: {
    type: {
      type: ["quizz", "presentation"],
    },
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
  },
  resetPasswordToken: {
    type: String,
  },
  resetPasswordExpires: {
    type: Date,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", UserSchema);

export default User;
