import React, { useState, useEffect } from 'react';
// Make sure this path points exactly to your updated RecipeCards component
import RecipeCards from '../../RecipesComp/PopularRecipes/RecipeCards'; 
import FavRecipeCard from './FavRecipeCard';
import axios from 'axios';

const Favorites = () => {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Fetch data when the component loads
  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get('/api/recipes');
        
        // Filter out ONLY the ones where isFavorite is true
        const filteredFavorites = response.data.filter(
          (recipe) => recipe.isFavorite === true
        );
        
        setFavoriteRecipes(filteredFavorites);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching recipes:", error);
        setLoading(false);
      }
    };

    fetchFavorites();
  }, []);

  // 2. The function to toggle/remove a favorite
  const handleToggleFavorite = async (recipeId, newFavState) => {
    // If newFavState is false, instantly hide it from this page
    if (!newFavState) {
       setFavoriteRecipes(prev => prev.filter(recipe => recipe._id !== recipeId));
    }

    try {
      // Backend call to update MongoDB
      await axios.put(`/api/recipes/${recipeId}/favorite`, { isFavorite: newFavState });
    } catch (error) {
      console.error("Failed to update favorite in DB", error);
    }
  };

  if (loading) {
    return <h2>Loading your favorites...</h2>;
  }

  return (
    <div className="fav-recipes-grid">
      {favoriteRecipes.length === 0 ? (
        <h2>You haven't saved any favorites yet!</h2>
      ) : (
        favoriteRecipes.map(recipe => (
          <FavRecipeCard 
            key={recipe._id} 
            item={recipe} 
            handleRemoveFavorite={handleToggleFavorite} 
          />
        ))
      )}
    </div>
  );
};

export default Favorites;