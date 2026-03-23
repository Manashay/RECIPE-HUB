import 'dotenv/config';
import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Helper for JWT and Cookie
const sendTokenResponse = (user, statusCode, res) => {
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });

  const parseDuration = (str) => {
    const units = { s: 1, m: 60, h: 3600, d: 86400 };
    const match = str.match(/^(\d+)([smhd])$/);
    return match
      ? parseInt(match[1]) * units[match[2]] * 1000
      : 24 * 3600 * 1000;
  };

  const cookieOptions = {
    // Converts "30d" or "1d" style strings to milliseconds
    expires: new Date(Date.now() + parseDuration(process.env.JWT_EXPIRES_IN)),
    httpOnly: true, // Shields token from XSS
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
  };

  res
    .status(statusCode)
    .cookie("token", token, cookieOptions)
    .json({
      success: true,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
};

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (await User.findOne({ email }))
      return res.status(400).json({ message: "Email already in use." });

    const user = await User.create({ name, email, password });
    sendTokenResponse(user, 201, res);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select("+password");
    if (!user || !(await user.matchPassword(password)))
      return res.status(401).json({ message: "Invalid email or password." });

    sendTokenResponse(user, 200, res);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const logout = (req, res) => {
  res.cookie("token", "none", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });
  res.status(200).json({ message: "Logged out successfully" });
};

export const getMe = (req, res) => res.json({ user: req.user });
