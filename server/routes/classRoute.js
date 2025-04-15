import express from "express";
import {
  createNewClass,
  getClassById,
} from "../controllers/classController.js";
import { authorizeAdmin } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/:id", getClassById);
router.post("/", createNewClass);
router.delete("/:id", authorizeAdmin);

export default router;
