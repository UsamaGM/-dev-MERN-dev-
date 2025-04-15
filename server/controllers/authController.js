import jwt from "jsonwebtoken";
import User from "../models/User";
import crypto from "crypto";
import dotenv from "dotenv";
import { sendEmail } from "../services/emailService";

dotenv.config();

function generateToken(id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
}

async function registerUser(req, res) {
  try {
    const { email, password, role, name } = req.body;

    if (!email || !password || !role) {
      res
        .status(400)
        .json({ message: "Please provide email, password, and role" });
      return;
    }

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      typeof role !== "string"
    ) {
      res.status(400).json({ message: "Invalid input types" });
      return;
    }

    if (role !== "teacher" && role !== "student") {
      res.status(400).json({ message: "Invalid role" });
      return;
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      res.status(400).json({ message: "User already exists" });
      return;
    }

    const verificationToken = crypto.randomBytes(20).toString("hex");

    await User.create({
      email,
      password,
      role,
      name,
      verificationToken,
    });

    const verificationURL = `${req.protocol}://${req.get(
      "host"
    )}/api/auth/verify/${verificationToken}`;
    const emailHTML = `
        <p>Please click the following link to verify your email:</p>
        <a href="${verificationURL}">${verificationURL}</a>
      `;
    await sendEmail(email, "Verify Your Email", emailHTML);

    res.status(201).json({
      message: "User registered successfully.",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Please provide email and password" });
      return;
    }
    if (typeof email !== "string" || typeof password !== "string") {
      res.status(400).json({ message: "Invalid input types" });
      return;
    }

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      if (!user.isVerified) {
        res
          .status(400)
          .json({ message: "Please verify your email before logging in." });
        return;
      }
      res.json({
        _id: user._id.toString(),
        token: generateToken(user._id.toString()),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

async function verifyUser(req, res, next) {
  try {
    const token = req.params.token;
    const user = await User.findOne({ verificationToken: token });

    if (!user) {
      res.status(400).send("Invalid verification token.");
      return;
    }

    user.isVerified = true;
    user.verificationToken = undefined;
    await user.save();
    res.status(200).send("Email verified successfully. You can now login.");
  } catch (error) {
    next(error);
  }
}

async function forgotPassword(req, res) {
  try {
    const { email } = req.body;
    if (!email) {
      res.status(400).json({ message: "Please provide email" });
      return;
    }
    if (typeof email !== "string") {
      res.status(400).json({ message: "Invalid input types" });
      return;
    }
    const user = await User.findOne({ email });

    if (!user) {
      res.status(404).json({ message: "User not found" });
      return;
    }

    const resetToken = crypto.randomBytes(20).toString("hex");
    user.resetPasswordToken = resetToken;
    user.resetPasswordExpires = new Date(Date.now() + 3600000); // 1 hour
    await user.save();
    const resetURL = `${req.protocol}://${req.get(
      "host"
    )}/api/auth/reset-password/${resetToken}`;
    const emailHTML = `
      <p>You have requested to reset your password.  Please use the link below:</p>
      <a href="${resetURL}">${resetURL}</a>
    `;
    await sendEmail(email, "Password Reset Request", emailHTML);
    res
      .status(200)
      .json({ message: "Password reset link sent to your email." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}

async function resetPassword(req, res) {
  try {
    const { password } = req.body;
    if (!password) {
      res.status(400).json({ message: "Please provide password" });
      return;
    }
    if (typeof password !== "string") {
      res.status(400).json({ message: "Invalid input types" });
      return;
    }
    const user = await User.findOne({
      resetPasswordToken: req.params.token,
      resetPasswordExpires: { $gt: Date.now() },
    });

    if (!user) {
      res.status(400).json({ message: "Invalid or expired reset token" });
      return;
    }

    user.password = password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpires = undefined;
    await user.save();

    res.status(200).json({ message: "Password reset successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
}

async function getCurrentUser(req, res) {
  try {
    res.status(200).json(req.user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error." });
  }
}

export {
  registerUser,
  loginUser,
  verifyUser,
  forgotPassword,
  resetPassword,
  getCurrentUser,
};
