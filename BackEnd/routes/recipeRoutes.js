const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const RecipesData = require("../models/recipes.js");
const { protect, restrictTo } = require("../middleware/authMiddleware");
const axios = require("axios");

// 1. GET all recipes
router.get("/", async (req, res) => {
    try {
        const allRecipes = await RecipesData.find({});
        res.json(allRecipes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// 2. GET recipes by meal type
router.get("/list", async (req, res) => {
    try {
        const { mealType } = req.query;
        const recipes = await RecipesData.find({ tags: mealType });
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ message: "Server error fetching recipes" });
    }
});

// 3. GET dashboard counts (Moved UP to avoid the wildcard trap!)
router.get("/dashboard/counts", async (req, res) => {
    try {
        const [favCount, totalRecipes] = await Promise.all([
            RecipesData.countDocuments({ isFavorite: true }),
            RecipesData.countDocuments({}) 
        ]);

        res.json({
            favorites: favCount,
            myRecipes: totalRecipes,
            shoppingList: 0, 
            mealPlanner: 0
        });
    } catch (err) {
        res.status(500).json({ message: "Error fetching dashboard counts" });
    }
});

// 4. GET test Cookpad (Moved UP to avoid the wildcard trap!)
router.get('/test-cookpad/:id', async (req, res) => {
    try {
        const cookpadRecipeId = req.params.id;
        const response = await axios.get('https://cookpad-api.p.rapidapi.com/get-detailed-cookpad-recipe', {
            params: { id: cookpadRecipeId },
            headers: {
                'x-rapidapi-key': process.env.RAPIDAPI_KEY, 
                'x-rapidapi-host': 'cookpad-api.p.rapidapi.com'
            }
        });
        res.status(200).json(response.data);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch from RapidAPI", error: error.message });
    }
});

// 5. GET single recipe by ID (Moved DOWN. Now it's a safe wildcard!)
router.get("/:id", async (req, res) => {
    try {
        const recipe = await RecipesData.findById(req.params.id);
        if (!recipe) return res.status(404).json({ message: "Recipe not found" });
        res.json(recipe);
    } catch (err) {
        res.status(500).json({ message: "Server error" });
    }
});

// 6. POST add new recipe — admin only
router.post("/", protect, restrictTo("admin"), async (req, res) => {
    try {
      const recipe = await RecipesData.create(req.body);
      res.status(201).json(recipe);
    } catch (err) {
      res.status(500).json({ message: "Server error", error: err.message });
    }
});

// 7. PUT update a recipe's favorite status
router.put('/:id/favorite', async (req, res) => {
    try {
        const recipeId = req.params.id;
        const { isFavorite } = req.body;

        const updatedRecipe = await RecipesData.findByIdAndUpdate(
            recipeId,
            { isFavorite: isFavorite },
            { new: true } 
        );

        if (!updatedRecipe) return res.status(404).json({ message: "Recipe not found" });
        res.status(200).json(updatedRecipe);
        
    } catch (error) {
        res.status(500).json({ message: "Server error while updating favorite status" });
    }
});

// 8. PUT update recipe — admin only (Moved DOWN)
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

// 9. DELETE recipe — admin only
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