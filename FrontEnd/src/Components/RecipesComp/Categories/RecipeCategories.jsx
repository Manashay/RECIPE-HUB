import {useNavigate} from 'react-router-dom';
import './RecipeCategories.css';
import breakfast from '../../../assets/breakfast.jpg';
import lunch from '../../../assets/lunch.png';
import dinner from '../../../assets/dinner.png';
import snacks from '../../../assets/Snacks.jpeg';

const RecipeCategories = () => {
  const navigate = useNavigate();

  // Replace these with your actual image paths
  const categories = [
    { name: 'Breakfast', img: breakfast },
    { name: 'Lunch', img:lunch },
    { name: 'Dinner', img:dinner },
    { name: 'Snacks', img:snacks },
  ];

  const handleNavigation = (name)=>{
    const route = name;
    navigate(`/recipes/${route}`);
  }
  
  return (
    <div className="categories-wrapper">
      {categories.map((cat,id) => (
        <div key={id}  onClick={() => handleNavigation(cat.name)}  className="category-card">
          <div className="category-img-container">
            <img src={cat.img} alt={cat.name} />
          </div>
          <h3 className="category-name">{cat.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default RecipeCategories;