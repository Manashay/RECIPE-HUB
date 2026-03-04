import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, Heart, ShoppingCart, Calendar, LogOut, Home } from 'lucide-react';
import './FavoriteSidebar.css'; 

const FavoriteSidebar = () => {
  return (
    <div className="fav-sidebar">
      
      {/* TOP MENU (Logo has been removed) */}
      <div className="fav-menu-group">
        <NavLink to="/dashboard" end className="fav-nav-link">
          {({ isActive }) => (
            <div className={`fav-menu-item ${isActive ? 'active' : ''}`}>
              <User size={20} />
              <span>Dashboard</span>
            </div>
          )}
        </NavLink>
        
        <NavLink to="/dashboard/favorites" className="fav-nav-link">
          {({ isActive }) => (
            <div className={`fav-menu-item ${isActive ? 'active' : ''}`}>
              <Heart size={20} />
              <span>Favorite recipes</span>
            </div>
          )}
        </NavLink>
        
        <NavLink to="/dashboard/grocerylist" className="fav-nav-link">
          {({ isActive }) => (
            <div className={`fav-menu-item ${isActive ? 'active' : ''}`}>
              <ShoppingCart size={20} />
              <span>Grocery list</span>
            </div>
          )}
        </NavLink>

        <NavLink to="/dashboard/mealplanner" className="fav-nav-link">
          {({ isActive }) => (
            <div className={`fav-menu-item ${isActive ? 'active' : ''}`}>
              <Calendar size={20} />
              <span>Meal planner</span>
            </div>
          )}
        </NavLink>
      </div>

      {/* BOTTOM MENU */}
      <div className="fav-bottom-menu">
        <div className="fav-menu-item logout-btn">
          <LogOut size={20} />
          <span>Logout</span>
        </div>
        
        <NavLink to="/" className="fav-nav-link">
          <div className="fav-menu-item">
            <Home size={20} />
            <span>Back to website</span>
          </div>
        </NavLink>
      </div>

    </div>
  );
};

export default FavoriteSidebar;