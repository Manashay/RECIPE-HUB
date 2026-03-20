import React from 'react';
import { ArrowRight } from 'lucide-react';
import './TrendingRecipes.css';
import breakfast from '../../../assets/breakfast.jpg';
import lunch from '../../../assets/lunch.png';
import dinner from '../../../assets/dinner.png';
import snacks from '../../../assets/Snacks.jpeg';
import { useNavigate } from 'react-router-dom';


const TrendingRecipes = () => {
  const navigate = useNavigate();

  const categories = [
    { name: 'Breakfast', img: breakfast },
    { name: 'Lunch', img: lunch },
    { name: 'Dinner', img: dinner },
    { name: 'Snacks', img: snacks },
  ];

  const handleNavigation = (name)=>{
    const route = name;
    navigate(`/recipes/${route}`);
  }

  return (
    <section className="trending-section">
      <div className="container trend-container">
        <h2 className="trending-title">Trending Recipes</h2>
        
        <div className="trending-grid">
          {/* Category Cards */}
          {categories.map((cat, id) => (
            <div key={id} className="trend-item" onClick={() => handleNavigation(cat.name)} >
              <div className="trend-img-circle ">
                <img src={cat.img} alt={cat.name} />
              </div>
              <p className="trend-name">{cat.name}</p>
            </div>
          ))}

          {/* Explore More Card */}
          <div className="explore-card" onClick={() => navigate('/recipes')}>
            <h3 className="explore-text">Explore More Recipes</h3>
            <button className="explore-btn">
              <ArrowRight size={20} color="white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingRecipes;