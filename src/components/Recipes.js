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
      <h1 class="card text-center">Recipes</h1>
      
      <div class="card-deck row-cols-sm-3">

          {recipes.map((recipe) => (
            <div key={recipe.id}>
              <div class="card h-100">
                        
                <img class="card-img-top" src={recipe.image} />

                <div class="card-body">
                  <h2 class="card-title">{recipe.title}</h2>            

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
              </div>      
            </div>    
          ))}
      </div>  
    </div>
  );
}

export default Recipes;
