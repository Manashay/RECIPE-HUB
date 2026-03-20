import React from 'react';
import { ChefHat } from 'lucide-react';
import './OurMission.css';

const OurMission = () => {
  const assets = {
    missionImage: "https://images.unsplash.com/photo-1556911261-6bd341186b2f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    lemon: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Lemon.png",
    leaf: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Leafy%20Green.png",
  };

  const statsData = [
    {
      number: "Instant",
      label: "Groq AI",
      desc: "Experience the future of AI with near-zero latency. RecipeHub uses Groq’s LPU technology to generate complete, structured recipes in the blink of an eye—no waiting, just cooking."
    },
    {
      number: "Smart",
      label: "Search",
      desc: "Our optimized MERN backend matches your available ingredients with massive culinary datasets. This ensures you cook what you have, reducing waste and simplifying your kitchen routine."
    },
    {
      number: "Global",
      label: "Flavors",
      desc: "Explore a world of taste with an AI that understands thousands of regional cuisines. From local Indian traditions to international delicacies, the variety is truly limitless."
    }
  ];

  return (
    <section id='target-ourMission-section' className="mission-section">
      {/* Floating Decor (Top Left) */}
      <div className="decor-container d-none d-lg-block">
        <img 
          src={assets.lemon} 
          className="floating-item" 
          style={{ top: '10px', left: '-30px', width: '90px', '--rotate': '15deg', animationDelay: '0s' }} 
          alt="Lemon" 
        />
        <img 
          src={assets.lemon} 
          className="floating-item" 
          style={{ top: '80px', left: '40px', width: '120px', '--rotate': '-20deg', animationDelay: '1s' }} 
          alt="Lemon Cut" 
        />
        <img 
          src={assets.leaf} 
          className="floating-item" 
          style={{ top: '30px', left: '120px', width: '60px', '--rotate': '45deg', animationDelay: '0.5s' }} 
          alt="Leaf" 
        />
      </div>

      <div className="container">
        <h2 className="mission-header-title">Our Mission: The RecipeHub Vision</h2>

        {/* --- TOP ROW --- */}
        <div className="row align-items-center">
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="mission-text-content">
              <p className="mission-paragraph">
                Staring at a half-empty fridge shouldn't be a source of stress. We developed RecipeHub to bridge the gap between "What's for dinner?" and a gourmet meal using cutting-edge inference technology.
              </p>
              <p className="mission-paragraph">
                Our focus is to provide a lightning-fast platform for home cooks. By integrating Groq AI, we offer near-instant recipe generation based on your available ingredients. We believe that speed and intelligence can transform the kitchen from a place of chores into a hub of discovery.
              </p>
              <p className="mission-paragraph">
                What started as a BCCA technical project in 2026 is now a proof-of-concept for the future of cooking. We are dedicated to showing how high-performance AI can help everyone take the lead in their own culinary adventures.
              </p>
            </div>
          </div>

          <div className="col-lg-7">
            <div className="mission-image-wrapper">
              <div className="mission-overlay-card overlay-card-responsive">
                <p className="mission-overlay-text">
                  We're passionate about promoting sustainable nutrition and fitness keeping it exciting and delicious.
                </p>
              </div>
              <img 
                src={assets.missionImage} 
                alt="Couple cooking together" 
                className="mission-main-image" 
                onError={(e) => e.target.style.display = 'none'}
              />
            </div>
          </div>
        </div>

        {/* --- BOTTOM ROW: Stats Grid --- */}
        <div className="mission-stats-container">
          <div className="row g-4">
            {statsData.map((stat, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="mission-stat-card">
                  <ChefHat color="#EC5833" size={32} />
                  <div className="mission-stat-header">
                    <h3 className="mission-stat-number">{stat.number}</h3>
                    <span className="mission-stat-label">{stat.label}</span>
                  </div>
                  <p className="mission-stat-desc">{stat.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;