import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import { fetchPantryItems } from "../firebase/firestoreUtils";

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const user = useContext(UserContext);

  useEffect(() => {
    // Fetch pantry items from database
    fetchPantryItems(user.uid)
      .then((pantryItems) => {
        const urlQuery = pantryItems.map((item) => item.name).toString();

        // Fetch recipes using API call
        fetch(
          "https://api.spoonacular.com/recipes/findByIngredients?apiKey=API_KEY&number=5&ingredients=" +
            urlQuery
        )
          .then((response) => response.json())
          .then((recipes) => setRecipes(recipes))
          .catch(console.error);
      })
      .catch(console.error);
  }, [user]);

  return (
    <div>
      <h1
        className="text-center fixed-top w-100 bg-primary shadow-sm"
        style={{ height: "55px" }}
      >
        Recipes
      </h1>

      {recipes.length > 0 ? (
        <div className="card-deck row-cols-md-2 row-cols-lg-3">
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
      ) : null}
    </div>
  );
}

export default Recipes;
