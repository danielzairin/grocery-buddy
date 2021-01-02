import React, { useContext, useEffect, useState } from "react";
import {
  fetchGroceryItems,
  addGroceryItem,
  deleteGroceryItem,
  toggleGroceryItem,
} from "../firebase/firestoreUtils";
import { UserContext } from "../contexts/UserContext";

function GroceryList() {
  const [items, setItems] = useState([]);
  const user = useContext(UserContext);

  useEffect(() => {
    // Fetch grocery items from database
    fetchGroceryItems(user.uid).then((items) => {
      setItems(items);
    });
  }, [user]);

  function addItem(event) {
    event.preventDefault();

    let newItem = {
      name: event.target["name"].value,
      checked: false,
    };

    // Add item to grocery list
    addGroceryItem(newItem, user.uid)
      .then((doc) => {
        // Get ID of new item
        newItem = { id: doc.id, ...newItem };
        // Update UI state
        setItems((prevItems) => [...prevItems, newItem]);
      })
      .catch(console.error);

    event.target.reset();
  }

  // Delete item from grocery list
  function deleteItem(itemId) {
    deleteGroceryItem(itemId)
      .then(() => {
        // Update UI state
        setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
      })
      .catch(console.error);
  }

  return (
    <div>
      <h1
        className="text-center fixed-top w-100 bg-primary shadow-sm"
        style={{ height: "55px" }}
      >
        Grocery List
      </h1>

      <div className="card shadow">
        <div className="card-body bg-warning">
          <form onSubmit={addItem}>
            <div className="form-group">
              <label>Item name</label>
              <input
                className="form-control"
                type="text"
                name="name"
                required
                autoComplete="off"
                spellCheck="false"
              />
            </div>
            <button className="btn btn-secondary btn-block">Add</button>
          </form>

          <hr />

          {items.length > 0 ? (
            <ul className="list-unstyled px-3">
              {items.map((item) => (
                <li
                  className="my-2"
                  key={item.id}
                  id={item.id}
                  style={
                    item.checked ? { textDecoration: "line-through" } : null
                  }
                >
                  <input
                    type="checkbox"
                    defaultChecked={item.checked}
                    onChange={() => {
                      toggleGroceryItem(item.id);
                      const li = document.getElementById(item.id);
                      if (li.style.textDecoration === "line-through")
                        li.style.textDecoration = "none";
                      else li.style.textDecoration = "line-through";
                    }}
                  />
                  <span className="h5 m-2">{item.name}</span>
                  <span
                    className="float-right"
                    onClick={() => deleteItem(item.id)}
                    style={{ cursor: "pointer" }}
                  >
                    ✕
                  </span>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default GroceryList;
