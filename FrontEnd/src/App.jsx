// import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './pages/Home.jsx';
import Recipes from './pages/Recipes.jsx'
import Ingredients from './pages/Ingredients.jsx';
import Features from './pages/Features.jsx';
import About from './pages/About.jsx';
import Footer from './Components/Footer/footer.jsx';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import ScrollToTop from './Components/Helper/ScrollToTop.jsx';
import RecipeDetail from './Components/RecipesComp/RecipeDetails/RecipeDetails.jsx';
import IngredientsDetails from './Components/RecipesComp/IngredientsDetails/IngredientsDetails.jsx';
import RecipesList from './Components/RecipesComp/MealTypeRecipes/RecipesList.jsx';

// 1. Define a Layout component
// This acts as the "frame" of the website
function Layout() {

  return (
    <>
      <Navbar></Navbar>
      <main>
        <ScrollToTop />
        <Outlet /> {/* This is where Home, Recipes, etc. will appear */}
      </main>
      <Footer></Footer>
    </>
  )
};

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          path: "/",
          element: <Home />
        },
        {
          index: true,
          path: "/ingredients",
          element: <Ingredients />
        },
        {
          index: true,
          path: '/recipes',
          element: <Recipes />
        },
        {
          index: true,
          path: '/recipeDetails/:id',
          element: <>
            <RecipeDetail/>
            <IngredientsDetails/>
          </>
        },
        {
          index: true,
          path: '/recipes/:mealType',
          element: <>
            <RecipesList/>
          </>
        },
        {
          index: true,
          path: "/features",
          element: <Features />
        },
        {
          index: true,
          path: "/about us",
          element: <About />
        },
        {
          index: true,
          path: "/support",
          // element : <Support/>
        },
      ]
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App
