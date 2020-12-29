import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand navbar-light fixed-bottom bg-primary">
      <ul className="navbar-nav d-flex justify-content-around w-100">
        <li className="nav-item">
          <NavLink className="nav-link" to="/grocerylist">
            🛒
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/pantry">
            🥑
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/recipes">
            👩‍🍳
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
