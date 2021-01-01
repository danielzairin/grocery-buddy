import React, { useContext } from "react";
import GroceryList from "./components/GroceryList";
import Pantry from "./components/Pantry";
import Recipes from "./components/Recipes";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { UserContext } from "./contexts/UserContext";

function App() {
  const user = useContext(UserContext);

  return (
    <Router>
      {user ? (
        <div className="container">
          <Nav />
          <Switch>
            <Route path="/groceryList" component={GroceryList} />
            <Route path="/pantry" component={Pantry} />
            <Route path="/recipes" component={Recipes} />
            <Redirect to="/pantry" />
          </Switch>
        </div>
      ) : null}
    </Router>
  );
}

export default App;
