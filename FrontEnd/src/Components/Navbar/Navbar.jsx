import { Leaf, User, Heart, ShoppingCart, Calendar, LogOut, ChevronDown } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext.jsx';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const navItems = ['Ingredients', 'Recipes', 'Features', 'About Us'];

  const handleLogout = () => {
    logout();
    setDropdownOpen(false);
    navigate('/');
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="navbar-wrapper">
      <div className="d-flex justify-content-between align-items-center">

        {/* LEFT: Logo Pill */}
        <div className="pill-container">
          <div className="d-flex align-items-center">
            <div className="logo-icon-wrapper">
              <Leaf size={24} fill="#194128" strokeWidth={0} />
            </div>
            <span className="brand-text">
              <Link to="/">RecipeHub</Link>
            </span>
          </div>
        </div>

        {/* CENTER: Links + Generate Button Pill */}
        <div className="pill-container">
          <div className="d-flex gap">
            {navItems.map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase().replace(' ', '-')}`}
                className="nav-link-custom"
              >
                {item}
              </Link>
            ))}
          </div>
          <button className="btn btn-generate" onClick={()=> navigate('/gen-ai-recipe')}>Generate Recipe</button>
        </div>

        {/* RIGHT: Auth */}
        <div>
          {user ? (
            // ── Logged in: avatar + dropdown ──────────────────
            <div className="user-menu" ref={dropdownRef}>
              <button
                className="btn btn-user"
                onClick={() => setDropdownOpen((prev) => !prev)}
              >
                <div className="user-avatar">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="user-name">{user.name.split(' ')[0]}</span>
                <ChevronDown size={14} className={`chevron ${dropdownOpen ? 'open' : ''}`} />
              </button>

              {dropdownOpen && (
                <div className="dropdown-menu-custom">
                  <div className="dropdown-header">
                    <p className="dropdown-user-name">{user.name}</p>
                    <p className="dropdown-user-email">{user.email}</p>
                  </div>

                  <div className="dropdown-divider" />

                  <Link to="/dashboard" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                    <User size={15} /> Profile
                  </Link>
                  <Link to="/dashboard/favorites" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                    <Heart size={15} /> Favourites
                  </Link>
                  <Link to="/dashboard/grocerylist" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                    <ShoppingCart size={15} /> Grocery List
                  </Link>
                  <Link to="/dashboard/mealplanner" className="dropdown-item" onClick={() => setDropdownOpen(false)}>
                    <Calendar size={15} /> Meal Planner
                  </Link>

                  {/* Admin only */}
                  {user.role === 'admin' && (
                    <>
                      <div className="dropdown-divider" />
                      <Link to="/dashboard" className="dropdown-item dropdown-item-admin" onClick={() => setDropdownOpen(false)}>
                        Admin Panel
                      </Link>
                    </>
                  )}

                  <div className="dropdown-divider" />

                  <button className="dropdown-item dropdown-item-logout" onClick={handleLogout}>
                    <LogOut size={15} /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            // ── Logged out: Login button ───────────────────────
            <button className="btn btn-login" onClick={() => navigate('/login')}>
              Login
            </button>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;