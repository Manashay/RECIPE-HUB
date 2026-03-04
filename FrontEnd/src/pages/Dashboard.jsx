import React, { useState, useEffect } from "react"; // Added hooks
import axios from "axios"; // Added axios
import { useAuth } from "../Context/AuthContext.jsx";
import { useNavigate, Link } from "react-router-dom";
import { User, Heart, ShoppingCart, Calendar, LogOut, ChefHat, Leaf, ArrowRight } from "lucide-react";
import "./Dashboard.css";

export default function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  // 1. ADD STATE FOR COUNTS
  const [counts, setCounts] = useState({
    favorites: 0,
    shoppingList: 0,
    mealPlanner: 0,
    myRecipes: 0
  });

  // 2. FETCH DATA ON LOAD
  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const response = await axios.get("/api/recipes/dashboard/counts");
        setCounts(response.data);
      } catch (error) {
        console.error("Failed to load counts:", error);
      }
    };
    fetchCounts();
  }, []);

  const handleLogout = () => { logout(); navigate("/"); };

  // 3. MAP THE STATE TO THE CARDS
  const cards = [
    { icon: <Heart size={22} />, label: "Favourites", count: counts.favorites, desc: "Recipes you've saved", color: "#fff0f0", accent: "#e53e3e", to: "/dashboard/favorites" },
    { icon: <ShoppingCart size={22} />, label: "Shopping List", count: counts.shoppingList, desc: "Ingredients to buy", color: "#f0f7ff", accent: "#3b82f6", to: "/dashboard/grocerylist" },
    { icon: <Calendar size={22} />, label: "Meal Planner", count: counts.mealPlanner, desc: "Plan your week", color: "#f5f0ff", accent: "#7c6fef", to: "/dashboard/mealplanner" },
    { icon: <ChefHat size={22} />, label: "My Recipes", count: counts.myRecipes, desc: "Recipes you created", color: "#f0fff4", accent: "#194128", to: "/dashboard/my-recipes" },
  ];

  return (
    <div className="dash-page">
      {/* Header */}
      <div className="dash-header">
        <div className="dash-header-left">
          <div className="dash-avatar">{user?.name?.charAt(0).toUpperCase()}</div>
          <div>
            <p className="dash-greeting">Good to see you back 👋</p>
            <h1 className="dash-name">{user?.name}</h1>
            <span className="dash-role">{user?.role === "admin" ? "⚡ Admin" : "🍴 Member"}</span>
          </div>
        </div>
        <button className="dash-logout" onClick={handleLogout}>
          <LogOut size={15} /> Logout
        </button>
      </div>

      {/* Info */}
      <div className="dash-info-row">
        <div className="dash-info-item"><User size={14} /><span>{user?.email}</span></div>
        <div className="dash-info-item"><Leaf size={14} /><span>YumYard Member</span></div>
      </div>

      {/* Cards */}
      <h2 className="dash-section-title">Your Kitchen</h2>
      <div className="dash-cards">
        {cards.map((card) => (
          <Link to={card.to} key={card.label} className="dash-card" style={{ "--accent": card.accent, "--bg": card.color }}>
            <div className="dash-card-icon" style={{ background: card.color, color: card.accent }}>{card.icon}</div>
            <div>
              <p className="dash-card-label">{card.label}</p>
              <p className="dash-card-desc">{card.desc}</p>
            </div>
            {/* 4. UPDATED TO SHOW THE COUNT FROM STATE */}
            <div className="dash-card-count">{card.count}</div>
            <ArrowRight size={16} className="dash-card-arrow" />
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <h2 className="dash-section-title">Quick Actions</h2>
      <div className="dash-actions">
        <Link to="/recipes" className="dash-action-btn dash-action-primary"><ChefHat size={16} /> Browse Recipes</Link>
        <Link to="/ingredients" className="dash-action-btn dash-action-outline"><ShoppingCart size={16} /> Check Ingredients</Link>
      </div>

      {user?.role === "admin" && (
        <>
          <Link to="/recipes/add" className="dash-action-btn dash-action-primary" style={{ marginBottom: "16px" }}>
            <ChefHat size={16} /> Add New Recipe
          </Link>
          <Link to="/dashboard" className="dash-admin-banner">
            <span>⚡ You have admin access</span>
            <span className="dash-admin-link">Go to Admin Panel →</span>
          </Link>
        </>
      )}
    </div>
  );
}