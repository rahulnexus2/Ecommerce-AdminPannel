import express from "express"
import signupAuth from "../Auth/signupAuth.js"
import signupController from "../controllers/signupController.js";

const router=express.Router();


router.post("/signup",signupAuth,signupController);
router.post("/login")

export default router