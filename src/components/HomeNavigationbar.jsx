import React, { useState } from "react";
import { ReactComponent as PawIcon } from "../assets/paw-solid-white.svg";
import { Link } from "react-router-dom";
import UserPhoto from "../assets/user.png";
import LogOut from "../assets/logout.png";
import { getAuth, signOut } from "firebase/auth";
import "./NavigationBar.css";
import { useNavigate } from "react-router-dom";

const HomeNavigationBar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const auth = getAuth();
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        console.log("Logged out successfully");
        navigate("/login");
      })
      .catch((error) => {
        console.error("An error occurred while logging out:", error);
      });
  };

  return (
    <div className="navbar">
      <nav className="navbar-size">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to={"/home"}>
              <PawIcon alt="Paw Icon" className="nav-icon" />
            </Link>
            <div className="nav-item" onClick={toggleDropdown}>
              <img
                className="nav-icon user-icon"
                src={UserPhoto}
                alt="User Icon"
              />
              {dropdownVisible && (
                <div className="dropdown-menu">
                  <button onClick={handleLogout} className="dropdown-item">
                    Log Out
                    <img alt="Log Out" src={LogOut} />
                  </button>
                  <Link to={"/pass"} className="dropdown-item">
                    Change Password
                  </Link>
                </div>
              )}
            </div>
          </li>
          <div className="nav-bar-link-container">
            <li className="nav-item">
              <Link to={"/find-pet"} className="nav-link">
                Find Pet
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/find-home"} className="nav-link">
                Find Home
              </Link>
            </li>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default HomeNavigationBar;
