import express from "express";

const app = express();

app.get("/", async function (req, res) {
  return res.json({ message: "Hello World" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
