import Card from "../Card";
import { useHistory } from "react-router-dom"

function PantryItem({
  id,
  name,
  expiryDate,
  daysUntilExpired,
  addToCollection,
  deleteFromCollection,
}) {
  const history = useHistory();

  return (
    <li className="mt-3">
      <Card
        background={
          daysUntilExpired <= 0
            ? "dark"
            : daysUntilExpired <= 7
            ? "danger"
            : daysUntilExpired <= 14
            ? "warning"
            : "light"
        }
      >
        <h5>{name}</h5>

        <p>Expiry date: {expiryDate.toLocaleDateString()}</p>

        <p>
          {daysUntilExpired > 0
            ? `Expires in ${daysUntilExpired} days`
            : "Expired"}
        </p>

        <button
          className="btn btn-secondary"
          onClick={() => {
              addToCollection({ name, checked: false }, "groceryItems");
              history.push("/groceryList");
            }
          }
        >
          Add to grocery list
        </button>

        <button
          className={
            daysUntilExpired > 0 ? "btn btn-dark ml-3" : "btn btn-light ml-3"
          }
          onClick={() => deleteFromCollection(id, "pantryItems")}
        >
          Delete
        </button>
      </Card>
    </li>
  );
}

export default PantryItem;
