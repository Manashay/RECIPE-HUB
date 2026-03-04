import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipesHero from '../Components/RecipesComp/RecipesHero/RecipesHero.jsx';
import RecipeCategories from '../Components/RecipesComp/Categories/RecipeCategories.jsx';
import PopularRecipes from '../Components/RecipesComp/PopularRecipes/PopularRecipes.jsx';
import RecommendationSection from '../Components/RecipesComp/RecommendationSection/RecommendationSection.jsx';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                let response = await axios.get('/api/recipes');
                setRecipes(response.data);
            } catch (error) {
                console.log("Error Occured", error.message);
            }
        };
        fetchRecipes();
    }, []);

    // 1. ADD THIS FUNCTION: It talks to your DB and updates the local state
    const handleToggleFavorite = async (recipeId, newFavState) => {
        try {
            // Update the database (Make sure this URL matches your Express route)
            await axios.put(`/api/recipes/${recipeId}`, { isFavorite: newFavState });
            
            // Update the local state so the UI reacts instantly
            setRecipes(prevRecipes => 
                prevRecipes.map(recipe => 
                    recipe._id === recipeId ? { ...recipe, isFavorite: newFavState } : recipe
                )
            );
        } catch (error) {
            console.error("Failed to update favorite status:", error);
        }
    };

    return (
        <div>
            <RecipesHero />
            <RecipeCategories />
            {/* 2. PASS THE FUNCTION DOWN AS A PROP */}
            <PopularRecipes recipes={recipes} onToggleFavorite={handleToggleFavorite} />
            <RecommendationSection recipes={recipes} onToggleFavorite={handleToggleFavorite} />
        </div>
    )
}

export default Recipes;