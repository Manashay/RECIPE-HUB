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

// ==========================================
// NEW: PUT route to update a recipe's favorite status
// Path changed to /:id/favorite to avoid conflict with admin PUT route
// ==========================================
router.put('/:id/favorite', async (req, res) => {
    try {
        const recipeId = req.params.id;
        const { isFavorite } = req.body;

        // FIXED: Changed "Recipe" to "RecipesData" to match your import at the top
        const updatedRecipe = await RecipesData.findByIdAndUpdate(
            recipeId,
            { isFavorite: isFavorite },
            { new: true } 
        );

        if (!updatedRecipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }

        res.status(200).json(updatedRecipe);
        
    } catch (error) {
        console.error("Error updating recipe:", error);
        res.status(500).json({ message: "Server error while updating favorite status" });
    }
});

router.get("/dashboard/counts", async (req, res) => {
    try {
        // Run counts in parallel
        const [favCount, totalRecipes] = await Promise.all([
            RecipesData.countDocuments({ isFavorite: true }),
            RecipesData.countDocuments({}) // Currently maps to "My Recipes"
        ]);

        res.json({
            favorites: favCount,
            myRecipes: totalRecipes,
            shoppingList: 0, // Placeholder until we build the Grocery List schema
            mealPlanner: 0
        });
    } catch (err) {
        res.status(500).json({ message: "Error fetching dashboard counts" });
    }
});

module.exports = router;