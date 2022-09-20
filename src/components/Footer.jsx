import React from "react";

export function Footer() {
  return (
    <div className="footer">
      <li className="repo">
        <a href="#!" rel="noreferrer">
          Repositories
        </a>
      </li>
      <span>© {new Date().getFullYear()} Copyright Text</span>
    </div>
  );
}
