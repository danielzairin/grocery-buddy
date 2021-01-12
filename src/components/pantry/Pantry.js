import Card from "../Card";
import Header from "../Header";
import PantryForm from "./PantryForm";
import PantryItem from "./PantryItem";

function Pantry({ pantryItems, addToCollection, deleteFromCollection }) {
  return (
    <div>
      <Header title="Pantry" />

      <Card background="warning">
        <PantryForm addToCollection={addToCollection} />
      </Card>

      {pantryItems && pantryItems.length > 0 ? (
        <ul className="list-unstyled">
          {pantryItems
            .sort((a, b) => a.expiryDate - b.expiryDate)
            .map((item) => (
              <PantryItem
                key={item.id}
                {...item}
                addToCollection={addToCollection}
                deleteFromCollection={deleteFromCollection}
              />
            ))}
        </ul>
      ) : null}
    </div>
  );
}

export default Pantry;
