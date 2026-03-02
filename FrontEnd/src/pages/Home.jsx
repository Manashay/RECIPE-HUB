// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '../Components/LandingPage/HeroSection/HeroSection.jsx';
import FridgeSection from '../Components/LandingPage/FridegeSection/FridegeSection.jsx';
import CookingSection from '../Components/LandingPage/CookingSection/CookingSection.jsx';
import CookingForEveryone from '../Components/LandingPage/CookingSection/CookingForEveryone.jsx';
import TrendingRecipes from '../Components/LandingPage/TrendingRecipes/TrendingRecipes.jsx';
import Ingredients from '../Components/IngredientsComp/IngredientItems.jsx';

const Home = () => {

    // Fridge Ingredients
    const [ingredients, setIngredients] = useState([]); 

    useEffect(() => {
        const fetchIngredients = async () => {
            try {
                const response = await axios.get('/api/ingredients');
                setIngredients(response.data);
            } catch (error) {
                console.error("Error fetching ingredients:", error.message);    
            }
        };

        fetchIngredients();
    }, []);

    

    return (
        <div>
            <Hero></Hero>
            < FridgeSection ingredients={ingredients}  ></FridgeSection>
            <CookingSection></CookingSection>
            <CookingForEveryone></CookingForEveryone>
            <TrendingRecipes></TrendingRecipes>
        </div >
    )
}

export default Home;
