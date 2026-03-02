import React, { useState, useEffect } from 'react';
import axios from 'axios';   // ✅ added
// import IngredientItems from '../Components/IngredientsComp/IngredientItems.jsx';
import Ingredients_main from '../Components/IngredientsComp/Ingredients_main.jsx'

const Ingredients = () => {

  const [allIngredients, setAllIngredients] = useState([]);  // ✅ consistent naming

  useEffect(() => {
    (async () => {
      try {
        let response = await axios.get('/api/ingredients');
        setAllIngredients(response.data);
      } catch (error) {
        console.log("Error Occurred", error.message);
      }
    })();
  }, []);

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
      <Ingredients_main recipes={recipes} allIngredients={allIngredients} />  {/* ✅ matches state */}
    </div>
  );
}

export default Ingredients;