import React from 'react';
import { ChefHat } from 'lucide-react';
import './CompanyCulture.css';

const CompanyCulture = () => {
  const assets = {
    mainBoard: "https://images.unsplash.com/photo-1490474418585-ba9f52c212d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tropicalLeaf: "https://images.unsplash.com/photo-1611073052081-5a5078a1ee1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
    collage: [
      "https://images.unsplash.com/photo-1525274506307-b3527aa197ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1556910103-1c02745a30bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      "https://images.unsplash.com/photo-1605691060375-3e289bf6b9b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    ]
  };

  const listItems = [
    "We're a 100% remote-first team",
    "We currently have 34 team members",
    "We're culturally and geographically diverse",
    "Supporting our team members is a top priority"
  ];

  return (
    <section className="culture-section">
      <div className="container">
        <h2 className="culture-main-title">Our Company Culture</h2>

        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="culture-left-content">
              <h3 className="culture-subtitle">MealZeroes is one of a kind!</h3>
              <p className="culture-description">
                MealZeroes is one of a kind! We enjoy flexible working hours, online and offline get-togethers, dropping the perfect meme in Slack, and sharing our own passions for health and wellness.
              </p>

              <div className="culture-pill-list">
                {listItems.map((text, index) => (
                  <div key={index} className="culture-pill-item">
                    <div className="culture-icon-box">
                      <ChefHat size={20} color="#EC5833" strokeWidth={2.5} />
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 d-none d-lg-block">
            <div className="culture-image-wrapper">
              <img 
                src={assets.mainBoard} 
                alt="Healthy food bowl" 
                className="culture-board-image" 
              />
              <img 
                src={assets.tropicalLeaf} 
                alt="Tropical leaf" 
                className="culture-plant-overlay" 
              />
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM COLLAGE */}
      <div className="culture-collage-wrapper">
        <div className="culture-collage-row">
          <img src={assets.collage[0]} className="culture-collage-img" style={{ flex: 1 }} alt="Food" />
          <img src={assets.collage[1]} className="culture-collage-img" style={{ flex: 1.5 }} alt="Cooking" />
          <img src={assets.collage[2]} className="culture-collage-img" style={{ flex: 1.2 }} alt="Photos" />
          <img src={assets.collage[3]} className="culture-collage-img" style={{ flex: 1 }} alt="Salad" />
          <img src={assets.collage[4]} className="culture-collage-img" style={{ flex: 1.3 }} alt="Pasta" />
        </div>

        <div className="culture-collage-row">
          <img src={assets.collage[5]} className="culture-collage-img" style={{ flex: 0.8 }} alt="Bowl" />
          <img src={assets.collage[6]} className="culture-collage-img" style={{ flex: 1.2 }} alt="Eating" />
          <img src={assets.collage[7]} className="culture-collage-img" style={{ flex: 1.5 }} alt="Veggies" />
          <img src={assets.collage[8]} className="culture-collage-img" style={{ flex: 1 }} alt="Pizza" />
          <img src={assets.collage[9]} className="culture-collage-img" style={{ flex: 1.1 }} alt="Toast" />
          <img src={assets.collage[10]} className="culture-collage-img" style={{ flex: 0.8 }} alt="Tablet" />
        </div>
      </div>
    </section>
  );
};

export default CompanyCulture;