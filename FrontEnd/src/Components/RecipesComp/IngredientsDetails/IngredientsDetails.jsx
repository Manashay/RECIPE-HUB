import React, { useEffect, useState } from 'react';
import { ShoppingCart, ChevronDown, Play } from 'lucide-react';
import './IngredientsDetails.css';
import { useParams } from 'react-router-dom';

const IngredientsDetails = ({recipe}) => {

//   const { id } = useParams();
//   const [recipe, setRecipe] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         let response = await axios.get(`/api/recipes/${id}`);
//         setRecipe(response.data);
//       } catch (error) {
//         console.log("Error Occured", error.message);
//       }
//     }
//     fetchData();
//   },[]);

  return (
    <div className="details-section-container">
      <div className="details-wrapper">

        {/* Left Column: Ingredients */}
        <div className="ingredients-column">
          <div className="column-header">
            <h2>Ingredients</h2>
            <div className="servings-selector">
              {recipe?.servings} Serving 
              {/* <ChevronDown size={16} /> */}
            </div>
          </div>

          <div className="ingredients-list">
            {recipe?.ingredients.map((item) => (
              <div key={item.id} className="ingredient-row">
                <div className="ingredient-info">
                  <div className="item-icon-box"><i class="fa-solid fa-utensils"></i></div>
                  <span className="item-name">{item.name}</span>
                </div>
                <div className="ingredient-actions">
                  <span className="item-qty">{item.quantity} {item.unit}</span>
                  <div className="cart-btn-wrapper">
                    {/* Tooltip implementation */}
                    <span className="tooltip">
                      {item.added ? "Remove from shopping list" : "Add to shopping list"}
                    </span>
                    <button className={`cart-icon-btn ${item.added ? 'active' : ''}`}>
                      <ShoppingCart size={16} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className="add-all-btn">
            Add all ingredients to shopping list <ShoppingCart size={18} />
          </button>
        </div>

        {/* Right Column: Method */}
        <div className="method-column">
          <h2 className="method-title">Method</h2>

          {/* <div className="video-placeholder">
            <img
              src="https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1000&auto=format&fit=crop"
              alt="Video thumbnail"
            />
            <div className="video-overlay">
              <span>Eggs benedict video instructions</span>
              <div className="play-btn-circle">
                <Play size={24} fill="currentColor" />
              </div>
            </div>
          </div> */}

          <div className="preparation-steps">
            <h3>To prepare:</h3>

            <div className="step-item">
              {recipe?.instructions.map((step) => (
                <>
                  <div className="step-badge">Step {step.stepNumber}</div>
                  <p>
                    {step.text}
                  </p>
                </>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default IngredientsDetails;