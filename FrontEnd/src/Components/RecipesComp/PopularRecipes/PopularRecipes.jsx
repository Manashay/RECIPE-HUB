import React from 'react';
import { Clock, Users, Flame, Heart, Star } from 'lucide-react';
import './PopularRecipes.css';
import RecipeCards from './RecipeCards.jsx';
// Remember to add onToggleFavorite to the arguments here!
// Notice we added onToggleFavorite to the arguments here!
const RecommendationSection = ({ recipes, onToggleFavorite }) => {
  return (
    <section className="recommendation-section">
      <div className="recommendation-container">
        <h2 className="recommendation-title">Popular Recipes</h2>
        
        <div className="recommendation-grid">
          {recipes.slice(0,9).map((item) => (
            <RecipeCards  
              key={item._id} 
              item={item}
              // THIS LINE IS CRITICAL:
              onToggleFavorite={onToggleFavorite} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationSection;