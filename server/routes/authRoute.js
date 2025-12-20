import express from "express";
import signupAuth from "../Auth/signupAuth.js";
import signupController from "../controllers/signupController.js";
import loginAuth from "../Auth/loginAuth.js";
import loginController from "../controllers/loginController.js";
import forgotPassword from "../controllers/forgotPasswordController.js";
import resetPassword from "../controllers/resetPasswordController.js";

const router = express.Router();

// Public routes
router.post("/signup", signupAuth, signupController);
router.post("/login", loginAuth, loginController);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
