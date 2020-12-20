import React, { useState, useEffect } from "react";
import { pantryItems } from "./testData";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Get list of ingredients
    const ingredients = pantryItems.map((item) => item.name).toString();

    // Fetch recipes and set it to recipes state
    fetch(
      "https://api.spoonacular.com/recipes/findByIngredients?apiKey=API_KEY&ingredients=" +
        ingredients
    )
      .then((response) => response.json())
      .then((json) => setRecipes(json));
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      {/* {recipes.map((recipe) => (
        <div>
          <h2>{recipe.title}</h2>

          <img src={recipe.image} />

          <p>Used ingredients:</p>
          <ol>
            {recipe.usedIngredients.map((ingredient) => (
              <li>{ingredient.name}</li>
            ))}
          </ol>

          <p>Missing ingredients:</p>
          <ol>
            {recipe.missedIngredients.map((ingredient) => (
              <li>{ingredient.name}</li>
            ))}
          </ol>
        </div>
      ))} */}
    </div>
  );
}

export default Recipes;
