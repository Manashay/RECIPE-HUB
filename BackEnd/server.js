require('dotenv').config();
const express = require("express");
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();

// ── Middleware ────────────────────────────────────────────────
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// ── Models ────────────────────────────────────────────────────
const FridgeItems = require('./models/FridegeSchema.js');

// ── Routes ────────────────────────────────────────────────────
app.use("/api/auth",    require("./routes/authRoutes"));
app.use("/api/recipes", require("./routes/recipeRoutes"));  // 🆕 all recipe routes

// ── Ingredients (stays here since no separate router yet) ─────
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