import React, { useState, useEffect } from "react";
import { recipes as fetchedRecipes } from "../testData";

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Get list of ingredients
    // const ingredients = pantryItems.map((item) => item.name).toString();

    // Fetch recipes and set it to recipes state
    // fetch(
    //   "https://api.spoonacular.com/recipes/findByIngredients?apiKey=API_KEY&ingredients=" +
    //     ingredients
    // )
    //   .then((response) => response.json())
    //   .then((json) => setRecipes(json));

    // Sample API response
    setRecipes(fetchedRecipes);
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>

          <img src={recipe.image} />

          <p>Used ingredients:</p>
          <ul>
            {recipe.usedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.name}</li>
            ))}
          </ul>

          <p>Missing ingredients:</p>
          <ul>
            {recipe.missedIngredients.map((ingredient) => (
              <li key={ingredient.id}>{ingredient.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Recipes;
