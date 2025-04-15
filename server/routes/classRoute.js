import express from "express";
import {
  createNewClass,
  getClassById,
  getStudentClasses,
  getTeacherClasses,
} from "../controllers/classController.js";
import { authorizeAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:id", getClassById);
router.get("/student/:id", getStudentClasses);
router.get("/teacher/:id", getTeacherClasses);
router.post("/", createNewClass);
router.delete("/:id", authorizeAdmin);

export default router;
