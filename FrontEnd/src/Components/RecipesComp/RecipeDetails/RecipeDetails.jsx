import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DOMPurify from 'dompurify';
import axios from 'axios';
import {
  Clock, Users, Flame, Heart, Plus, Star,
  Facebook, Twitter, Linkedin, Paperclip,
  Pencil, Trash2                              // 🆕
} from 'lucide-react';
import './RecipeDetails.css';
import RatingStars from '../../Helper/RatingStars';
import { useAuth } from '../../../Context/AuthContext.jsx';  // 🆕

const RecipeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();                            // 🆕
  const { user } = useAuth();                               // 🆕
  const [recipe, setRecipe] = useState(null);
  const [deleteModal, setDeleteModal] = useState(false);    // 🆕
  const [deleting, setDeleting] = useState(false);          // 🆕

  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await axios.get(`/api/recipes/${id}`) ;
        setRecipe(response.data);
      } catch (error) {
        console.log("Error Occured", error.message);
      }
    }
    fetchData();
  }, [id]);

  const isValidUrl = (url) => {
  if (!url || typeof url !== 'string') return false; // blocks null/undefined
  try {
    const parsed = new URL(url);
    return ['http:', 'https:'].includes(parsed.protocol); // blocks javascript:, data:, etc.
  } catch {
    return false; // blocks malformed URLs
  }
};

  // 🆕 Delete handler
  const handleDelete = async () => {
    setDeleting(true);
    try {
      await axios.delete(`/api/recipes/${id}`);
      navigate('/recipes');
    } catch (err) {
      console.error("Delete failed:", err.message);
      setDeleting(false);
    }
  };

  return (
    <section className="recipe-detail-container">
      <div className="recipe-content-wrapper">

        {/* Left Column: Image & Overlays */}
        <div className="recipe-visual-column">
          <div className="main-image-wrapper">
            <img
              src={isValidUrl(recipe?.imageUrl) ? DOMPurify.sanitize(recipe.imageUrl) : ''}
              alt={recipe?.title}
              className="recipe-main-image"
            />

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

            <button className="favorite-btn">
              <Heart size={20} color="#194128" />
            </button>
          </div>

          {/* 🆕 Admin action buttons under the image */}
          {user?.role === 'admin' && (
            <div className="admin-actions">
              <button
                className="admin-btn admin-btn-edit"
                onClick={() => navigate(`/recipes/edit/${id}`)}
              >
                <Pencil size={15} /> Edit Recipe
              </button>
              <button
                className="admin-btn admin-btn-delete"
                onClick={() => setDeleteModal(true)}
              >
                <Trash2 size={15} /> Delete Recipe
              </button>
            </div>
          )}
        </div>

        {/* Right Column */}
        <div className="recipe-info-column">
          <div className="tags-row">
            {recipe?.tags?.map((tag) => (
              <span key={tag} className="recipe-tag">{tag}</span>
            ))}
          </div>

          <h1 className="recipe-main-title">{recipe?.title}</h1>

          <div className="action-rating-row">
            <button className="add-planner-btn">
              Add to my meal planner <Plus size={18} />
            </button>
            <div className="rating-summary">
              <div className="stars-group">
                <RatingStars rating={recipe?.rating.average} />
              </div>
              <span className="review-count">{recipe?.rating.reviewCount}</span>
            </div>
          </div>

          <p className="recipe-description">{recipe?.description}</p>

          <div className="nutrition-header">
            <h3>Nutrition:</h3>
            <div className="calories-badge">
              <Flame size={16} /> {recipe?.calories} kcal
            </div>
          </div>

          <div className="nutrition-grid">
            {recipe?.nutrition?.map((item, index) => (
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

      {/* 🆕 Delete Confirmation Modal */}
      {deleteModal && (
        <div className="modal-overlay" onClick={() => setDeleteModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <div className="modal-icon">
              <Trash2 size={28} color="#e53e3e" />
            </div>
            <h3 className="modal-title">Delete Recipe?</h3>
            <p className="modal-desc">
              Are you sure you want to delete <strong>{recipe?.title}</strong>?
              This action cannot be undone.
            </p>
            <div className="modal-actions">
              <button
                className="modal-btn modal-btn-cancel"
                onClick={() => setDeleteModal(false)}
                disabled={deleting}
              >
                Cancel
              </button>
              <button
                className="modal-btn modal-btn-confirm"
                onClick={handleDelete}
                disabled={deleting}
              >
                {deleting ? <span className="auth-spinner" /> : "Yes, Delete"}
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default RecipeDetail;