import React from 'react';
import { Heart, Clock, Users, Flame, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../Favorites.css';

const FavRecipeCard = ({ item, handleRemoveFavorite }) => {
  const navigate = useNavigate();

  // 1. Same logic as RecipeCard: Check the truth from the database
  const isFavorite = item.isFavorite === true;

  // 2. Navigation logic
  const onCardClick = () => {
    navigate(`/recipeDetails/${item._id}`);
  };

  const handleFavoriteClick = (e) => {
    e.stopPropagation(); // Stops navigation when clicking the heart
    
    // In the Favorites page, we usually just want to remove it
    if (handleRemoveFavorite) {
      handleRemoveFavorite(item._id, !isFavorite); 
    } else {
      console.warn("handleRemoveFavorite function is missing!");
    }
  };

  const ratingAvg = item.rating?.average || 0;
  const reviewCount = item.rating?.reviewCount || 0;

  return (
    <div onClick={onCardClick} className="fav-card" style={{ cursor: 'pointer' }}>
      
      {/* Image & Heart Button */}
      <div className="fav-card-image-wrapper">
        <img src={item.imageUrl} alt={item.title} className="fav-card-image" />
        <button 
          className="fav-btn" 
          title="Remove From Favorites"
          onClick={handleFavoriteClick}
        >
          {/* Heart is FILLED to indicate it is a favorite */}
          <Heart size={16} fill="#194128" color="#194128" strokeWidth={2.5} />
        </button>
      </div>

      {/* Content */}
      <h4 className="fav-card-title">{item.title}</h4>
      
      {/* Meta Info Row */}
      <div className="fav-meta-row">
        <div className="fav-meta-item">
          <Clock size={14} /> {item.prepTime}
        </div>
        <div className="fav-meta-item">
          <Users size={14} /> {item.servings}
        </div>
        <div className="fav-meta-item">
          <Flame size={14} /> {item.calories}
        </div>
      </div>

      {/* Footer */}
      <div className="rec-footer">
        <div className="rec-tags-container">
          {item.tags && item.tags.slice(0, 1).map((tag, index) => (
            <span key={index} className="rec-tag">{tag}</span>
          ))}
          {item.tags && item.tags.length > 1 && (
            <span className="rec-tag extra-tag">+{item.tags.length - 1}</span>
          )}
        </div>

        <div className="rec-rating">
          <div className="fav-stars-row">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star 
                key={star} 
                size={12} 
                fill={star <= ratingAvg ? '#F0542E' : "transparent"} 
                color={star <= ratingAvg ? '#F0542E' : '#E2E8F0'} 
              />
            ))}
          </div>
          <span className="rec-review-text">{reviewCount} Reviews</span>
        </div>
      </div>
    </div>
  );
};

export default FavRecipeCard;