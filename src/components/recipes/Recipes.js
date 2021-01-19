import Header from "../Header";
import RecipeCard from "./RecipeCard";

function Recipes({ recipes, addToCollection }) {
  return (
    <div>
      <Header title="Recipes For You" />

      {recipes.length > 0 ? (
        <div className="card-deck row-cols-md-2 row-cols-lg-3">
          {recipes.map((recipe) => (
            <div key={recipe.id}>
              <RecipeCard {...recipe} addToCollection={addToCollection}/>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center font-italic">
          No recipes to be suggested, please add ingredients to the pantry.
        </p>
      )}
    </div>
  );
}

export default Recipes;
