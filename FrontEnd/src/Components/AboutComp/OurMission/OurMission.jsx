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
      number: "10,000",
      label: "Recipes",
      desc: "Explore a vast collection of more than 10,000 meticulously curated recipes, ensuring a diverse range of culinary options for every taste and occasion."
    },
    {
      number: "70%",
      label: "Less Food Waste",
      desc: "Our platform has contributed to a remarkable 70% reduction in food waste, ensuring ingredients are used thoughtfully and sustainably."
    },
    {
      number: "200+",
      label: "Cuisines",
      desc: "Explore a world of flavors with access to over 200 cuisines, providing culinary inspiration that keeps your taste buds delighted."
    }
  ];

  return (
    <section className="mission-section">
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
        <h2 className="mission-header-title">Our Mission</h2>

        {/* --- TOP ROW --- */}
        <div className="row align-items-center">
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="mission-text-content">
              <p className="mission-paragraph">
                We know that managing your health and fitness can feel like a full-time job. That's why we created MealZeroes to provide you with the tools to support you for a lifetime of lasting health.
              </p>
              <p className="mission-paragraph">
                Our focus is providing real support to users living conscious lifestyles focused on healthy, delicious, whole foods. We supply you with chef-created recipes, meal plans, educational content from health experts, and an engaging community so you can keep it simple, while enjoying your life!
              </p>
              <p className="mission-paragraph">
                Since our start in 2010, we have expanded to be one of the top food tracking apps, with 15M downloads and a growing community of users taking interest and responsibility for their health.
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