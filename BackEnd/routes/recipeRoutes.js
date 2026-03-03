const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const RecipesData = require("../models/recipes.js");
const { protect, restrictTo } = require("../middleware/authMiddleware");

// GET all recipes
router.get("/", async (req, res) => {
    try {
        const allRecipes = await RecipesData.find({});
        res.json(allRecipes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// POST — admin only
// POST add new recipe — admin only
router.post("/", protect, restrictTo("admin"), async (req, res) => {
    try {
      const recipe = await RecipesData.create(req.body);
      res.status(201).json(recipe);
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
  });
  
// GET recipes by meal type
router.get("/list", async (req, res) => {
    try {
        const { mealType } = req.query;
        const recipes = await RecipesData.find({ tags: mealType });
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ message: "Server error fetching recipes" });
    }
});

// GET single recipe by ID
router.get("/:id", async (req, res) => {
    try {
        const recipe = await RecipesData.findById(req.params.id);
        if (!recipe) return res.status(404).json({ message: "Recipe not found" });
        res.json(recipe);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// PUT update recipe — admin only
router.put("/:id", protect, restrictTo("admin"), async (req, res) => {
    try {
        const recipe = await RecipesData.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true }
        );
        if (!recipe) return res.status(404).json({ message: "Recipe not found" });
        res.json(recipe);
    } catch (err) {
        res.status(500).json({ message: "Server error", error: err.message });
    }
});


// DELETE recipe — admin only
router.delete("/:id", protect, restrictTo("admin"), async (req, res) => {
    try {
        const recipe = await RecipesData.findByIdAndDelete(req.params.id);
        if (!recipe) return res.status(404).json({ message: "Recipe not found" });
        res.json({ message: "Recipe deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;