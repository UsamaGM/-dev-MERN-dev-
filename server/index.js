import express from "express";
import userRouter from "./routes/userRouter.js";

const app = express();

// app.get("/test", async function (req, res) {
//   return res.json({ message: "Hello World" });
// });

app.use("/user", userRouter);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
