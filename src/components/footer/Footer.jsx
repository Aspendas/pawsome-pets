import React from "react";
import { Link } from "react-router-dom";

import { ReactComponent as SiteLogo } from "../../assets/paw-solid.svg";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-background">
      <div className="footer-container">
        <div className="footer-left">
          <h3 className="footer-logo">
            <Link to="/home" className="footer-link">
              <SiteLogo />
            </Link>
          </h3>
          <p className="footer-text">
            Pawpals is a platform that connects pet lovers with pets. We believe
            that pets are family and that every pet deserves a loving home.
          </p>
        </div>
        <div className="footer-mid">
          <h3 className="footer-header">Site Navigation</h3>
          <ul>
            <li>
              <Link to="/home" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/find-pet" className="footer-link">
                Find Pet
              </Link>
            </li>
            <li>
              <Link to="/find-home" className="footer-link">
                Find Home
              </Link>
            </li>
            <li>
              <Link to="/help" className="footer-link">
                Help
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-right">
          <h3 className="footer-header">Contact Us</h3>
          <p className="footer-text">Email: info@pawsomepets.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
