import React from 'react';
import { Leaf, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  const navItems = [
    'Ingredients', 'Recipes', 'Features', 'About us', 
    'Support', 'Terms of Service', 'Privacy Policy', 'FAQs'
  ];

  const socialIcons = [
    <Facebook size={18} />, 
    <Instagram size={18} />, 
    <Linkedin size={18} />, 
    <Youtube size={18} />
  ];

  return (
    <div className="footer-wrapper">
      <div className="footer-container">
        
        {/* 1. LOGO CUTOUT */}
        <div className="logo-cutout">
          <div className="d-flex align-items-center">
            <div className="d-flex logo-rotate">
               <Leaf size={28} color="#194128" fill="#194128" strokeWidth={0} />
            </div>
            <span className="brand-text"><a href='/'>Yum Yard</a></span>
          </div>
        </div>

        {/* 2. TOP ROW: Navigation */}
        <div className="d-flex justify-content-end align-items-center mb-5 pt-2">
           <div className="d-none d-lg-flex flex-wrap justify-content-end">
              {navItems.map((item) => (
                <a key={item} href={`/${item.toLowerCase()}`} className="nav-link-custom">
                  {item}
                </a>
              ))}
           </div>
        </div>

        {/* 3. MIDDLE ROW: Socials, Text, Buttons */}
        <div className="row align-items-center gy-4">
          <div className="col-lg-3 col-md-12">
            <div className="d-flex gap-3">
              {socialIcons.map((icon, i) => (
                <a key={i} href="#" className="social-icon">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          <div className="col-lg-5 col-md-12">
            <p className="footer-description">
              Easy Cooking is the most advanced set of tools to make your lifestyle easy. 
              Our smart tool powered by AI to help you generate recipes with what you have in your fridge!
            </p>
          </div>

          <div className="col-lg-4 col-md-12 d-flex justify-content-lg-end gap-3">
            <button className="btn btn-outline-custom">Login</button>
            <button className="btn btn-outline-custom">Generate Recipe</button>
          </div>
        </div>

        {/* 4. BOTTOM ROW: Copyright */}
        <div className="footer-copyright d-flex justify-content-between flex-wrap">
           <span>© 2023 Meal Zeroes. All rights reserved</span>
           <span>Designed by FineDev</span>
        </div>

      </div>
    </div>
  );
};

export default Footer;
