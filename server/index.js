import express from "express";
import userRouter from "./routes/userRoute.js";
import classRouter from "./routes/classRoute.js";
import authRouter from "./routes/authRoute.js";
import cors from "cors";
import connectDB from "./config/db.js";
import { protect } from "./middleware/authMiddleware.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/test", async function (req, res) {
  return res.json({ message: "Hello World" });
});

app.use("/auth", authRouter);
app.use("/user", userRouter);
app.use("/class", classRouter);

await connectDB();

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});

/** Grades
 * Presentation Marks, Quiz marks
 * Quizz CRUD
 * Presentation CRUD
 * User CRUD
 */
