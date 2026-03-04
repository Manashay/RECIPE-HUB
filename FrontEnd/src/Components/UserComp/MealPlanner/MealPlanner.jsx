import React, { useState } from 'react';
import { 
  User, Heart, ShoppingCart, Calendar, LogOut, Home,
  ChevronLeft, ChevronRight, Plus, Clock, Flame, 
  Check, X, Search, BookOpen, SlidersHorizontal, ChevronDown
} from 'lucide-react';
import './MealPlanner.css';

const MealPlanner = () => {
  const colors = {
    primary: '#194128',     
    accent: '#F0542E',      
    pink: '#E2A0FF',
    calGreen: '#A7C9A4'
  };

  const mockImages = [
    "https://images.unsplash.com/photo-1525385133512-2f3bdd039054?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1598514982205-f36b96d1e8d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1563805042-7684c8e9e533?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1490474418585-ba9f52c212d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  ];

  const allDatabaseRecipes = [
    { id: 101, title: "Best Keto Blueberry Muffins", time: "20 min", servings: "4 serving", cal: "307", carbs: "3.7 g", fats: "27.9 g", protein: "10.2 g", img: mockImages[4], category: "Breakfast", diet: "Vegan", isFav: true },
    { id: 102, title: "Keto Cheesy Egg and Spinach Cup", time: "15 min", servings: "2 serving", cal: "250", carbs: "2.5 g", fats: "20.0 g", protein: "12.0 g", img: mockImages[0], category: "Breakfast", diet: "Vegetarian", isFav: false },
    { id: 103, title: "Keto Chicken and Cauliflower Cheese", time: "30 min", servings: "4 serving", cal: "410", carbs: "5.0 g", fats: "30.0 g", protein: "25.0 g", img: mockImages[1], category: "Lunch", diet: "Omnivore", isFav: true },
    { id: 104, title: "Keto High Protein Creamy Tomato Chicken", time: "25 min", servings: "4 serving", cal: "380", carbs: "4.5 g", fats: "25.5 g", protein: "28.0 g", img: mockImages[6], category: "Dinner", diet: "Omnivore", isFav: true },
    { id: 105, title: "Keto Grilled Chicken Salad with Balsamic", time: "15 min", servings: "1 serving", cal: "320", carbs: "6.0 g", fats: "22.0 g", protein: "24.0 g", img: mockImages[2], category: "Dinner", diet: "Omnivore", isFav: false },
    { id: 106, title: "Easy Keto Panna Cotta", time: "10 min", servings: "2 serving", cal: "180", carbs: "2.0 g", fats: "15.0 g", protein: "3.0 g", img: mockImages[3], category: "Dessert", diet: "Vegetarian", isFav: true },
    { id: 107, title: "Keto Hidden Veggie Tater Tots", time: "25 min", servings: "4 serving", cal: "220", carbs: "4.0 g", fats: "18.0 g", protein: "5.0 g", img: mockImages[4], category: "Snack", diet: "Vegan", isFav: true },
    { id: 108, title: "Vegan Tofu Scramble", time: "15 min", servings: "2 serving", cal: "190", carbs: "3.0 g", fats: "12.0 g", protein: "14.0 g", img: mockImages[5], category: "Breakfast", diet: "Vegan", isFav: false },
    { id: 109, title: "Zucchini Noodles with Pesto", time: "20 min", servings: "2 serving", cal: "290", carbs: "5.0 g", fats: "26.0 g", protein: "4.0 g", img: mockImages[5], category: "Dinner", diet: "Vegan", isFav: true },
  ];

  const [selectedDate, setSelectedDate] = useState(new Date());

  const getWeekDays = (date) => {
    const start = new Date(date);
    const day = start.getDay();
    const diff = start.getDate() - day + (day === 0 ? -6 : 1); 
    start.setDate(diff);

    const week = [];
    for (let i = 0; i < 7; i++) {
      const current = new Date(start);
      current.setDate(start.getDate() + i);
      week.push(current);
    }
    return week;
  };

  const weekDays = getWeekDays(selectedDate);
  const shiftWeek = (direction) => {
    const newDate = new Date(selectedDate);
    newDate.setDate(selectedDate.getDate() + (direction * 7));
    setSelectedDate(newDate);
  };

  const goToToday = () => setSelectedDate(new Date());
  const formatDateKey = (date) => date.toISOString().split('T')[0];
  const activeDateKey = formatDateKey(selectedDate);

  const getMonthAndWeek = (date) => {
    const month = date.toLocaleString('en-US', { month: 'short' });
    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const dayOfWeek = firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1; 
    const weekNum = Math.ceil((date.getDate() + dayOfWeek) / 7);
    return `${month} Wk ${weekNum}`;
  };

  const [mealsData, setMealsData] = useState({
    [activeDateKey]: {
      Breakfast: [{ id: 1, title: "Ultimate Keto Cheesy Egg and Spinach Cup", time: "20 min", cal: "307 Cal", img: mockImages[0] }],
      Lunch: [],
      Dinner: [],
      Dessert: [],
      Snack: []
    }
  });

  const categories = ["Breakfast", "Lunch", "Dinner", "Dessert", "Snack"];

  const handleDeleteMeal = (category, mealId) => {
    setMealsData(prev => {
      const dayData = prev[activeDateKey];
      if (!dayData) return prev;
      return { ...prev, [activeDateKey]: { ...dayData, [category]: dayData[category].filter(meal => meal.id !== mealId) } };
    });
  };

  const currentDayMeals = mealsData[activeDateKey] || { Breakfast: [], Lunch: [], Dinner: [], Dessert: [], Snack: [] };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModalCategory, setActiveModalCategory] = useState(null);
  const [modalTab, setModalTab] = useState('favorites'); 
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDiet, setActiveDiet] = useState('Vegan');
  const diets = ['All', 'Vegan', 'Vegetarian', 'Pescetarian', 'Omnivore'];

  const openModal = (category) => { setActiveModalCategory(category); setIsModalOpen(true); };
  const closeModal = () => { setIsModalOpen(false); setActiveModalCategory(null); setSearchQuery(''); };

  const confirmAddMeal = (recipe) => {
    const newMeal = { id: Date.now() + Math.random(), title: recipe.title, time: recipe.time, cal: `${recipe.cal} Cal`, img: recipe.img };
    setMealsData(prev => {
      const dayData = prev[activeDateKey] || { Breakfast: [], Lunch: [], Dinner: [], Dessert: [], Snack: [] };
      return { ...prev, [activeDateKey]: { ...dayData, [activeModalCategory]: [...dayData[activeModalCategory], newMeal] } };
    });
    closeModal();
  };

  const filteredModalRecipes = allDatabaseRecipes.filter(recipe => {
    if (recipe.category !== activeModalCategory) return false;
    if (modalTab === 'favorites' && !recipe.isFav) return false;
    if (activeDiet !== 'All' && recipe.diet !== activeDiet) return false;
    if (searchQuery && !recipe.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  return (
    <div className="mp-page-wrapper">
      <div className="mp-app-container">
        
        {/* --- LEFT SIDEBAR --- */}
        <div className="mp-sidebar">
          <div className="mp-logo-container">
            <div>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" stroke="none" />
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" fill="#194128"/>
                <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="#F9F5EC"/>
              </svg>
            </div>
            <h2 className="mp-logo-text">Meal Zeroes</h2>
          </div>

          <div className="mp-menu-group">
            <a href="/myaccount" className="mp-nav-link">
              <div className="mp-menu-item"><User size={20} /><span>My Account</span></div>
            </a>
            <a href="/favorites" className="mp-nav-link">
              <div className="mp-menu-item"><Heart size={20} /><span>Favorite recipes</span></div>
            </a>
            <a href="/grocerylist" className="mp-nav-link">
              <div className="mp-menu-item"><ShoppingCart size={20} /><span>Grocery list</span></div>
            </a>
            <a href="/mealplanner" className="mp-nav-link">
              <div className="mp-menu-item active"><Calendar size={20} /><span>Meal planner</span></div>
            </a>
          </div>

          <div className="mp-bottom-menu">
            <div className="mp-menu-item"><LogOut size={20} /><span>Logout</span></div>
            <a href="/" className="mp-nav-link">
              <div className="mp-menu-item"><Home size={20} /><span>Back to the website</span></div>
            </a>
          </div>
        </div>

        {/* --- MAIN RIGHT CONTENT --- */}
        <div className="mp-main-content">
          <div className="mp-header">
            <h1 className="mp-page-title">Meal planner</h1>
            <div className="mp-header-actions">
              <div className="mp-week-controls">
                <button className="mp-icon-btn" onClick={() => shiftWeek(-1)}><ChevronLeft size={18} /></button>
                <span className="mp-week-text">{getMonthAndWeek(selectedDate)}</span>
                <button className="mp-icon-btn" onClick={() => shiftWeek(1)}><ChevronRight size={18} /></button>
              </div>
              <button className="mp-outline-btn" onClick={goToToday}>Go to Today</button>
            </div>
          </div>

          <div className="mp-days-row">
            {weekDays.map((date, idx) => {
              const isSelected = date.toDateString() === selectedDate.toDateString();
              const dayName = date.toLocaleDateString('en-US', { weekday: 'long' });
              const dayNum = date.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit' }).replace('/', '.');
              const hasCheck = idx === 0 && !isSelected;

              return (
                <div key={idx} className={`mp-day-card ${isSelected ? 'active' : ''}`} onClick={() => setSelectedDate(date)}>
                  {hasCheck && (
                    <div className="mp-check-badge"><Check size={14} color="#194128" /></div>
                  )}
                  <span className="mp-day-name">{dayName}</span>
                  <span className="mp-day-date">{dayNum}</span>
                </div>
              );
            })}
          </div>

          <div className="mp-summary-row">
            <div className="mp-summary-text-wrap">
              <h3 className="mp-summary-title">Your summary for the day</h3>
              <p className="mp-summary-date">
                {selectedDate.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </p>
            </div>

            <div className="mp-macros-wrap">
              <div className="mp-donut-chart" style={{background: `conic-gradient(${colors.primary} 0% 50%, ${colors.accent} 50% 85%, ${colors.pink} 85% 100%)`}}>
                <div className="mp-donut-inner">
                  <Flame size={14} color={colors.primary} style={{marginBottom: '2px'}} />
                  <span className="mp-donut-cal-text">309 Cal</span>
                </div>
              </div>

              <div className="mp-macro-stat">
                <div className="mp-macro-label-wrap">
                  <div className="mp-macro-dot" style={{backgroundColor: colors.primary}}></div>
                  <span className="mp-macro-label">Net Carbs</span>
                </div>
                <span className="mp-macro-value">3.7 g</span>
              </div>

              <div className="mp-macro-stat">
                <div className="mp-macro-label-wrap">
                  <div className="mp-macro-dot" style={{backgroundColor: colors.accent}}></div>
                  <span className="mp-macro-label">Fats</span>
                </div>
                <span className="mp-macro-value">27.9 g</span>
              </div>

              <div className="mp-macro-stat">
                <div className="mp-macro-label-wrap">
                  <div className="mp-macro-dot" style={{backgroundColor: colors.pink}}></div>
                  <span className="mp-macro-label">Protein</span>
                </div>
                <span className="mp-macro-value">10.2 g</span>
              </div>
            </div>
          </div>

          <div className="mp-meal-board">
            {categories.map((category) => (
              <div key={category}>
                <h4 className="mp-column-header">{category}</h4>
                {currentDayMeals[category].map((meal) => (
                  <div key={meal.id} className="mp-meal-card">
                    <div className="mp-meal-img-wrapper">
                      <img src={meal.img} alt={meal.title} className="mp-meal-img" />
                      <button className="mp-delete-btn" onClick={() => handleDeleteMeal(category, meal.id)}>
                        <X size={14} strokeWidth={3} />
                      </button>
                    </div>
                    <h5 className="mp-meal-title">{meal.title}</h5>
                    <div className="mp-meal-meta">
                      <span className="mp-meta-item"><Clock size={12} /> {meal.time}</span>
                      <span className="mp-meta-item"><Flame size={12} /> {meal.cal}</span>
                    </div>
                  </div>
                ))}
                <button className="mp-add-meal-card" onClick={() => openModal(category)}>
                  <span className="mp-add-meal-text">Add meal</span>
                  <div className="mp-add-meal-icon-wrap"><Plus size={16} strokeWidth={3} /></div>
                </button>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* --- ADD MEAL MODAL OVERLAY --- */}
      {isModalOpen && (
        <div className="mp-modal-overlay" onClick={closeModal}>
          <div className="mp-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="mp-modal-header">
              <h2 className="mp-modal-title">Add to meal planner</h2>
              <button className="mp-close-btn" onClick={closeModal}><X size={24} /></button>
            </div>

            <div className="mp-modal-controls">
              <div className="mp-controls-row1">
                <div className="mp-tabs-wrapper">
                  <button className={`mp-tab-btn ${modalTab === 'favorites' ? 'active' : ''}`} onClick={() => setModalTab('favorites')}>
                    <Heart size={16} color={modalTab === 'favorites' ? colors.primary : '#718096'} fill={modalTab === 'favorites' ? colors.primary : 'none'} />
                    My favorite recipes
                  </button>
                  <button className={`mp-tab-btn ${modalTab === 'all' ? 'active' : ''}`} onClick={() => setModalTab('all')}>
                    <BookOpen size={16} color={modalTab === 'all' ? colors.primary : '#718096'} />
                    All recipes
                  </button>
                </div>

                <div className="mp-search-wrapper">
                  <input 
                    type="text" 
                    placeholder="Search for recipe" 
                    className="mp-search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button className="mp-search-btn"><Search size={16} strokeWidth={3} /></button>
                </div>
              </div>

              <div className="mp-diet-row">
                {diets.map(diet => (
                  <button key={diet} className={`mp-diet-pill ${activeDiet === diet ? 'active' : ''}`} onClick={() => setActiveDiet(diet)}>
                    {diet}
                  </button>
                ))}
              </div>

              <div className="mp-sub-filter-row">
                <button className="mp-filter-dropdown-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="21" y1="10" x2="3" y2="10"></line><line x1="21" y1="6" x2="3" y2="6"></line><line x1="21" y1="14" x2="3" y2="14"></line><line x1="21" y1="18" x2="3" y2="18"></line></svg>
                  Frequent for {activeModalCategory ? activeModalCategory.toLowerCase() : 'dinner'}
                  <ChevronDown size={14} />
                </button>
                <button className="mp-filter-dropdown-btn"><SlidersHorizontal size={16} /> Filters</button>
              </div>
            </div>

            <div className="mp-modal-list-container">
              {filteredModalRecipes.length === 0 ? (
                <div className="mp-empty-modal">No recipes found for this category and filter. Try changing your search or diet filter.</div>
              ) : (
                filteredModalRecipes.map(recipe => (
                  <div key={recipe.id} className="mp-modal-recipe-card">
                    <div className="mp-modal-img-wrapper">
                      <img src={recipe.img} alt={recipe.title} className="mp-meal-img" />
                    </div>
                    <div className="mp-modal-card-info">
                      <h4 className="mp-modal-card-title">{recipe.title}</h4>
                      <div className="mp-modal-card-meta">
                        <span className="mp-meta-item"><Clock size={12} /> {recipe.time}</span>
                        <span className="mp-meta-item">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8m-9 4h4"></path><path d="M12 2v4"></path></svg>
                          {recipe.servings}
                        </span>
                        <span className="mp-meta-item"><Flame size={12} /> {recipe.cal} Cal</span>
                      </div>
                    </div>

                    <div className="mp-macros-table">
                      <div className="mp-macro-col">
                        <span className="mp-macro-head" style={{color: colors.calGreen}}>Cal</span>
                        <span className="mp-macro-val" style={{color: colors.calGreen}}>{recipe.cal}</span>
                      </div>
                      <div className="mp-macro-col">
                        <span className="mp-macro-head" style={{color: colors.primary}}>Carbs</span>
                        <span className="mp-macro-val" style={{color: colors.primary}}>{recipe.carbs}</span>
                      </div>
                      <div className="mp-macro-col">
                        <span className="mp-macro-head" style={{color: colors.accent}}>Fats</span>
                        <span className="mp-macro-val" style={{color: colors.accent}}>{recipe.fats}</span>
                      </div>
                      <div className="mp-macro-col">
                        <span className="mp-macro-head" style={{color: colors.pink}}>Protein</span>
                        <span className="mp-macro-val" style={{color: colors.pink}}>{recipe.protein}</span>
                      </div>
                    </div>

                    <button className="mp-add-btn-circle" onClick={() => confirmAddMeal(recipe)}>
                      <Plus size={18} strokeWidth={3} />
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MealPlanner;