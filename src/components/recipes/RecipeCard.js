import { useHistory } from "react-router-dom";

function RecipeCard({
  id,
  image,
  title,
  usedIngredients,
  missedIngredients,
  addToCollection,
}) {
  const history = useHistory();

  function openRecipeUrl(recipeId) {
    fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?includeNutrition=false&apiKey=${process.env.REACT_APP_API_KEY}`
    )
      .then((response) => response.json())
      .then((recipe) => window.open(recipe.sourceUrl));
  }

  function addMissingIngredients() {
    missedIngredients.forEach((missedIngrident) => {
      addToCollection(
        {
          name: missedIngrident.name
            .split(" ")
            .map((word) => word[0].toUpperCase() + word.substr(1))
            .join(" "),
          checked: false,
        },
        "groceryItems"
      );
    });

    history.push("/groceryList");
  }

  return (
    <div className="card shadow">
      <img className="card-img-top" src={image} alt={title} />

      <div className="card-header bg-secondary">
        <h2 className="card-title m-0">{title}</h2>
      </div>

      <div className="card-body bg-warning">
        <h5>Used ingredients:</h5>

        <ul className="list-unstyled">
          {usedIngredients.map((ingredient) => (
            <li
              className="text-success text-capitalize"
              key={Math.random() * ingredient.id}
            >
              ✔ {ingredient.name}
            </li>
          ))}
        </ul>

        {missedIngredients.length > 0 ? <h5>Missing ingredients:</h5> : null}

        {missedIngredients.length > 0 ? (
          <ul className="list-unstyled">
            {missedIngredients.map((ingredient) => (
              <li
                className="text-danger text-capitalize"
                key={Math.random() * ingredient.id}
              >
                ❌ {ingredient.name}
              </li>
            ))}
          </ul>
        ) : null}

        {missedIngredients.length > 0 ? (
          <button
            onClick={addMissingIngredients}
            className="btn btn-secondary btn-block"
          >
            Add missing ingredients to grocery list
          </button>
        ) : null}

        <button
          onClick={() => openRecipeUrl(id)}
          className="btn btn-secondary btn-block"
        >
          Read recipe details
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;
