import React from 'react';
import './CookingForEveryone.css';

const YumYard = () => {
  const assets = {
    mainFamilyImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    backupImage: "https://images.unsplash.com/photo-1604160450925-077743c4202b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    chefIcon: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Cook.png",
    bookIcon: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Objects/Open%20Book.png",
    cutleryIcon: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Fork%20and%20Knife%20with%20Plate.png",
    leaf: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Animals%20Nature/Leaf%20Fluttering%20in%20Wind.png"
  };

  return (
    <section className="yum-yard-section">
      <div className="container position-relative">
        <div className="row align-items-center">
          
          {/* LEFT: Text Content */}
          <div className="col-lg-6">
            <div className="content-container">
              <h2 className="main-title">Cooking for everyone</h2>
              <p className="description">
                RecipeHub isn't just another recipe site. Our community-driven features make it simple and fun for everyone to master the kitchen.
              </p>

              <div className="feature-list">
                <div className="feature-card">
                  <div className="icon-box">
                    <img src={assets.chefIcon} className="icon-img" alt="Pizza" />
                  </div>
                  <p className="feature-text">
                    Save time with smart meal filters and auto-generated shopping lists tailored to your dietary needs
                  </p>
                </div>

                <div className="feature-card">
                  <div className="icon-box">
                    <img src={assets.bookIcon} className="icon-img" alt="Book" />
                  </div>
                  <p className="feature-text">
                    Stay inspired with our global database of thousands of chef-approved recipes for every skill level
                  </p>
                </div>

                <div className="feature-card">
                  <div className="icon-box">
                    <img src={assets.cutleryIcon} className="icon-img" alt="Cutlery" />
                  </div>
                  <p className="feature-text">
                    Have fun exploring diverse meal types with interactive guides for over 250+ unique dishes
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Image Composition */}
          <div className="col-lg-6">
            <div className="image-wrapper">
              <img 
                src={assets.mainFamilyImage} 
                alt="Family cooking together" 
                className="main-image"
                onError={(e) => {
                  e.target.onerror = null; 
                  e.target.src = assets.backupImage;
                }} 
              />
              <div className="green-card">
                <p className="card-text">
                  Cooking isn't just a chore.<br/> It's an adventure!
                </p>
              </div>
            </div>
          </div>

        </div>
        
        {/* Leaf Decor */}
        <div className="d-none d-lg-block">
            <img src={assets.leaf} className="floating-leaf" alt="" />
        </div>
      </div>
    </section>
  );
};

export default YumYard;
