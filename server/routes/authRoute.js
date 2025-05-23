import express from "express";
const router = express.Router();
import * as authController from "../controllers/authController.js";
import { protect } from "../middleware/authMiddleware.js";

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.get("/verify/:token", authController.verifyUser);
router.post("/forgot-password", authController.forgotPassword);
router.post("/reset-password/:token", authController.resetPassword);
router.get("/me", protect, authController.getCurrentUser);

export default router;
