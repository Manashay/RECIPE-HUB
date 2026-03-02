import { 
  Leaf,
  X, 
  ChevronDown, 
  User, 
  Heart, 
  ShoppingCart, 
  Calendar, 
  LogOut 
 } from 'lucide-react';
 import './Navbar.css';

const Navbar = () => {
  const navItems = ['Ingredients', 'Recipes', 'Features', 'About Us'];

  return (  
    <nav className="navbar-wrapper">
      <div className="d-flex justify-content-between align-items-center">
        
        {/* LEFT: Logo Pill */}
        <div className="pill-container">
          <div className="d-flex align-items-center">
            <div className="logo-icon-wrapper">
              <Leaf size={24} fill="#194128" strokeWidth={0} />
            </div>
            <span className="brand-text"><a href='/'>YumYard</a></span>
          </div>
        </div>

        {/* CENTER: Links + Generate Button Pill */}
        <div className="pill-container">
          <div className="d-flex gap">
            {navItems.map((item) => (
              <a key={item} href={`/${item.toLowerCase()}`}  className="nav-link-custom">
                {item}
              </a>
            ))}
          </div>
          
          <button className="btn btn-generate">
            Generate Recipe
          </button>
        </div>

        {/* RIGHT: Login Button */}
        <div>
          <button className="btn btn-login">
            Login
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;