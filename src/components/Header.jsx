import React from "react";
import { Link } from "react-router-dom";
export function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">Recipes</Link>
      </div>

      <ul className="nav_list">
        <li className="nav_item">
          <Link to="/random">Random dish</Link>
        </li>
      </ul>
    </div>
  );
}
