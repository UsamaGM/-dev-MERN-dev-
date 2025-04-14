import express from "express";
import { createNewClass, getClassById } from "../controllers/classController";

const router = express.Router();

router.get("/:id", getClassById);
router.post("/", createNewClass);

export default router;
