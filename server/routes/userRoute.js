import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();


router.use(authMiddleware);


router.get("/profile", (req, res) => {
  res.status(200).json({
    message: "User profile fetched successfully",
    user: req.user,
  });
});


router.get("/orders", (req, res) => {
  res.status(200).json({
    message: "User orders fetched",
    userId: req.user.id,
  });
});

export default router;
