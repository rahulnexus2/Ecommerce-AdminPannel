import express from "express"
import signupAuth from "../Auth/signupAuth";
import signupController from "../controllers/signupController";


const router =express.Router();


router.post("/signup",signupAuth,signupController);





export default router