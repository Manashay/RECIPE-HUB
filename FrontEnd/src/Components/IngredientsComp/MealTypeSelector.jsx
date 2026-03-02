import React from 'react';
import { Check } from 'lucide-react';

const MealTypeSelector = ({ mealTypes, selectedMeal, onSelect, hasMeat }) => {
  return (
    <div className="meal-wrapper">
      {mealTypes.map(meal => {
        const isSelected = selectedMeal === meal.name;
        const isDisabled = hasMeat && (meal.name === 'Dessert' || meal.name === 'Drink');

        return (
          <button
            key={meal.name}
            className={`meal-card-btn ${isSelected ? 'selected' : 'unselected'} ${isDisabled ? 'disabled' : ''}`}
            onClick={() => !isDisabled && onSelect(meal.name)}
          >
            {isSelected && (
              <div className="check-badge">
                <Check size={16} color="#FFFFFF" strokeWidth={4} />
              </div>
            )}
            <div className="meal-icon-circle">
              <img src={meal.icon} width="35" alt={meal.name} />
            </div>
            <p className="meal-text">{meal.name}</p>
          </button>
        );
      })}
    </div>
  );
};

export default MealTypeSelector;