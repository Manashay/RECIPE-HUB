import React from 'react';
import { Check } from 'lucide-react';

const SelectionPills = ({ options, selectedValues, onSelect, disabledCheck }) => {
  return (
    <div className="pills-wrapper">
      {options.map(option => {
        const isSelected = Array.isArray(selectedValues) 
          ? selectedValues.includes(option) 
          : selectedValues === option;
        
        const isDisabled = disabledCheck?.(option);

        return (
          <button
            key={option}
            className={`pill-btn ${isSelected ? 'selected' : 'unselected'} ${isDisabled ? 'disabled' : ''}`}
            onClick={() => !isDisabled && onSelect(option)}
          >
            {option}
            {isSelected && <Check size={14} strokeWidth={3} />}
          </button>
        );
      })}
    </div>
  );
};

export default SelectionPills;