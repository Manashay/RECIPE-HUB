import React, { useState, useEffect } from 'react';
import './IngredientItems.css';
import RecipeCards from '../RecipesComp/RecommendationSection/RecipeCards';
import IngredientGrid from './IngredientGrid';
import SelectionPills from './SelectionPills';
import MealTypeSelector from './MealTypeSelector';

// ✅ ADD IT HERE (Outside the component)
const ASSETS = {
  breakfast: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Cooking.png",
  lunch: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Sandwich.png",
  dinner: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Green%20Salad.png",
  dessert: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Cupcake.png",
  snacks: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Pretzel.png",
  drink: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Tropical%20Drink.png"
};

const mealTypesArray = [
  { name: 'Breakfast', icon: ASSETS.breakfast },
  { name: 'Lunch', icon: ASSETS.lunch },
  { name: 'Dinner', icon: ASSETS.dinner },
  { name: 'Dessert', icon: ASSETS.dessert },
  { name: 'Snacks', icon: ASSETS.snacks },
  { name: 'Drink', icon: ASSETS.drink },
];


const Ingredients = ({ allIngredients, recipes }) => {
  // --- STATE ---
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [ingredientSearch, setIngredientSearch] = useState('');
  const [showAllIngredients, setShowAllIngredients] = useState(false);
  const [selectedDiets, setSelectedDiets] = useState(['No diet']);
  const [selectedMeal, setSelectedMeal] = useState('Dinner');
  const [selectedTime, setSelectedTime] = useState('15-30 min');
  const [generatedResults, setGeneratedResults] = useState(null);

  // --- LOGIC ---
  const hasMeat = selectedIngredients.some(id => allIngredients.find(i => i._id === id)?.category === 'meat');
  const hasAnimalProduct = selectedIngredients.some(id => allIngredients.find(i => i._id === id)?.category === 'animal_product');
  const hasSweet = selectedIngredients.some(id => allIngredients.find(i => i._id === id)?.category === 'sweet');
  const isMaxIngredients = selectedIngredients.length >= 3;

  useEffect(() => {
    if (hasMeat) {
      setSelectedDiets(prev => prev.filter(d => d !== 'Vegan' && d !== 'Vegetarian'));
      if (['Drink', 'Dessert'].includes(selectedMeal)) setSelectedMeal('Dinner');
    }
    if (hasAnimalProduct) setSelectedDiets(prev => prev.filter(d => d !== 'Vegan'));
    if (selectedDiets.length === 0) setSelectedDiets(['No diet']);
  }, [hasMeat, hasAnimalProduct, selectedMeal, selectedDiets.length]);

  const toggleIngredient = (id) => {
    setSelectedIngredients(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : (!isMaxIngredients ? [...prev, id] : prev)
    );
  };

  const toggleDiet = (diet) => {
    if (diet === 'No diet') return setSelectedDiets(['No diet']);
    setSelectedDiets(prev => {
      const filtered = prev.filter(d => d !== 'No diet');
      return filtered.includes(diet) ? filtered.filter(d => d !== diet) : [...filtered, diet];
    });
  };

  const handleGenerate = () => {
    console.log("Generating with:", { selectedIngredients, selectedMeal, selectedDiets });
  
    const results = recipes.filter(recipe => {
      // 1. Check Meal Type (Match against tags)
      const matchMeal = recipe.tags.includes(selectedMeal);
  
      // 2. Check Cooking Time
      const timeMap = {
        '0-15 min': (t) => parseInt(t) <= 15,
        '15-30 min': (t) => parseInt(t) > 15 && parseInt(t) <= 30,
        '30-60 min': (t) => parseInt(t) > 30 && parseInt(t) <= 60,
        'Over 1 Hour': (t) => parseInt(t) > 60,
      };
      const matchTime = timeMap[selectedTime]?.(recipe.prepTime) ?? true;
  
      // 3. Check Ingredients (Does the recipe contain ANY of our selected items?)
      let matchIngredients = true;
      if (selectedIngredients.length > 0) {
        const selectedNames = selectedIngredients
          .map(id => allIngredients.find(i => i._id === id)?.name?.toLowerCase())
          .filter(Boolean);
        
        matchIngredients = selectedNames.some(name =>
          recipe.ingredients.some(ing => ing.name?.toLowerCase() === name)
        );
        

      }
  
      // 4. Check Diet
      let matchDiet = true;
      if (selectedDiets.length > 0 && !selectedDiets.includes('No diet')) {
        if (selectedDiets.includes('Vegan')) matchDiet = recipe.tags.includes('Vegan');
        else if (selectedDiets.includes('Vegetarian')) matchDiet = recipe.tags.includes('Vegetarian') || recipe.tags.includes('Vegan');
        else if (selectedDiets.includes('Keto')) matchDiet = recipe.tags.includes('Keto');
        else if (selectedDiets.includes('Low calorie')) matchDiet = recipe.calories < 300;
      }
  
      return matchMeal && matchTime && matchIngredients && matchDiet;
    });
  
    setGeneratedResults(results);
    
    // Smooth scroll to results
    setTimeout(() => { 
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }); 
    }, 100);
  };

  const displayedIngredients = allIngredients.filter(ing =>
    ing.name.toLowerCase().includes(ingredientSearch.toLowerCase())
  ).slice(0, showAllIngredients || ingredientSearch ? allIngredients.length : 9);

  return (
    <div className="ingredients-page">
      <div className="generator-container">
        <div className="generator-card">

          {/* STEP 1 */}
          <section>
            <div className="step-header">
              <div className="step-number">1</div>
              <h3 className="step-title">Choose ingredients ({selectedIngredients.length}/3)</h3>
              {selectedIngredients.length > 0 && <button className="clear-btn" onClick={() => setSelectedIngredients([])}>Clear All</button>}
            </div>
            <IngredientGrid
              ingredients={displayedIngredients}
              selectedIngredients={selectedIngredients}
              onToggle={toggleIngredient}
              searchTerm={ingredientSearch}
              setSearchTerm={setIngredientSearch}
              isMaxIngredients={isMaxIngredients}
              hasMeat={hasMeat}
              hasSweet={hasSweet}
              showAll={showAllIngredients}
              setShowAll={setShowAllIngredients}
            />
          </section>

          {/* STEP 2 */}
          <section>
            <div className="step-header"><div className="step-number">2</div><h3 className="step-title">Choose diet</h3></div>
            <SelectionPills
              options={['No diet', 'Vegan', 'Vegetarian', 'Keto', 'Low calorie']}
              selectedValues={selectedDiets}
              onSelect={toggleDiet}
              disabledCheck={(diet) => (hasMeat && (diet === 'Vegan' || diet === 'Vegetarian')) || (hasAnimalProduct && diet === 'Vegan')}
            />
          </section>

          {/* --- STEP 3: MEAL TYPE --- */}
          <section>
            <div className="step-header">
              <div className="step-number">3</div>
              <h3 className="step-title">Meal type</h3>
            </div>
            <MealTypeSelector
              mealTypes={mealTypesArray} // This now refers to the constant above
              selectedMeal={selectedMeal}
              onSelect={setSelectedMeal}
              hasMeat={hasMeat}
            />
          </section>

          {/* STEP 4 */}
          <section>
            <div className="step-header"><div className="step-number">4</div><h3 className="step-title">Cooking time</h3></div>
            <SelectionPills
              options={['0-15 min', '15-30 min', '30-60 min', 'Over 1 Hour']}
              selectedValues={selectedTime}
              onSelect={setSelectedTime}
            />
          </section>

          <div className="submit-wrapper">
            <button className="submit-btn" onClick={handleGenerate}>Generate Recipes</button>
          </div>
        </div>

        {/* RESULTS */}
        {generatedResults && (
          <div className="results-container">
            <h2 className="results-header">Your Generated Recipes</h2>
            <div className="recipe-grid">
              {generatedResults.length > 0 ? generatedResults.map(item => <RecipeCards key={item.id} item={item} />) : <p>No recipes found.</p>}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Ingredients;