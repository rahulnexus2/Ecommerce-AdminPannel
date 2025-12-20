import express from "express";
import authMiddleware from "../middlewares/adminMiddleware.js"
import adminMiddleware from "../middlewares/adminMiddleware.js";

const router = express.Router();


router.use(authMiddleware);
router.use(adminMiddleware);


router.get("/dashboard", (req, res) => {
  res.status(200).json({
    message: "Admin dashboard accessed",
    admin: req.user,
  });
});


router.post("/products", (req, res) => {
  res.status(201).json({
    message: "Product created (admin only)",
  });
});

export default router;
