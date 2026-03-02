import React, { useState, useEffect } from 'react';
import './IngredientItems.css';
import { Check, Clock, Users, Flame, Star, Heart, Search, ChevronDown, ChevronUp } from 'lucide-react';
import RecipeCards from '../RecipesComp/RecommendationSection/RecipeCards';
const Ingredients = ({ allIngredients, recipes }) => {


  // --- STATE ---
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [ingredientSearch, setIngredientSearch] = useState('');
  const [showAllIngredients, setShowAllIngredients] = useState(false);

  // Simplified diets list
  const [selectedDiets, setSelectedDiets] = useState(['No diet']);
  const [selectedMeal, setSelectedMeal] = useState('Dinner');
  const [selectedTime, setSelectedTime] = useState('15-30 min');
  const [generatedResults, setGeneratedResults] = useState(null);

  // --- SMART LOGIC CHECKS ---
  // --- SMART LOGIC CHECKS --- (fix .id → ._id)
  const hasMeat = selectedIngredients.some(id => allIngredients.find(i => i._id === id)?.category === 'meat');
  const hasAnimalProduct = selectedIngredients.some(id => allIngredients.find(i => i._id === id)?.category === 'animal_product');
  const hasSweet = selectedIngredients.some(id => allIngredients.find(i => i._id === id)?.category === 'sweet');
  const isMaxIngredients = selectedIngredients.length >= 3;

  // --- SIDE EFFECTS (Auto-correcting selections based on rules) ---
  useEffect(() => {
    // If Meat is selected, remove Vegan/Vegetarian
    if (hasMeat) {
      setSelectedDiets(prev => prev.filter(d => d !== 'Vegan' && d !== 'Vegetarian'));
      // If Drink or Dessert is selected, fallback to Dinner
      if (selectedMeal === 'Drink' || selectedMeal === 'Dessert') {
        setSelectedMeal('Dinner');
      }
    }
    // If Eggs/Milk/Cheese selected, remove Vegan
    if (hasAnimalProduct) {
      setSelectedDiets(prev => prev.filter(d => d !== 'Vegan'));
    }

    // Auto fallback to "No diet" if array is empty
    if (selectedDiets.length === 0) {
      setSelectedDiets(['No diet']);
    }
  }, [hasMeat, hasAnimalProduct, selectedMeal, selectedDiets.length]);

  // --- ACTIONS ---
  const toggleIngredient = (id) => {
    if (selectedIngredients.includes(id)) {
      // Remove it
      setSelectedIngredients(prev => prev.filter(i => i !== id));
    } else {
      // Add it ONLY if under max limit
      if (!isMaxIngredients) {
        setSelectedIngredients(prev => [...prev, id]);
      }
    }
  };

  const toggleDiet = (diet) => {
    if (diet === 'No diet') {
      setSelectedDiets(['No diet']);
      return;
    }

    setSelectedDiets(prev => {
      // Remove "No diet" if a real diet is clicked
      const filtered = prev.filter(d => d !== 'No diet');
      return filtered.includes(diet) ? filtered.filter(d => d !== diet) : [...filtered, diet];
    });
  };

  // Filter grid items
  const displayedIngredients = allIngredients.filter(ing =>
    ing.name.toLowerCase().includes(ingredientSearch.toLowerCase())
  ).slice(0, showAllIngredients || ingredientSearch ? allIngredients.length : 9);

  // Recieps Starting




  const handleGenerate = () => {
    const results = recipes.filter(recipe => {

      // ✅ meal is inside tags array e.g. ['Breakfast', 'Quick Easy']
      const matchMeal = recipe.tags.includes(selectedMeal);

      // ✅ prepTime is "20 min" — map your time options to match
      const timeMap = {
        '0-15 min': (t) => parseInt(t) <= 15,
        '15-30 min': (t) => parseInt(t) > 15 && parseInt(t) <= 30,
        '30-60 min': (t) => parseInt(t) > 30 && parseInt(t) <= 60,
        'Over 1 Hour': (t) => parseInt(t) > 60,
      };
      const matchTime = timeMap[selectedTime]?.(recipe.prepTime) ?? true;

      // ✅ ingredients is array of objects — check ingredient name inside each object
      let matchIngredients = true;
      if (selectedIngredients.length > 0) {
        const selectedNames = selectedIngredients
          .map(id => allIngredients.find(i => i._id === id)?.name?.toLowerCase())
          .filter(Boolean);
        matchIngredients = selectedNames.some(name =>
          recipe.ingredients.some(ing => ing.name?.toLowerCase() === name)
        );
      }

      // ✅ diet is also inside tags array, calories is a number not string
      let matchDiet = true;
      if (selectedDiets.length > 0 && !selectedDiets.includes('No diet')) {
        if (selectedDiets.includes('Vegan') && recipe.tags.includes('Vegan')) matchDiet = true;
        else if (selectedDiets.includes('Vegetarian') && (recipe.tags.includes('Vegetarian') || recipe.tags.includes('Vegan'))) matchDiet = true;
        else if (selectedDiets.includes('Keto') && recipe.tags.includes('Keto')) matchDiet = true;
        else if (selectedDiets.includes('Low calorie') && recipe.calories < 300) matchDiet = true;  // ✅ number not string
        else matchDiet = false;
      }

      return matchMeal && matchTime && matchIngredients && matchDiet;
    });
    setGeneratedResults(results);
    setTimeout(() => { window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); }, 100);
  };

  // --- UI ARRAYS ---
  const assets = {
    breakfast: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Cooking.png",
    lunch: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Sandwich.png",
    dinner: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Green%20Salad.png",
    dessert: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Cupcake.png",
    snacks: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Pretzel.png",
    drink: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Tropical%20Drink.png"
  };

  const simplifiedDiets = ['No diet', 'Vegan', 'Vegetarian', 'Keto', 'Low calorie'];
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
    <div className="ingredients-page">
      <div className="generator-container">

        <div className="generator-card">

          {/* --- STEP 1: INGREDIENTS GRID --- */}
          <div>
            <div className="step-header" style={{ marginTop: 0 }}>
              <div className="step-number">1</div>
              <h3 className="step-title">Choose up to 3 ingredients ({selectedIngredients.length}/3)</h3>
              {selectedIngredients.length > 0 && (
                <button
                  className="clear-btn"
                  onClick={() => setSelectedIngredients([])}
                >
                  Clear All
                </button>
              )}
            </div>

            <div className="ingredients-section-body">
              <div className="ingredient-search-wrapper">
                <Search size={18} color="#718096" />
                <input
                  type="text"
                  placeholder="Search ingredients..."
                  className="ingredient-search-input"
                  value={ingredientSearch}
                  onChange={(e) => setIngredientSearch(e.target.value)}
                />
              </div>

              <div className="ingredients-grid scrolleffect">
                {displayedIngredients.map(ing => {
                  const isSelected = selectedIngredients.includes(ing._id);

                  // LOGIC: Disable unselected items if max 3 is reached
                  let isDisabled = !isSelected && isMaxIngredients;
                  // LOGIC: Disable Sweets if Meat is selected
                  if (hasMeat && ing.category === 'sweet') isDisabled = true;
                  // LOGIC: Disable Meat if Sweets are selected
                  if (hasSweet && ing.category === 'meat') isDisabled = true;

                  return (
                    <div
                      key={ing._id}
                      className={`ingredient-card ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
                      onClick={() => {
                        if (!isDisabled){
                          toggleIngredient(ing._id);
                          setIngredientSearch('');
                        }
                      }}
                    >
                      <span className="ingredient-emoji">{ing.icon}</span>
                      <p className="ingredient-name">{ing.name}</p>
                    </div>
                  );
                })}
              </div>

              {!ingredientSearch && allIngredients.length > 9 && (
                <button className="view-more-btn" onClick={() => setShowAllIngredients(!showAllIngredients)}>
                  {showAllIngredients ? <>Show Less <ChevronUp size={16} style={{ marginLeft: '5px' }} /></> : <>View More <ChevronDown size={16} style={{ marginLeft: '5px' }} /></>}
                </button>
              )}
            </div>
          </div>

          {/* --- STEP 2: DIET --- */}
          <div>
            <div className="step-header">
              <div className="step-number">2</div>
              <h3 className="step-title">Choose diet</h3>
            </div>

            <div className="pills-wrapper">
              {simplifiedDiets.map(diet => {
                const isSelected = selectedDiets.includes(diet);

                // LOGIC: Disable Vegan/Veg if Meat is selected
                let isDietDisabled = false;
                if (hasMeat && (diet === 'Vegan' || diet === 'Vegetarian')) isDietDisabled = true;
                if (hasAnimalProduct && diet === 'Vegan') isDietDisabled = true;

                return (
                  <button
                    key={diet}
                    className={`pill-btn ${isSelected ? 'selected' : 'unselected'} ${isDietDisabled ? 'disabled' : ''}`}
                    onClick={() => !isDietDisabled && toggleDiet(diet)}
                  >
                    {diet}
                    {isSelected && <Check size={14} strokeWidth={3} />}
                  </button>
                )
              })}
            </div>
          </div>

          {/* --- STEP 3: MEAL TYPE --- */}
          <div>
            <div className="step-header">
              <div className="step-number">3</div>
              <h3 className="step-title">Meal type</h3>
            </div>

            <div className="meal-wrapper">
              {mealTypes.map(meal => {
                const isSelected = selectedMeal === meal.name;

                // LOGIC: Disable Dessert and Drinks if Meat is selected
                let isMealDisabled = false;
                if (hasMeat && (meal.name === 'Dessert' || meal.name === 'Drink')) isMealDisabled = true;

                return (
                  <button
                    key={meal.name}
                    className={`meal-card-btn ${isSelected ? 'selected' : 'unselected'} ${isMealDisabled ? 'disabled' : ''}`}
                    onClick={() => !isMealDisabled && setSelectedMeal(meal.name)}
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
                )
              })}
            </div>
          </div>

          {/* --- STEP 4: TIME --- */}
          <div>
            <div className="step-header">
              <div className="step-number">4</div>
              <h3 className="step-title">Total cooking time</h3>
            </div>

            <div className="pills-wrapper">
              {timeOptions.map(time => {
                const isSelected = selectedTime === time;
                return (
                  <button
                    key={time}
                    className={`pill-btn ${isSelected ? 'selected' : 'unselected'}`}
                    onClick={() => setSelectedTime(time)}
                  >
                    {isSelected && <Check size={14} strokeWidth={3} />}
                    {time}
                  </button>
                )
              })}
            </div>
          </div>

          {/* --- SUBMIT --- */}
          <div className="submit-wrapper">
            <button className="submit-btn" onClick={handleGenerate}>
              Generate Recipes
            </button>
          </div>

        </div>

        {/* --- RESULTS SECTION --- */}
        {generatedResults !== null && (
          <div className="results-container">
            <h2 className="results-header">Your Generated Recipes</h2>

            {generatedResults.length === 0 ? (
              <div className="no-results">
                Oops! We couldn't find any {selectedMeal.toLowerCase()} recipes matching those exact criteria. Try adjusting your ingredients or diet filters!
              </div>
            ) : (
              <div className="recipe-grid">
                {generatedResults.map((item) => (
                  <RecipeCards item={item} />
                ))}
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};

export default Ingredients;