import React, { useState, useEffect } from 'react';
import './IngredientItems.css';
import { Check, Clock, Users, Flame, Star, Heart, Search, ChevronDown, ChevronUp } from 'lucide-react';

const Ingredients = () => {
  // --- INGREDIENTS DATA (Categorized for Logic) ---
  const allIngredients = [
    { id: 'eggs', name: 'Eggs', icon: '🥚', category: 'animal_product' },
    { id: 'milk', name: 'Milk', icon: '🥛', category: 'animal_product' },
    { id: 'bacon', name: 'Bacon', icon: '🥓', category: 'meat' },
    { id: 'meat', name: 'Meat', icon: '🥩', category: 'meat' },
    { id: 'cheese', name: 'Cheese', icon: '🧀', category: 'animal_product' },
    { id: 'tomato', name: 'Tomato', icon: '🍅', category: 'veg' },
    { id: 'corn', name: 'Corn', icon: '🌽', category: 'veg' },
    { id: 'chocolate', name: 'Chocolate', icon: '🍫', category: 'sweet' },
    { id: 'bread', name: 'Bread', icon: '🍞', category: 'neutral' },
    { id: 'chicken', name: 'Chicken', icon: '🍗', category: 'meat' },
    { id: 'broccoli', name: 'Broccoli', icon: '🥦', category: 'veg' },
    { id: 'avocado', name: 'Avocado', icon: '🥑', category: 'veg' },
    { id: 'onion', name: 'Onion', icon: '🧅', category: 'veg' },
    { id: 'garlic', name: 'Garlic', icon: '🧄', category: 'veg' },
    { id: 'spinach', name: 'Spinach', icon: '🥬', category: 'veg' },
    { id: 'potato', name: 'Potato', icon: '🥔', category: 'veg' },
    { id: 'fish', name: 'Fish', icon: '🐟', category: 'meat' },
    { id: 'berries', name: 'Berries', icon: '🫐', category: 'sweet' },
  ];

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
  const hasMeat = selectedIngredients.some(id => allIngredients.find(i => i.id === id)?.category === 'meat');
  const hasAnimalProduct = selectedIngredients.some(id => allIngredients.find(i => i.id === id)?.category === 'animal_product');
  const hasSweet = selectedIngredients.some(id => allIngredients.find(i => i.id === id)?.category === 'sweet');
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

  // --- MOCK DATABASE ---
  const mockDatabase = [
    { id: 1, title: "Classic Cheese Omelet", image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", time: "10 min", timeCategory: "0-15 min", servings: "1 serving", calories: "320 Cal", tag: "Vegetarian", mealType: "Breakfast", ingredients: ['eggs', 'cheese'], rating: 5 },
    { id: 2, title: "Avocado Toast with Egg", image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", time: "10 min", timeCategory: "0-15 min", servings: "1 serving", calories: "280 Cal", tag: "Vegetarian", mealType: "Breakfast", ingredients: ['bread', 'avocado', 'eggs'], rating: 5 },
    { id: 3, title: "Tomato & Basil Soup", image: "https://images.unsplash.com/photo-1548943487-a2e4b43b485d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", time: "30 min", timeCategory: "15-30 min", servings: "4 serving", calories: "150 Cal", tag: "Vegan", mealType: "Dinner", ingredients: ['tomato', 'onion', 'garlic'], rating: 4 },
    { id: 4, title: "Grilled Chicken Salad", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", time: "20 min", timeCategory: "15-30 min", servings: "2 serving", calories: "350 Cal", tag: "Keto", mealType: "Lunch", ingredients: ['chicken', 'tomato', 'spinach'], rating: 5 },
    { id: 5, title: "Bacon Mac & Cheese", image: "https://images.unsplash.com/photo-1612871689353-cccf581d667b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", time: "45 min", timeCategory: "30-60 min", servings: "4 serving", calories: "650 Cal", tag: "Comfort", mealType: "Dinner", ingredients: ['cheese', 'milk', 'bacon'], rating: 4 },
    { id: 6, title: "Garlic Butter Steak", image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", time: "20 min", timeCategory: "15-30 min", servings: "2 serving", calories: "550 Cal", tag: "Keto", mealType: "Dinner", ingredients: ['meat', 'garlic'], rating: 5 },
    { id: 7, title: "Chocolate Berry Smoothie", image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", time: "5 min", timeCategory: "0-15 min", servings: "1 serving", calories: "250 Cal", tag: "Vegan", mealType: "Drink", ingredients: ['chocolate', 'berries', 'milk'], rating: 5 },
    { id: 8, title: "Corn & Spinach Fritters", image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80", time: "25 min", timeCategory: "15-30 min", servings: "3 serving", calories: "210 Cal", tag: "Vegetarian", mealType: "Snacks", ingredients: ['corn', 'spinach', 'eggs'], rating: 4 },
  ];

  const handleGenerate = () => {
    const results = mockDatabase.filter(recipe => {
      const matchMeal = recipe.mealType === selectedMeal;
      const matchTime = recipe.timeCategory === selectedTime;

      let matchIngredients = true;
      if (selectedIngredients.length > 0) {
        matchIngredients = selectedIngredients.some(selectedIng => 
          recipe.ingredients.includes(selectedIng)
        );
      }

      let matchDiet = true;
      if (selectedDiets.length > 0 && !selectedDiets.includes('No diet')) {
        if (selectedDiets.includes('Vegan') && recipe.tag === 'Vegan') matchDiet = true;
        else if (selectedDiets.includes('Vegetarian') && (recipe.tag === 'Vegetarian' || recipe.tag === 'Vegan')) matchDiet = true;
        else if (selectedDiets.includes('Keto') && recipe.tag === 'Keto') matchDiet = true;
        else if (selectedDiets.includes('Low calorie') && parseInt(recipe.calories) < 300) matchDiet = true;
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
            <div className="step-header" style={{marginTop: 0}}>
              <div className="step-number">1</div>
              <h3 className="step-title">Choose up to 3 ingredients ({selectedIngredients.length}/3)</h3>
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

              <div className="ingredients-grid">
                {displayedIngredients.map(ing => {
                  const isSelected = selectedIngredients.includes(ing.id);
                  
                  // LOGIC: Disable unselected items if max 3 is reached
                  let isDisabled = !isSelected && isMaxIngredients;
                  // LOGIC: Disable Sweets if Meat is selected
                  if (hasMeat && ing.category === 'sweet') isDisabled = true;
                  // LOGIC: Disable Meat if Sweets are selected
                  if (hasSweet && ing.category === 'meat') isDisabled = true;

                  return (
                    <div 
                      key={ing.id} 
                      className={`ingredient-card ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
                      onClick={() => !isDisabled && toggleIngredient(ing.id)}
                    >
                      <span className="ingredient-emoji">{ing.icon}</span>
                      <p className="ingredient-name">{ing.name}</p>
                    </div>
                  );
                })}
              </div>

              {!ingredientSearch && allIngredients.length > 9 && (
                <button className="view-more-btn" onClick={() => setShowAllIngredients(!showAllIngredients)}>
                  {showAllIngredients ? <>Show Less <ChevronUp size={16} style={{marginLeft: '5px'}} /></> : <>View More <ChevronDown size={16} style={{marginLeft: '5px'}} /></>}
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
                {generatedResults.map((recipe) => (
                  <div key={recipe.id} className="recipe-card">
                    <div className="recipe-img-wrap">
                      <img src={recipe.image} alt={recipe.title} className="recipe-img" />
                      <button className="recipe-fav-btn">
                        <Heart size={16} strokeWidth={2.5} />
                      </button>
                    </div>
                    <h4 className="recipe-title">{recipe.title}</h4>
                    <div className="recipe-meta">
                      <div className="meta-item"><Clock size={14} /> {recipe.time}</div>
                      <div className="meta-item"><Users size={14} /> {recipe.servings}</div>
                      <div className="meta-item"><Flame size={14} /> {recipe.calories}</div>
                    </div>
                    <div className="recipe-footer">
                      <span className="recipe-tag">{recipe.tag}</span>
                      <div className="stars-row">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} size={14} fill={star <= recipe.rating ? '#F0542E' : "transparent"} color={star <= recipe.rating ? '#F0542E' : '#E2E8F0'} />
                        ))}
                      </div>
                    </div>
                  </div>
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