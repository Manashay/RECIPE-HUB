// Components/UserComp/DashboardLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import FavoriteSidebar from './Favorite/FavoriteSidebar';
import './Favorites.css';

const DashboardLayout = () => {
  return (
    <div className="favorites-dashboard-layout">
      {/* LEFT: Fixed Sidebar */}
      <div className="dashboard-sidebar-wrapper">
        <FavoriteSidebar />
      </div>

      {/* RIGHT: Dynamic Content Area */}
      <div className="dashboard-content-area">
        {/* React Router will inject Favorites, Profile, or Meal Planner here! */}
        <Outlet /> 
      </div>
    </div>
  );
};

export default DashboardLayout;