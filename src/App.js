import React from "react";
import GroceryList from "./components/GroceryList";
import Pantry from "./components/Pantry";
import Recipes from "./components/Recipes";

function App() {
  return (
    <div>
      <h1>Kitchenette</h1>
      <GroceryList />
      <Pantry />
      <Recipes />
    </div>
  );
}

export default App;

// npm start
// http://localhost:3000/

// Mapping components - https://scrimba.com/learn/learnreact/mapping-components-in-react-cDZbahv

// Components
// 1. Grocery list - 🍪
// 2. Recipes - 🥒
// 3. Pantry - 🍃
// 4. Add item - 🍄
