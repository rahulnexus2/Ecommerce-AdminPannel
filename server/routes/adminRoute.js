import express from "express"
import signupAuth from "../Auth/signupAuth.js"
import signupController from "../controllers/signupController.js";
import loginAuth from "../Auth/loginAuth.js";
import loginController from "../controllers/loginController.js";


const router=express.Router();



router.post("/signup",signupAuth,signupController);
router.post("/login",loginAuth,loginController);

export default router