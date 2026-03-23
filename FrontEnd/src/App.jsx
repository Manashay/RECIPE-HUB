import axios from 'axios';

axios.defaults.baseURL = import.meta.env.VITE_API_URL || '';

axios.defaults.withCredentials = true;

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
import RecipesList from './Components/RecipesComp/MealTypeRecipes/RecipesList.jsx';
import EditRecipe from './pages/EditRecipe.jsx';
import AddRecipe from './pages/AddRecipe.jsx';

// Auth imports
import { AuthProvider, useAuth } from './Context/AuthContext.jsx';
import ProtectedRoute from './Components/Auth/ProtectedRoute.jsx';
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import Dashboard from './pages/Dashboard.jsx'; 
import GenAiRecipe from './Components/AiGen_Recipe/GenAi.jsx'

// Dashboard imports
import DashboardLayout from './Components/UserComp/DashboardLayout.jsx';
import Favorites from './Components/UserComp/Favorite/Favorites.jsx';
import GroceryList from './Components/UserComp/Grocery/GroceryList.jsx';
import MealPlanner from './Components/UserComp/MealPlanner/MealPlanner.jsx';

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

// Redirect already-logged-in users away from /login and /register
function GuestRoute({ children }) {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (user) return <Navigate to="/" replace />;
  return children;
}

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
      { path: "/gen-ai-recipe", element: <ProtectedRoute><GenAiRecipe /></ProtectedRoute> },
      { path: "/recipes/:mealType", element: <ProtectedRoute><RecipesList /></ProtectedRoute> },
      
      // ✅ FIX 1: Removed IngredientsDetails from the router
      { path: "/recipeDetails/:id", element: <ProtectedRoute><RecipeDetail /></ProtectedRoute> },
      
      {
        path: "/recipes/edit/:id",
        element: <ProtectedRoute requiredRole="admin"><EditRecipe /></ProtectedRoute>
      },
      {
        path: "/recipes/add",
        element: <ProtectedRoute requiredRole="admin"><AddRecipe /></ProtectedRoute>
      },

      // Nested Dashboard Routes
      { 
        path: "/dashboard", 
        element: <ProtectedRoute><DashboardLayout /></ProtectedRoute>,
        children: [
          { path: "", element: <Dashboard /> }, 
          { path: "favorites", element: <Favorites /> },
          { path: "grocerylist", element: <GroceryList /> },
          { path: "mealplanner", element: <MealPlanner /> },
        ]
       },

      // Unknown routes → redirect to login
      { path: "*", element: <Navigate to="/login" replace /> }, 
      
      // ✅ FIX 2: Deleted the duplicate /dashboard/favorites route that was down here!
    ]
  }
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;