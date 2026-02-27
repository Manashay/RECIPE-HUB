import React, { useEffect, useState } from 'react';
import './FridgeSection.css';
import axios from 'axios'; // ✅ This is the correct way for React components
import {useNavigate} from 'react-router-dom';


const FridgeSection = ({ingredients}) => {
  const navigate = useNavigate();

  return (
    <section id='target-fridge-section' className="fridge-section">
      <h2 className="fridge-title">What's In Your Fridge?</h2>

      <div className="ingredients-grid">
        {ingredients.map((item) => (
          <div key={item._id} className="ingredient-card">
            <span style={{ fontSize: '24px' }}>{item.icon}</span>
            <span className="ingredient-name">{item.name}</span>
          </div>
        ))}
      </div>

      <div className="fridge-actions">
        <button className="btn-view-more" onClick={()=> navigate('/ingredients',)}>View More</button>
        <button className="btn-generate-main">Generate Recipe</button>
      </div>
    </section>
  );
};

export default FridgeSection;