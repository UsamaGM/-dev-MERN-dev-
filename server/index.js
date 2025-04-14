import express from "express";
import userRouter from "./routes/userRoute.js";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/test", async function (req, res) {
  return res.json({ message: "Hello World" });
});

app.use("/auth", authRouter);
app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
