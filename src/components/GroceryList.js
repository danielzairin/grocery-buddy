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
  }

  return (
    <div>
      <h1>Grocery List</h1>

      <form onSubmit={addItem}>
        <span>Add item: </span>
        <input type="text" placeholder="Item name..." name="name" />
        <button>+</button>
      </form>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <input type="checkbox" defaultChecked={item.checked} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default GroceryList;
