import crypto from "crypto";
import User from "../models/userModel.js";
import sendEmail from "../config/mail.js";

const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Generate token
    const resetToken = crypto.randomBytes(32).toString("hex");

    // Hash token before saving
    user.resetPasswordToken = crypto
      .createHash("sha256")
      .update(resetToken)
      .digest("hex");

    user.resetPasswordExpire = Date.now() + 15 * 60 * 1000; // 15 min

    await user.save();

    const resetUrl = `http://localhost:5173/reset-password/${resetToken}`;

    await sendEmail({
      to: user.email,
      subject: "Password Reset",
      html: `
        <p>You requested a password reset</p>
        <a href="${resetUrl}">Reset Password</a>
        <p>This link expires in 15 minutes</p>
      `,
    });

    res.status(200).json({ message: "Reset link sent to email" });

  } catch (error) {
    res.status(500).json({
      message: "Forgot password error",
      error: error.message,
    });
  }
};

export default forgotPassword;
