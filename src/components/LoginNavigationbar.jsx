import React from "react";
import { ReactComponent as PawIcon } from "../assets/paw-solid-white.svg"; // Import SVG as a React component

import "./NavigationBar.css";

const LoginNavigationBar = () => {
  return (
    <div className="navbar">
      <nav className="navbar-size">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">
              {/* Use imported SVG component and set width and height */}
              <PawIcon alt="Paw Icon" className="nav-icon" />
            </a>
          </li>
          <li className="nav-item">
            <a href="/help" className="nav-link">
              Help
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LoginNavigationBar;
