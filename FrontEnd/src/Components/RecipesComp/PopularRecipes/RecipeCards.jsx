import RatingStars from '../../Helper/RatingStars.jsx';
import { Clock, Users, Flame, Heart, Star } from 'lucide-react';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeCards = React.memo(({ item, initiallyFavorite, onToggleFavorite }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(initiallyFavorite);

  const onCardClick = () => {
    navigate(`/recipeDetails/${item._id}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Stops the card from navigating to the details page!
    
    const newFavState = !isFavorite;
    setIsFavorite(newFavState);
    
    if (onToggleFavorite) {
      onToggleFavorite(item._id, newFavState); 
    }
  };

  return (
    <div onClick={onCardClick} className="rec-card">
      <div className="rec-image-wrapper">
        <img src={item.imageUrl} alt={item.title} className="rec-image" />
        <button className="rec-heart-btn" onClick={handleFavoriteClick}>
          <Heart 
            size={18} 
            color="#194128" 
            fill={isFavorite ? "#194128" : "transparent"} 
          />
        </button>
      </div>

      <div className="rec-content">
        <h3 className="rec-card-title">{item.title}</h3>

        <div className="rec-meta">
          <div className="rec-meta-item">
            <Clock size={14} className="rec-icon" /> {item.prepTime}
          </div>
          <div className="rec-meta-item">
            <Users size={14} className="rec-icon" /> {item.servings}
          </div>
          <div className="rec-meta-item">
            <Flame size={14} className="rec-icon" /> {item.calories} Cal
          </div>
        </div>

        <div className="rec-footer">
          {/* Tag Pills Container */}
          <div className="rec-tags-container">
            {item.tags && item.tags.slice(0, 1).map((tag, index) => (
              <span key={index} className="rec-tag">
                {tag}
              </span>
            ))}
            {/* Show +X if there are more tags */}
            {item.tags && item.tags.length > 1 && (
              <span className="rec-tag extra-tag">
                +{item.tags.length - 1}
              </span>
            )}
          </div>

          {/* Rating Container */}
          <div className="rec-rating">
            <RatingStars rating={item.rating.average} />
            <span className="rec-review-text">{item.rating.reviewCount} Reviews</span>
          </div>
        </div>
      </div>
    </div>
  );
});

export default RecipeCards;