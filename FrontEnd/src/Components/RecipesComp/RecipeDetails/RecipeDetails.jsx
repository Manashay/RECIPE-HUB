import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Clock, Users, Flame, Heart, Plus, Star,
  Facebook, Twitter, Linkedin, Paperclip
} from 'lucide-react';
import './RecipeDetails.css';
import RatingStars from '../../Helper/RatingStars';

const RecipeDetail = () => {

  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(`/api/recipeDetails/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.log("Error Occured", error.message);
      }
    }
    fetchData();
  }, [id]);

  return (
    <section className="recipe-detail-container">
      <div className="recipe-content-wrapper">

        {/* Left Column: Image & Overlays */}
        <div className="recipe-visual-column">
          <div className="main-image-wrapper">
            <img
              src={recipe?.imageUrl}
              alt={recipe?.title}
              className="recipe-main-image"
            />

            {/* Top Green Info Bar */}
            <div className="image-info-bar">
              <div className="info-badge">
                <Clock size={16} /> <span>{recipe?.prepTime}</span>
              </div>
              <div className="info-badge">
                <Users size={16} /> <span>{recipe?.servings} Servings</span>
              </div>
              <div className="info-badge">
                <Flame size={16} /> <span>{recipe?.calories}</span>
              </div>
            </div>

            {/* Floating Heart Button */}
            <button className="favorite-btn">
              <Heart size={20} color="#194128" />
            </button>
          </div>
        </div>

        {/* Right Column: Details & Nutrition */}
        <div className="recipe-info-column">
          <div className="tags-row">
            {recipe?.tags.map((tag)=>(
              <span className="recipe-tag">{tag}</span>
            ))}
          </div>

          <h1 className="recipe-main-title">{recipe?.title}</h1>

          <div className="action-rating-row">
            <button className="add-planner-btn">
              Add to my meal planner <Plus size={18} />
            </button>
            <div className="rating-summary">
              <div className="stars-group">
                {/* {[...Array(4)].map((_, i) => <Star key={i} size={14} fill="#EC5833" color="#EC5833" />)}
                <Star size={14} color="#EC5833" /> */}
                <RatingStars rating={recipe?.rating.average} />
              </div>  
              <span className="review-count">{recipe?.rating.reviewCount}</span>
            </div>
          </div>

          <p className="recipe-description">
            {recipe?.description}
          </p>

          <div className="nutrition-header">
            <h3>Nutrition:</h3>
            <div className="calories-badge">
              <Flame size={16} /> {recipe?.calories} kcal
            </div>
          </div>

          <div className="nutrition-grid">
            {recipe?.nutrition.map((item, index) => (
              <div key={index} className="nutrition-box">
                <span className="nutri-label">{item.label}</span>
                <span className="nutri-value">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="share-section">
            <span>Share recipe</span>
            <div className="social-icons">
              <div className="social-circle"><Facebook size={14} /></div>
              <div className="social-circle"><Twitter size={14} /></div>
              <div className="social-circle"><Linkedin size={14} /></div>
              <div className="social-circle"><Paperclip size={14} /></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RecipeDetail;