import RatingStars from '../../Helper/RatingStars.jsx';
import { Clock, Users, Flame, Heart, Star } from 'lucide-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecipeCards = React.memo(({ item }) => {
  
  const navigate = useNavigate();

  const onCardClick=() =>{
    console.log("Card was clicked! ID:", item._id);
    navigate(`/recipeDetails/${item._id}`);
  };

  return (
    <div key={item._id} onClick={onCardClick} className="rec-card">
      <div className="rec-image-wrapper">
        <img src={item.imageUrl} alt={item.title} className="rec-image" />
        <button className="rec-heart-btn">
          <Heart size={18} color="#194128" />
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
            <Flame size={14} className="rec-icon" /> {item.calories}
          </div>
        </div>

        <div className="rec-footer">
          <span className="rec-tag">
            {item.tags.slice(0, 2).map((tag) => (
              tag + "/"
            ))}
            {"..."}
          </span>
          <div className="rec-rating">
            <RatingStars rating={item.rating.average} />
            <span>{item.rating.reviewCount} Reviews</span>
          </div>
        </div>
      </div>
    </div>

  )
});

export default RecipeCards;