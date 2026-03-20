import React from 'react';
import { ChefHat } from 'lucide-react';
import './CompanyCulture.css';
import TheBoys from '../../../assets/TheBoys.jpeg';

const CompanyCulture = () => {
  const assets = {
    mainBoard: TheBoys,
    tropicalLeaf: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Animals/Hyacinth.png",
    collage: [
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1470549813517-2fa741d25c92?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1605433247501-698725862cea?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      "https://images.unsplash.com/photo-1495461199391-8c39ab674295?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    ]
  };

  const listItems = [
    "A core team of 3 BCCA students",
    "Focused on high-speed AI inference",
    "Built with modern full-stack tools",
    "Practical learning is our top priority"
  ];

  return (
    <section className="culture-section">
      <div className="container">
        <h2 className="culture-main-title">Our Project Team</h2>

        <div className="row align-items-center">
          {/* LEFT CONTENT */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="culture-left-content">
              <h3 className="culture-subtitle">RecipeHub is student-powered!</h3>
              <p className="culture-description">
                RecipeHub is the result of our shared curiosity and many late-night coding sessions. We thrive on solving MERN stack challenges, optimizing Groq AI prompts, and turning a simple idea into a high-performance recipe hub for our final year BCCA project.
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