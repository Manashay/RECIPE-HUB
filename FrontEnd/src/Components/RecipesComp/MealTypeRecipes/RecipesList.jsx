import React, { useEffect, useState } from 'react';
import { Clock, Users, Flame, Heart, Star } from 'lucide-react';
import './RecipesList.css';
import RecipeCards from '../RecommendationSection/RecipeCards.jsx';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const RecipesList = ({ recipes }) => {

  const {mealType} = useParams();

  const [recipe, setRecipes] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/recipeList?category=${mealType}`);
        setRecipes(response);
      } catch (error) {
        console.log("Data not Found", error.message);
      }
    }
    fetchData();
  }, [mealType]);

  return (
    <section className="recommendation-section">
      <div className="recommendation-container">
        <h2 className="recommendation-title">{mealType.toUpperCase()} Recipes</h2>

        <div className="recommendation-grid">
          {recipes?.map((item) => (
            <RecipeCards recipes={recipe} key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecipesList;