import React from 'react';
import { Check } from 'lucide-react';
import './CookingSection.css';

const KetoSection = () => {
  const assets = {
    imageTop: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    imageBottom: "https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    tomato: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Tomato.png",
    avocado: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Avocado.png",
    garlic: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Garlic.png",
    broccoli: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Broccoli.png",
    leaf: "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Animals%20Nature/Leaf%20Fluttering%20in%20Wind.png"
  };

  const features = [
    "Explore global flavors.",
    "Find breakfast to dinner.",
    "30-minute meal options.",
    "Create weekly meal plans.",
    "Master professional cooking tips.",
    "New recipes added daily."
  ];

  return (
    <section className="yum-yard-section">
      <div className="container position-relative">
        
        {/* 3D ASSETS CLUSTER */}
        <div className="d-none d-lg-block">
          <img src={assets.tomato} className="floating-asset" style={{ top: '5%', right: '-5%', width: '100px', transform: '--rotation', animationDelay: '0s' }} alt="" />
          <img src={assets.leaf} className="floating-asset" style={{ top: '18%', right: '-2%', width: '120px', transform: '--rotation', animationDelay: '1s' }} alt="" />
          <img src={assets.garlic} className="floating-asset" style={{ top: '45%', right: '-6%', width: '80px', transform: '--rotation', animationDelay: '2s' }} alt="" />
          <img src={assets.broccoli} className="floating-asset" style={{ top: '75%', right: '-4%', width: '110px', transform: '--rotation', animationDelay: '1.5s' }} alt="" />
          <img src={assets.avocado} className="floating-asset" style={{ top: '85%', right: '-8%', width: '90px', transform: '--rotation', animationDelay: '0.5s' }} alt="" />
        </div>

        <h2 className="main-title">Explore the World of Flavors at RecipeHub</h2>

        <div className="row align-items-center">
          {/* LEFT: Vertical Collage */}
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="collage-wrapper">
              <div className="top-image-container">
                <img src={assets.imageTop} alt="Cooking" className="collage-img" />
              </div>
              <div className="bottom-image-container">
                <img src={assets.imageBottom} alt="Food Pot" className="collage-img" />
              </div>
              <div className="floating-card">
                <p className="card-text">
                  Personalize your cooking journey and master every meal type.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Text Content */}
          <div className="col-lg-6">
            <div className="content-container">
              <h3 className="sub-title">Find Your Next Favorite Meal</h3>
              <p className="description">
                We’re more than just a recipe list. RecipeHub is your ultimate culinary hub, offering a curated collection of thousands of dishes. Whether you’re a beginner or a pro, our platform helps you:
              </p>
              <div className="feature-grid">
                {features.map((item, index) => (
                  <div key={index} className="feature-item">
                    <Check size={18} color="#ec5833" strokeWidth={3} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KetoSection;
