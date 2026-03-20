import React from "react";
import { ArrowDown } from "lucide-react";
import "./AboutHero.css";

const AboutHero = () => {
  const assets = {
    saladPlate:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    avocado:
      "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Avocado.png",
    lemon:
      "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Lemon.png",
    leaf: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Food/Leafy%20Green.png",
    onion:
      "https://cdn.jsdelivr.net/gh/Tarikul-Islam-Anik/Animated-Fluent-Emojis/Emojis/Food/Onion.png",
  };

  const handleScroll = () => {
    const element = document.getElementById("target-ourMission-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="about-hero-section">
      <div className="container">
        <div className="about-hero-wrapper">
          {/* Main Orange Banner */}
          <div className="hero-orange-box">
            <h1 className="hero-main-title">RecipeHub</h1>
            <p className="hero-subtitle">We make your lifestyle easy!</p>
          </div>

          {/* The Cutout Green Button */}
          <div className="hero-green-button" onClick={handleScroll}>
            <p className="hero-btn-text">Let's meet our company</p>
            <ArrowDown size={20} color="#FFFFFF" />
          </div>

          {/* Right Side Plate & Floating Elements (Desktop Only) */}
          <div className="hero-plate-area">
            {/* The White Plate with Salad */}
            <div className="hero-plate-wrapper">
              <img
                src={assets.saladPlate}
                alt="Fresh Salad Plate"
                className="hero-plate-image"
              />
            </div>

            {/* Floating 3D Ingredients around the plate */}
            <img
              src={assets.avocado}
              className="hero-floating-item"
              style={{
                top: "10%",
                right: "-20px",
                width: "100px",
                "--rotate": "25deg",
                animationDelay: "0s",
              }}
              alt="Avocado"
            />
            <img
              src={assets.lemon}
              className="hero-floating-item"
              style={{
                top: "-10%",
                right: "250px",
                width: "70px",
                "--rotate": "-15deg",
                animationDelay: "1s",
              }}
              alt="Lemon"
            />
            <img
              src={assets.onion}
              className="hero-floating-item"
              style={{
                top: "25%",
                right: "380px",
                width: "60px",
                "--rotate": "45deg",
                animationDelay: "0.5s",
              }}
              alt="Onion"
            />
            <img
              src={assets.leaf}
              className="hero-floating-item"
              style={{
                top: "75%",
                right: "380px",
                width: "80px",
                "--rotate": "-30deg",
                animationDelay: "1.5s",
              }}
              alt="Leaf"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
