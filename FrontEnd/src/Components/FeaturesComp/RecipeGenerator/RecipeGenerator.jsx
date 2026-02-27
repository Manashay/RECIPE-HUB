import React, { useState } from 'react';
import { Check } from 'lucide-react';
import './RecipeGenerator.css';

const RecipeGenerator = () => {
  const [selectedDiets, setSelectedDiets] = useState(['Vegan', 'Nut-free', 'Low calorie']);
  const [selectedMeal, setSelectedMeal] = useState('Dinner');
  const [selectedTime, setSelectedTime] = useState('0-15 min');

  const toggleDiet = (diet) => {
    setSelectedDiets(prev => 
      prev.includes(diet) ? prev.filter(d => d !== diet) : [...prev, diet]
    );
  };

  const assets = {
    stevia: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Bottle%20with%20Popping%20Cork.png",
    berries: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Blueberries.png",
    placeholder: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/White%20Medium%20Star.png",
    breakfast: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Cooking.png",
    lunch: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Sandwich.png",
    dinner: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Green%20Salad.png",
    dessert: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Cupcake.png",
    snacks: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Pretzel.png",
    drink: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Tropical%20Drink.png"
  };

  const allDiets = ['No diet', 'Vegan', 'Vegetarian', 'Gluten-free', 'Nut-free', 'Dairy-free', 'Keto', 'High-protein', 'Low calorie'];
  const mealTypes = [
    { name: 'Breakfast', icon: assets.breakfast },
    { name: 'Lunch', icon: assets.lunch },
    { name: 'Dinner', icon: assets.dinner },
    { name: 'Dessert', icon: assets.dessert },
    { name: 'Snacks', icon: assets.snacks },
    { name: 'Drink', icon: assets.drink },
  ];
  const timeOptions = ['0-15 min', '15-30 min', '30-60 min', 'Over 1 Hour'];

  return (
    <section className="generator-section">
      <div className="container">
        <div className="main-card">
          
          {/* --- STEP 1 --- */}
          <div>
            <div className="step-header first">
              <div className="step-number">1</div>
              <h3 className="step-title">Choose up to 3 ingredients</h3>
            </div>
            
            <div className="ingredients-grid">
              <div className="ingredient-card">
                <div className="img-box"><img src={assets.stevia} width="40" alt="Stevia" /></div>
                <input type="text" className="input-field" defaultValue="Stevia Liquid" />
              </div>
              
              <div className="ingredient-card">
                <div className="img-box"><img src={assets.berries} width="40" alt="Berries" /></div>
                <input type="text" className="input-field" defaultValue="Mixed Berries" />
              </div>

              <div className="ingredient-card">
                <div className="img-box">
                  <img src={assets.placeholder} width="30" style={{opacity: 0.3}} alt="Empty" />
                </div>
                <input type="text" className="input-field" placeholder="Start typing..." />
              </div>
            </div>
          </div>

          {/* --- STEP 2 --- */}
          <div>
            <div className="step-header">
              <div className="step-number">2</div>
              <h3 className="step-title">Choose diet</h3>
            </div>
            
            <div className="pills-wrapper">
              {allDiets.map(diet => {
                const isSelected = selectedDiets.includes(diet);
                return (
                  <div 
                    key={diet} 
                    className={`pill ${isSelected ? 'selected' : ''}`}
                    onClick={() => toggleDiet(diet)}
                  >
                    {diet}
                    {isSelected && <Check size={14} color="#FFFFFF" strokeWidth={3} />}
                  </div>
                )
              })}
            </div>
          </div>

          {/* --- STEP 3 --- */}
          <div>
            <div className="step-header">
              <div className="step-number">3</div>
              <h3 className="step-title">Meal type</h3>
            </div>
            
            <div className="meal-wrapper">
              {mealTypes.map(meal => {
                const isSelected = selectedMeal === meal.name;
                return (
                  <div 
                    key={meal.name} 
                    className={`meal-card ${isSelected ? 'selected' : ''}`}
                    onClick={() => setSelectedMeal(meal.name)}
                  >
                    {isSelected && (
                      <div className="check-icon-badge">
                        <Check size={16} color="#FFFFFF" strokeWidth={4} />
                      </div>
                    )}
                    <div className="meal-icon-circle">
                      <img src={meal.icon} width="35" alt={meal.name} />
                    </div>
                    <p className="meal-text">{meal.name}</p>
                  </div>
                )
              })}
            </div>
          </div>

          {/* --- STEP 4 --- */}
          <div>
            <div className="step-header">
              <div className="step-number">4</div>
              <h3 className="step-title">Total cooking time</h3>
            </div>
            
            <div className="pills-wrapper">
              {timeOptions.map(time => {
                const isSelected = selectedTime === time;
                return (
                  <div 
                    key={time} 
                    className={`pill ${isSelected ? 'selected' : ''}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {isSelected && <Check size={14} color="#FFFFFF" strokeWidth={3} />}
                    {time}
                  </div>
                )
              })}
            </div>
          </div>

          {/* --- SUBMIT BUTTON --- */}
          <div className="submit-wrapper">
            <button className="submit-btn">
              Generate Recipes
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RecipeGenerator;