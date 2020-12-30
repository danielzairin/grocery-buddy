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
      <h1
        className="text-center fixed-top w-100 bg-primary shadow-sm"
        style={{ height: "55px" }}
      >
        Recipes
      </h1>

      <div className="card-deck row-cols-sm-3">
        {recipes.map((recipe) => (
          <div key={recipe.id}>
            <div className="card shadow">
              <img
                className="card-img-top"
                src={recipe.image}
                alt={recipe.title}
              />

              <div className="card-header bg-secondary">
                <h2 className="card-title">{recipe.title}</h2>
              </div>

              <div className="card-body bg-warning">
                <h5>Used ingredients:</h5>
                <ul className="list-unstyled">
                  {recipe.usedIngredients.map((ingredient) => (
                    <li
                      className="text-success text-capitalize"
                      key={ingredient.id}
                    >
                      ✔ {ingredient.name}
                    </li>
                  ))}
                </ul>

                <h5>Missing ingredients:</h5>
                <ul className="list-unstyled">
                  {recipe.missedIngredients.map((ingredient) => (
                    <li
                      className="text-danger text-capitalize"
                      key={ingredient.id}
                    >
                      ❌ {ingredient.name}
                    </li>
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
