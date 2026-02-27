import React from 'react';
import './FeaturesHero.css'; // Import the CSS file

const FeaturesHero = () => {
  const assets = {
    groceryBag: "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  };

  return (
    <section className="features-hero-section">
      <div className="container">
        <div className="row align-items-center">
          
          {/* LEFT: Text Content */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="hero-content-container">
              <h1 className="hero-main-title">
                Cook with what you<br />
                have in your fridge!
              </h1>
              <p className="hero-subtitle">
                We want to help you waste less, and eat more. Choose up to 3 ingredients and our library will tell you what you can make.
              </p>
            </div>
          </div>

          {/* RIGHT: Image Composition */}
          <div className="col-lg-6">
            <div className="hero-image-wrapper">
              <img 
                src={assets.groceryBag} 
                alt="Grocery Bag with Vegetables" 
                className="hero-main-image" 
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          </div>

        </div>
      </div>

      {/* The curved white background for the next section */}
      <div className="hero-bottom-curve"></div>
    </section>
  );
};

export default FeaturesHero;