import React, { useEffect, useState } from "react";
import { groceryListItems } from "../testData.js";

function GroceryList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(groceryListItems);
  }, []);

  function addItem(event) {
    event.preventDefault();
    const newItem = {
      id: Math.random(),
      name: event.target["name"].value,
      checked: false,
    };
    setItems((prevItems) => [...prevItems, newItem]);
    event.target.reset();
  }

  return (
    <div>
      <h1 className="text-center">Grocery List</h1>

      <div className="card shadow">
        <div className="card-body bg-warning">
          <form onSubmit={addItem}>
            <input
              className="form-control rounded-0"
              type="text"
              placeholder="Item name..."
              name="name"
              required
              autoComplete="off"
              spellCheck="false"
            />
            <button className="btn btn-secondary btn-block rounded-0">
              Add
            </button>
          </form>

          <hr />

          <ul className="list-unstyled px-3">
            {items.map((item) => (
              <li className="my-2" key={item.id}>
                <input type="checkbox" defaultChecked={item.checked} />
                <span className="h5 m-2">{item.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default GroceryList;
