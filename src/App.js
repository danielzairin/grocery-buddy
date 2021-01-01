import React, { useContext } from "react";
import GroceryList from "./components/GroceryList";
import Pantry from "./components/Pantry";
import Recipes from "./components/Recipes";
import Nav from "./components/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { UserContext } from "./contexts/UserContext";

function App() {
  const user = useContext(UserContext);

  return (
    <Router>
      {user ? (
        <div className="container">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/GroceryList" component={GroceryList} />
            <Route path="/Pantry" component={Pantry} />
            <Route path="/Recipes" component={Recipes} />
          </Switch>
        </div>
      ) : null}
    </Router>
  );
}
const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);
export default App;

// npm start
// http://localhost:3000/

// Mapping components - https://scrimba.com/learn/learnreact/mapping-components-in-react-cDZbahv

// Components
// 1. Grocery list - 🍪
// 2. Recipes - 🥒
// 3. Pantry - 🍃
// 4. Add item - 🍄
