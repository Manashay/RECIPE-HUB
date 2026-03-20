import React, { useState, useEffect, useRef } from 'react';
import { Search, Clock, Flame } from 'lucide-react'; // Added Clock and Flame for the dropdown
import { useNavigate } from 'react-router-dom'; // Added for navigation
import axios from 'axios'; // Added to fetch data
import './RecipesHero.css';

const RecipesHero = () => {

  // --- 🆕 ADDED SEARCH STATE & LOGIC ---
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Fetch suggestions when user types
  useEffect(() => {
    const fetchSuggestions = async () => {
      if (searchTerm.trim().length > 1) {
        try {
          const response = await axios.get(`/api/recipes/search?q=${searchTerm}`);
          setSuggestions(response.data);
          setShowDropdown(true);
        } catch (error) {
          console.error("Error fetching suggestions:", error);
        }
      } else {
        setShowDropdown(false);
        setSuggestions([]);
      }
    };

    const delayDebounceFn = setTimeout(() => {
      fetchSuggestions();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  // Close dropdown if user clicks outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Navigate to Recipe Details when a suggestion is clicked
  const handleSuggestionClick = (recipeId) => {
    setShowDropdown(false);
    setSearchTerm('');
    navigate(`/recipeDetails/${recipeId}`); // Make sure this matches your Route path!
  };
  // -------------------------------------

  const popularTags = ['Indian', 'Western', 'Healthy', 'Snacks'];

  return (
    <section className="recipes-hero-wrapper">
      <div className="recipes-hero-card">
        
        {/* Title Content */}
        <h1 className="recipes-hero-title">
          Explore Over 50,000+ Unique Low-Carb Recipes
        </h1>

        {/* Search Bar - 🆕 Wrapped in a relative div for the dropdown */}
        <div className="search-wrapper" ref={dropdownRef} style={{ position: 'relative', width: '100%' }}>
          <div className="search-container">
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search recipes" 
              value={searchTerm}                                   // 🆕 Added value
              onChange={(e) => setSearchTerm(e.target.value)}      // 🆕 Added onChange
              onFocus={() => { if (suggestions.length > 0) setShowDropdown(true) }} // 🆕 Re-opens on click
            />
            <button className="search-button">
              <Search size={20} color="#FFFFFF" />
            </button>
          </div>

          {/* 🆕 ADDED DROPDOWN MENU */}
          {showDropdown && (
            <div className="search-dropdown">
              {suggestions.length > 0 ? (
                suggestions.map((recipe) => (
                  <div 
                    key={recipe._id} 
                    className="suggestion-item"
                    onClick={() => handleSuggestionClick(recipe._id)}
                  >
                    <img src={recipe.imageUrl} alt={recipe.title} className="suggestion-img" />
                    <div className="suggestion-info">
                      <h4>{recipe.title}</h4>
                      <div className="suggestion-meta">
                        <span><Clock size={12} /> {recipe.prepTime}</span>
                        <span><Flame size={12} /> {recipe.calories} kcal</span>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="suggestion-no-results">
                  No recipes found for "{searchTerm}"
                </div>
              )}
            </div>
          )}
        </div>

        {/* Popular Tags Section */}
        <div className="tags-section">
          <p className="tags-label">Can't think of anything? Try these popular tags</p>
          <div className="tags-list">
            {popularTags.map((tag) => (
              <button 
                key={tag} 
                className="tag-pill"
                onClick={() => setSearchTerm(tag)} // 🆕 Clicking a tag fills the search bar!
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default RecipesHero;