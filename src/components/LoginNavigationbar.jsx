import React from "react";
import { ReactComponent as PawIcon } from "../assets/paw-solid-white.svg";
import { Link } from "react-router-dom";

import "./NavigationBar.css";

const LoginNavigationBar = () => {
  return (
    <div className="navbar">
      <nav className="navbar-size">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to={"/"}>
              <PawIcon alt="Paw Icon" className="nav-icon" />
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/help" className="nav-link">
              Help
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default LoginNavigationBar;
