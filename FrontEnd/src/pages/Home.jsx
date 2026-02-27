// import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Hero from '../Components/LandingPage/HeroSection/HeroSection.jsx';
import FridgeSection from '../Components/LandingPage/FridegeSection/FridegeSection.jsx';
import CookingSection from '../Components/LandingPage/CookingSection/CookingSection.jsx';
import CookingForEveryone from '../Components/LandingPage/CookingSection/CookingForEveryone.jsx';
import TrendingRecipes from '../Components/LandingPage/TrendingRecipes/TrendingRecipes.jsx';

const Home = () => {

    // Fridge Ingredients
    const [ingredients, setIngredients] = useState([]); // Our Storage
    useEffect(() => {
        (async () => {
            try {
                let response = await axios.get('/api/ingredients');
                setIngredients(response.data);
                    
            } catch (error) {
                console.log("Error Occurred", error.message);     
            }
        })();
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
