import React from 'react';
import './FoodWasteSection.css';

const FoodWasteSection = () => {
  const assets = {
    wasteImage: "https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  };

  const leftColumnData = [
    { num: "1.3", unit: "Billion Tons", desc: "This amounts to about 1.3 billion tons of food wasted every year." },
    { num: "8%", unit: "of Emissions", desc: "Food waste contributes to roughly 8% of global greenhouse gas emissions due to decomposition in landfills." },
    { num: "$1", unit: "Trillion Loss", desc: "The economic cost of global food waste is estimated at around $1 trillion each year." }
  ];

  const rightColumnData = [
    { num: "1 in 9", unit: "Go Hungry", desc: "While food is wasted, 1 in 9 people on the planet go to bed hungry." },
    { num: "2.5", unit: "Billion People", desc: "Food waste could feed over 2.5 billion people, surpassing the number of those who are undernourished." },
    { num: "2.9", unit: "Trillion Gallons", desc: "Food waste also squanders approximately 2.9 trillion gallons of water annually." }
  ];

  const StatCard = ({ num, unit, desc }) => (
    <div className="stat-card">
      <div className="info-icon-badge">i</div>
      <div className="stat-value-container">
        <h4 className="stat-number">{num}</h4>
        <span className="stat-unit">{unit}</span>
      </div>
      <p className="stat-description">{desc}</p>
    </div>
  );

  return (
    <section className="food-waste-section">
      <div className="container">
        
        {/* HEADER */}
        <div className="waste-header-container">
          <h2 className="waste-title">
            Let RecipeHub Think For You.<br />
            Save thousands of dollars and<br />
            reduce food waste.
          </h2>
        </div>

        {/* 3-COLUMN LAYOUT */}
        <div className="row align-items-stretch">
          
          {/* LEFT COLUMN */}
          <div className=" col-md d-flex flex-column">
            {leftColumnData.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          {/* CENTER COLUMN */}
          <div className="col-lg-6 d-none d-lg-block">
            <div className="center-image-wrapper">
              <div className="image-container-box">
                <img 
                  src={assets.wasteImage} 
                  alt="Food Scraps" 
                  className="waste-main-image" 
                  onError={(e) => e.target.style.display = 'none'}
                />
              </div>
              <div className="overlay-green-card">
                <p className="overlay-card-text">
                  Approximately one-third of all food produced globally—equivalent to 1.3 billion tons—goes to waste every year
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className=" col-md d-flex flex-column">
            {rightColumnData.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FoodWasteSection;