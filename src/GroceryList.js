import React from "react";

function GroceryList() {
  return (
    <div>
      <h1>Grocery List</h1>

      <div>
        <span>Add item: </span>
        <input type="text" placeholder="Item name..." />
        <button>+</button>
      </div>

      <ul>
        <li>
          <div>
            <input type="checkbox" />
            <span>Bananas</span>
          </div>
        </li>
        <li>
          <div>
            <input type="checkbox" />
            <span>Milk</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default GroceryList;
