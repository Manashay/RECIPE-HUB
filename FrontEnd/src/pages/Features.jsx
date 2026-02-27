import FeaturesHero from "../Components/FeaturesComp/HeroSection/FeaturesHero.jsx";
import RecipeGenerator from "../Components/FeaturesComp/RecipeGenerator/RecipeGenerator.jsx";
import FoodWasteSection from "../Components/FeaturesComp/FoodWasteSection/FoodWasteSection.jsx";

function Features(){
  return(
    <>
    <FeaturesHero></FeaturesHero>
    <RecipeGenerator></RecipeGenerator>
    <FoodWasteSection></FoodWasteSection>
    </>
  );
}

export default Features;