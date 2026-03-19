import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import authRoutes from './routes/authRoutes.js';
import recipeRoutes from './routes/recipeRoutes.js';
import aiRoutes from './routes/aiRoutes.js';
import FridgeItems from './models/FridegeSchema.js';
import cookieParser from "cookie-parser";

const app = express();

// ── Middleware ────────────────────────────────────────────────
app.use(cors({ origin: "http://localhost:5173",credentials: true, })); // ← Vite runs on 5173, not 3000
app.use(express.json());
app.use(cookieParser()); // ← without this, req.cookies is always undefined
app.disable('x-powered-by');

// ── Routes ────────────────────────────────────────────────────
app.use("/api/auth", authRoutes);       // ← was aiRoutes, now fixed
app.use("/api/recipes", recipeRoutes);
app.use('/api', aiRoutes);

// ── Ingredients ───────────────────────────────────────────────
app.get('/api/ingredients', async (req, res) => {
  try {
    const allIngredients = await FridgeItems.find({});
    res.json(allIngredients);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// ── Start Server ──────────────────────────────────────────────
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(process.env.PORT, () => {
      console.log(`Server running on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err.message);
    process.exit(1);
  });