import express from "express";
import { createNewQuiz, getQuizById, deleteQuiz, getClassQuizes } from "../controllers/quizController";

const router = express.Router();

router.get("/", getClassQuizes);
router.get("/:id", getQuizById);
router.post("/", createNewQuiz);
router.delete("/:id", deleteQuiz);

export default router;
