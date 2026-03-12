import jwt from "jsonwebtoken";
import User from "../models/User.js";

const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

const safeUser = (u) => ({ id: u._id, name: u.name, email: u.email, role: u.role });

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (await User.findOne({ email }))
      return res.status(400).json({ message: "Email already in use." });

    const user = await User.create({ name, email, password });
    res.status(201).json({ token: generateToken(user._id), user: safeUser(user) });
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

    res.json({ token: generateToken(user._id), user: safeUser(user) });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getMe = (req, res) => res.json({ user: safeUser(req.user) });