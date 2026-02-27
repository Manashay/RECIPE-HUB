const mongoose = require('mongoose');
const schema = mongoose.Schema;

const NutritionSchema = new mongoose.Schema({
    label: { type: String, required: true },
    value: { type: String, required: true },
});

// New sub-schema for Ingredients
const IngredientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    quantity: { type: Number, required: true }, // Store as Number to allow scaling based on servings
    unit: { type: String, default: 'pcs' },    // e.g., 'grams', 'cups', 'tbsp'
    added: { 
        type: Boolean, 
        default: false 
    }
});

const recipesSchema = new schema({
    title: {
        type: String,
        required: [ true, 'Recipe title is Required'],
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        default: 'https://images.unsplash.com/photo-1600335895229-6e75511892c8',
    },
    prepTime: { type: String, default: '0 min' },
    servings: { type: Number, default: 1 },
    calories: { type: Number, default: 0 },

    ingredients: [IngredientSchema],

    tags: [{
        type: String
    }],

    // Updated: Steps section
    instructions: [{
        stepNumber: { type: Number },
        text: { type: String, required: true }
    }],

    // Social & Rating
    rating: {
        average: { type: Number, default: 0, min: 0, max: 5 },
        reviewCount: { type: Number, default: 0 }
    },

    // Detailed Nutrition Grid
    nutrition: [NutritionSchema],

    // Status
    isFavorite: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now }
});

const Recipe = mongoose.model("Recipe", recipesSchema);

module.exports = Recipe;