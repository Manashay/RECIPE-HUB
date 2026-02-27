import React from 'react';
import { Clock, Users, Flame, Heart, Star } from 'lucide-react';
import './RecommendationSection.css';
import RecipeCards from './RecipeCards.jsx';


const RecommendationSection = ({recipes}) => {

  return (
    <section className="recommendation-section">
      <div className="recommendation-container">
        <h2 className="recommendation-title">You Might Also Like</h2>
        
        <div className="recommendation-grid">
          {recipes.slice(0,9).map((item) => (
            <RecipeCards  key={item._id} item={item}/>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecommendationSection;