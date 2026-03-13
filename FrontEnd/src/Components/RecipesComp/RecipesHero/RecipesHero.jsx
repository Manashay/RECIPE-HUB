import React from 'react';
import { Search } from 'lucide-react';
import './RecipesHero.css';

const RecipesHero = () => {

  // const [recipe, setRecipe] = useState('');
  const popularTags = ['Indian', 'Western', 'Healthy', 'Snacks'];

  return (
    <section className="recipes-hero-wrapper">
      <div className="recipes-hero-card">
        
        {/* Title Content */}
        <h1 className="recipes-hero-title">
          Explore Over 50,000+ Unique Low-Carb and Keto Recipes
        </h1>

        {/* Search Bar */}
        <div className="search-container">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search recipes" 
          />
          <button className="search-button">
            <Search size={20} color="#FFFFFF" />
          </button>
        </div>

        {/* Popular Tags Section */}
        <div className="tags-section">
          <p className="tags-label">Can't think of anything? Try these popular tags</p>
          <div className="tags-list">
            {popularTags.map((tag) => (
              <button key={tag} className="tag-pill">
                {tag}
              </button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default RecipesHero;