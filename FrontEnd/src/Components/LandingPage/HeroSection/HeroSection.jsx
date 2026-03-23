import React from 'react';
import { ArrowDown, Carrot } from 'lucide-react';
import './HeroSection.css';
import broccoli from '../../../assets/Broccoli.png'
import Plate from '../../../assets/Plate.avif'
import avocado from '../../../assets/Avocado.png';
import carrot from '../../../assets/Carrot.png';
import tomato from '../../../assets/Tomato.png';
import onion from '../../../assets/Onion.png';
import garlic from '../../../assets/Garlic.png';

const HeroSection = () => {

  const handleScroll = () =>{
    const element = document.getElementById('target-fridge-section');
    if(element){
      element.scrollIntoView({behavior:'smooth'});
    }
  };

  const assets = {
    plateUrl: Plate ,
    broccoli: broccoli,
    avocado: avocado,
    carrot: carrot,
    tomato: tomato,
    onion: onion,
    garlic: garlic
  };

  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-card">
          
          <div className="row w-100 m-5">
            <div className="col-lg-7 hero-content">
              <h1 className="hero-title">
                Cook Smart,<br />
                Waste Less
              </h1>
              <p className="hero-subtitle">
                Unlock culinary magic: cook with what <br className="d-none d-md-block"/>
                you have in your fridge!
              </p>
            </div>
          </div>

          <div className="hero-cutout d-none d-md-flex">
            <button className="hero-action-btn" onClick={handleScroll} >
              <span>Let's explore what you can cook</span>
              <ArrowDown size={24} />
            </button>
          </div>

          {/* RIGHT SIDE: 3D FOOD CLUSTER */}
          <div className="d-none d-lg-block">
            <div className="plate-container">
              <img src={assets.plateUrl} alt="Salmon Dish" className="plate-image" />
            </div>

            {/* Clustered Assets */}
            <img src={assets.broccoli} className="floating-asset" 
                 style={{ top: '10%', left: '52%', width: '110px', zIndex: 26, animationDelay: '0s', '--rotate-start': '-20deg' }} />
            
            <img src={assets.avocado} className="floating-asset" 
                 style={{ top: '65%', left: '48%', width: '100px', zIndex: 26, animationDelay: '1s', '--rotate-start': '15deg' }} />

            <img src={assets.carrot} className="floating-asset" 
                 style={{ top: '-5%', left: '75%', width: '90px', animationDelay: '0.5s', '--rotate-start': '45deg', zIndex: 26 }} />

            <img src={assets.tomato} className="floating-asset" 
                 style={{ top: '25%', left: '45%', width: '60px', animationDelay: '2s', '--rotate-start': '-15deg' }} />
            
            <img src={assets.onion} className="floating-asset" 
                 style={{ top: '80%', left: '60%', width: '70px', animationDelay: '1.5s', '--rotate-start': '30deg' }} />
            
            <img src={assets.garlic} className="floating-asset" 
                 style={{ top: '75%', left: '85%', width: '50px', animationDelay: '1.8s', '--rotate-start': '10deg', zIndex: 26 }} />
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
