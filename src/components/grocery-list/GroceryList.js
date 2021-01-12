import Header from "../Header";
import Card from "../Card";
import GroceryListForm from "./GroceryListForm";
import GroceryListItem from "./GroceryListItem";
import SignInCard from "../SignInCard";
import SignOutCard from "../SignOutCard";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function GroceryList({
  groceryItems,
  addToCollection,
  deleteFromCollection,
  updateInCollection,
}) {
  const user = useContext(UserContext);

  return (
    <div>
      <Header title="Grocery List" />

      {user.isAnonymous ? (
        <>
          <SignInCard />
          <hr />
        </>
      ) : (
        <>
          <SignOutCard />
          <hr />
        </>
      )}

      <Card background="warning">
        <GroceryListForm addToCollection={addToCollection} />

        <hr />

        {groceryItems && groceryItems.length > 0 ? (
          <ul className="list-unstyled px-3">
            {groceryItems.map((item) => (
              <GroceryListItem
                key={item.id}
                {...item}
                deleteFromCollection={deleteFromCollection}
                updateInCollection={updateInCollection}
              />
            ))}
          </ul>
        ) : null}
      </Card>
    </div>
  );
}

export default GroceryList;
