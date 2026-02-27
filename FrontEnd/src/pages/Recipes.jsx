import React, { useEffect, useState } from 'react';
import axios from 'axios';
import RecipesHero from '../Components/RecipesComp/RecipesHero/RecipesHero.jsx';
import RecipeCategories from '../Components/RecipesComp/Categories/RecipeCategories.jsx';
import PopularRecipes from '../Components/RecipesComp/PopularRecipes/PopularRecipes.jsx';
import RecommendationSection from '../Components/RecipesComp/RecommendationSection/RecommendationSection.jsx';


const Recipes = () => {

    const [recipes,setRecipes] =  useState([]);

    useEffect( ()=>{
        try{
            (async ()=>{
                let response = await axios.get('/api/recipes');
                setRecipes(response.data);
            })();
        }catch(error){
            console.log("Error Occured", error.message);
        }
    },[]);

    return (
        <div>
            <RecipesHero></RecipesHero>
            <RecipeCategories></RecipeCategories>
            <PopularRecipes recipes={recipes} ></PopularRecipes>
            <RecommendationSection recipes={recipes}></RecommendationSection>
        </div>
    )
}

export default Recipes;
