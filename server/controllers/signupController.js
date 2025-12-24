import User from "../models/userModel.js";
import bcrypt from "bcryptjs";

const signupController = async (req, res) => {
  try {
    const { username, email, password, adminKey,roles } = req.body;

    
    if (!username || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    if (password.length < 6) {
      return res.status(400).json({
        message: "Password must be at least 6 characters long",
      });
    }

    
    let role =roles

   

    
    const hashedPassword = await bcrypt.hash(password, 10);

   
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      role, 
    });

    await newUser.save();

    return res.status(201).json({
      message: "User registered successfully",
      user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        role: newUser.role,
      },
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

export default signupController;
