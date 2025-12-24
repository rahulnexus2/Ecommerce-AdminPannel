import bcrypt from "bcryptjs";
import User from "../models/userModel.js";

const loginAuth = async (req, res, next) => {
  try {
    const { email, password ,role } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }

    
    const user = await User.findOne({ email }).select("+password");

    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid email or password",
      });
    }

   
    req.user = user;
    console.log(user);
    next();

  } catch (error) {
    return res.status(500).json({
      message: " Server error",
      error: error.message,
    });
  }
};

export default loginAuth;
