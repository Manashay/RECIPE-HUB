require("dotenv").config({ path: "../.env" }); 
const mongoose = require("mongoose");
const axios = require("axios");
const Recipe = require("../models/recipes.js"); 

const searchCategories = [
    "Thalipeeth", "Kothimbir Vadi", "Sol Kadhi", "Malvani Fish Curry", "Sabudana Khichdi",
    "Sarson Ka Saag", "Amritsari Kulcha", "Mysore Pak"
];

const RECIPES_PER_QUERY = 1; 

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
const extractServings = (yieldString) => {
    if (!yieldString) return 1;
    const match = yieldString.match(/\d+/);
    return match ? parseInt(match[0], 10) : 1;
};

async function seedDiverseRecipes() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("✅ MongoDB Connection Successful\n");

        for (const query of searchCategories) {
            console.log(`\n🔍 Searching Cookpad for: "${query}"...`);

            try {
                // STEP 1: Search the API
                const searchResponse = await axios.get('https://cookpad-api.p.rapidapi.com/query-cookpad-recipes', {
                    params: { query: query, page: 1 },
                    headers: {
                        'x-rapidapi-key': process.env.RAPIDAPI_KEY,
                        'x-rapidapi-host': 'cookpad-api.p.rapidapi.com'
                    }
                });

                // THE FIX: Smartly handle the data whether it's an array directly or inside .recipes
                let searchResults = Array.isArray(searchResponse.data) 
                    ? searchResponse.data 
                    : (searchResponse.data.recipes || []);
                
                const topResults = searchResults.slice(0, RECIPES_PER_QUERY);
                
                if (topResults.length === 0) {
                    console.log(`⚠️ No results found for "${query}". Skipping...`);
                    continue; // Moves to the next keyword
                }

                // STEP 2: Fetch the deep details
                for (const item of topResults) {
                    // THE FIX: Grab the ID perfectly no matter what Cookpad calls it
                    const id = item.id || item.recipe_id;

                    if (!id) {
                        console.log(`⚠️ Could not find an ID for ${query}. Skipping...`);
                        continue;
                    }

                    const existingRecipe = await Recipe.findOne({ sourceId: id });
                    if (existingRecipe) {
                        console.log(`   ⏭️ Skipping ID ${id} (Already in DB)`);
                        continue;
                    }

                    console.log(`   ⬇️ Downloading detailed recipe for ID: ${id}...`);

                    const detailResponse = await axios.get('https://cookpad-api.p.rapidapi.com/get-detailed-cookpad-recipe', {
                        params: { id: id },
                        headers: {
                            'x-rapidapi-key': process.env.RAPIDAPI_KEY,
                            'x-rapidapi-host': 'cookpad-api.p.rapidapi.com'
                        }
                    });

                    const apiData = detailResponse.data.recipe;
                    if (!apiData) continue;

                    // Translate to Mongoose Schema
                    const formattedRecipe = {
                        sourceId: id,
                        title: apiData.title || item.title || query,
                        description: apiData.description || `An amazing ${query} recipe.`,
                        imageUrl: apiData.image || item.image_url || item.dish_image_url || 'https://images.unsplash.com/photo-1600335895229-6e75511892c8?w=500&q=80',
                        prepTime: item.cooking_time || "30 min", 
                        servings: extractServings(apiData.recipeYield),
                        calories: Math.floor(Math.random() * (600 - 200 + 1) + 200), 
                        ingredients: apiData.ingredients || [],
                        tags: apiData.keywords ? apiData.keywords.map(k => k.trim()) : [query],
                        instructions: apiData.instructions ? apiData.instructions.map((step, index) => ({
                            stepNumber: index + 1,
                            text: step.text || step.description || (typeof step === 'string' ? step : "No instruction provided")
                        })) : [],
                        rating: { average: 4.5, reviewCount: apiData.commentCount || 0 },
                        nutrition: [],
                        isFavorite: false
                    };

                    await Recipe.create(formattedRecipe);
                    console.log(`   ✅ Saved Successfully to Database: ${formattedRecipe.title}`);

                    await sleep(1500); 
                }

            } catch (searchErr) {
                console.error(`❌ Failed to process "${query}":`, searchErr.response?.data?.message || searchErr.message);
            }

            await sleep(2000); 
        }

        console.log("\n🎉 Database seeding finished!");
        process.exit(0);

    } catch (err) {
        console.error("Database connection error:", err.message);
        process.exit(1);
    }
}

seedDiverseRecipes();