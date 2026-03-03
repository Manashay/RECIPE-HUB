import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './pages/Home.jsx';
import Recipes from './pages/Recipes.jsx';
import Ingredients from './pages/Ingredients.jsx';
import Features from './pages/Features.jsx';
import About from './pages/About.jsx';
import Footer from './Components/Footer/footer.jsx';
import { createBrowserRouter, Outlet, RouterProvider, Navigate } from 'react-router-dom';
import ScrollToTop from './Components/Helper/ScrollToTop.jsx';
import RecipeDetail from './Components/RecipesComp/RecipeDetails/RecipeDetails.jsx';
import IngredientsDetails from './Components/RecipesComp/IngredientsDetails/IngredientsDetails.jsx';
import RecipesList from './Components/RecipesComp/MealTypeRecipes/RecipesList.jsx';
import EditRecipe from './pages/EditRecipe.jsx';
import AddRecipe from './pages/AddRecipe.jsx';

// 🆕 Auth imports
import { AuthProvider, useAuth  } from './Context/AuthContext.jsx';
import ProtectedRoute from './Components/auth/ProtectedRoute.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx'; // user's saved recipes, profile, etc.

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <ScrollToTop />
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

// 🆕 Redirect already-logged-in users away from /login and /register
function GuestRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (user) return <Navigate to="/" replace />;
  return children;
}

// App.jsx

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      // ── Guest-only ─────────────────────────────────────────
      { path: "/login",    element: <GuestRoute><Login /></GuestRoute> },
      { path: "/register", element: <GuestRoute><Register /></GuestRoute> },

      // ── ALL routes below require login ──────────────────────
      { path: "/",            element: <ProtectedRoute><Home /></ProtectedRoute> },
      { path: "/ingredients", element: <ProtectedRoute><Ingredients /></ProtectedRoute> },
      { path: "/recipes",     element: <ProtectedRoute><Recipes /></ProtectedRoute> },
      { path: "/features",    element: <ProtectedRoute><Features /></ProtectedRoute> },
      { path: "/about-us",    element: <ProtectedRoute><About /></ProtectedRoute> },
      {
        path: "/recipes/edit/:id",
        element: <ProtectedRoute requiredRole="admin"><EditRecipe /></ProtectedRoute>
      },
      {
        path: "/recipes/add",
        element: <ProtectedRoute requiredRole="admin"><AddRecipe /></ProtectedRoute>
      },

      { path: "/recipeDetails/:id", element: <ProtectedRoute><RecipeDetail /><IngredientsDetails /></ProtectedRoute> },
      { path: "/recipes/:mealType", element: <ProtectedRoute><RecipesList /></ProtectedRoute> },

      { path: "/dashboard", element: <ProtectedRoute><Dashboard /></ProtectedRoute> },

      { path: "*", element: <Navigate to="/login" replace /> },  // 👈 unknown routes → login
    ]
  }
]);

function App() {
  return (
    // 🆕 Wrap everything in AuthProvider so ALL components can access auth state
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;