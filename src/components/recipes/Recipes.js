import { useState, useEffect } from "react";
import Header from "../Header";
import RecipeCard from "./RecipeCard";

function Recipes({ pantryItems }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (pantryItems.length === 0) return;

    const urlQuery = pantryItems
      .filter((item) => item.daysUntilExpired > 0)
      .map((item) => item.name)
      .toString();

    fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${process.env.REACT_APP_API_KEY}&number=5&ranking=2&ingredients=${urlQuery}`
    )
      .then((response) => response.json())
      .then((recipes) => setRecipes(recipes))
      
  }, [pantryItems]);

  return (
    <div>
      <Header title="Recipes For You" />

      {recipes.length > 0 ? (
        <div className="card-deck row-cols-md-2 row-cols-lg-3">
          {recipes.map((recipe) => (
            <div key={recipe.id}>
              <RecipeCard {...recipe} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center font-italic">
          No recipes to be suggested, please add items to the pantry.
        </p>
      )}
    </div>
  );
}

export default Recipes;
