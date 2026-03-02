require('dotenv').config();
const express = require("express");
const app = express();
const cors = require('cors');
app.use(cors())
const Port = process.env.PORT;

const RecipesData = require('./models/recipes.js');
const FridgeItems = require('./models/FridegeSchema.js');

const mongoose = require('mongoose');
const MongoUrl = process.env.MONGO_URL;

main().then(() => {
    console.log("Connection successful");
}).catch((err) => {
    console.log("Error occure", err.message);
})

async function main() {
    mongoose.connect(MongoUrl);
}

// Fridge items
app.get('/api/ingredients', async (req, res) => {
    try {
        const allIngredients = await FridgeItems.find({});
        setTimeout(() => {
            res.json(allIngredients);
        }, 100);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Recipes data
app.get('/api/recipes', async (req, res) => {
    try {
        const allRecipes = await RecipesData.find({});
        setTimeout(() => {
            res.json(allRecipes);
        }, 100);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// Recipe Data using id
app.get('/api/recipeDetails/:id', async (req, res) => {
    try {
        let {id} = req.params;
        const recipe = await RecipesData.findById(id);

        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        res.json(recipe);
    } catch (error) {
        res.status(500).json({ message: "Server Error" });
    }
});

// Breakfast Recipes
app.get('/api/recipeList', async (req, res) => {
    try {
        const { mealType } = req.query; 
        const recipes = await RecipesData.find({tags : `${mealType}`});
        // If no recipes found, you can return an empty array or a message
        res.json(recipes);
    } catch (error) {
        // Log the error for you, but send a clean message to the user
        console.error("Error Occurred: ", error.message);
        res.status(500).json({ message: "Server error fetching recipes" });
    }
});

app.listen(Port, () => {
    console.log("Listening on port :", Port)
});  