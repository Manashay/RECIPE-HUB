import React, { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import './IngredientsDetails.css';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Don't forget to import axios!

const IngredientsDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Updated URL to match your backend route
        const response = await axios.get(`/api/recipes/${id}`);
        setRecipe(response.data);
      } catch (error) {
        console.log("Error Occured", error.message);
      }
    };
    fetchData();
  }, [id]); // Added id to dependency array for safety

  if (!recipe) return <div className="loading">Loading details...</div>;

  return (
    <div className="details-section-container">
      <div className="details-wrapper">

        {/* Left Column: Ingredients */}
        <div className="ingredients-column">
          <div className="column-header">
            <h2>Ingredients</h2>
            <div className="servings-selector">
              {recipe.servings} Servings
            </div>
          </div>

          <div className="ingredients-list">
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index} className="ingredient-row">
                <div className="ingredient-info">
                  {/* Displays the first letter of the ingredient as an icon */}
                  <div className="item-icon-box">{}</div>
                  <span className="item-name">{ingredient}</span>
                </div>
                <div className="ingredient-actions">
                  <div className="cart-btn-wrapper">
                    <button className="cart-icon-btn">
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="add-all-btn">
            Add all to shopping list <ShoppingCart size={18} />
          </button>
        </div>

        {/* Right Column: Method */}
        <div className="method-column">
          <h2 className="method-title">Method</h2>
          <div className="preparation-steps">
            <h3>Instructions:</h3>

            {recipe.instructions.map((step) => (
              <div className="step-item" key={step.stepNumber}>
                <div className="step-badge">Step {step.stepNumber}</div>
                <p className="step-text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default IngredientsDetails;