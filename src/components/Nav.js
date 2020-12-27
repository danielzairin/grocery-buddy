import React from "react";
import {Link} from "react-router-dom"

function Nav() {
  const navStyle={color: "black"};

  return (
    
    <nav>  
    <Link to="/">
    <p>Home </p>
        <ul  className="nav-link">
              <Link  style= {navStyle} to="/GroceryList">
                <li>Grocery List </li>
              </Link>
              <Link style= {navStyle} to="/Pantry">
                <li> Pantry </li>
              </Link>
              <Link style= {navStyle} to="/Recipe">
                <li>Recipe </li>
              </Link>
        </ul>
        </Link>
    </nav>
  );
}

export default Nav;
