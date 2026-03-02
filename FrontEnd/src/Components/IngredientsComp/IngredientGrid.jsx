import React from 'react';
import { Search, ChevronDown, ChevronUp } from 'lucide-react';
import './IngredientItems.css';

const IngredientGrid = ({
  ingredients,
  selectedIngredients,
  onToggle,
  searchTerm,
  setSearchTerm,
  isMaxIngredients,
  hasMeat,
  hasSweet,
  showAll,
  setShowAll
}) => {
  return (
    <div className="ingredients-section-body">
      {/* 1. The Search Bar remains at the top */}
      <div className="ingredient-search-wrapper">
        <Search size={18} color="#718096" />
        <input
          type="text"
          placeholder="Search ingredients..."
          className="ingredient-search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* 2. REPLACE THE OLD GRID DIV WITH THIS ONE */}
      <div
        className={`ingredients-grid scrolleffect ${showAll ? 'expanded' : 'collapsed'}`}
        style={{
          // 1. When collapsed: No scrollbar, fits exactly 9 items (3 rows)
          // 2. When expanded: Fixed height with a scrollbar
          // 3. When searching: We usually want to see all results with a scrollbar
          maxHeight: (showAll || searchTerm) ? '420px' : 'none',
          overflowY: (showAll || searchTerm) ? 'auto' : 'hidden',

          // Ensure the grid stays consistent
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          padding: '5px'
        }}
      >
        {ingredients.map(ing => {
          const isSelected = selectedIngredients.includes(ing._id);
          let isDisabled = (!isSelected && isMaxIngredients) ||
            (hasMeat && ing.category === 'sweet') ||
            (hasSweet && ing.category === 'meat');

          return (
            <div
              key={ing._id}
              className={`ingredient-card ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
              onClick={() => {
                if (!isDisabled) {
                  onToggle(ing._id);
                  setSearchTerm('');
                }
              }}
            >
              <span className="ingredient-emoji">{ing.icon}</span>
              <p className="ingredient-name">{ing.name}</p>
            </div>
          );
        })}
      </div>

      {/* 3. The View More button stays below the grid */}
      {!searchTerm && ingredients && (
        <button className="view-more-btn" onClick={() => setShowAll(!showAll)}>
          {showAll ? <>Show Less <ChevronUp size={16} /></> : <>View More <ChevronDown size={16} /></>}
        </button>
      )}
    </div>
  );
};

export default IngredientGrid;