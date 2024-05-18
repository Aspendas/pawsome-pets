import React from "react";
import HomeNavigationBar from "../../components/HomeNavigationbar";

import "./findHome.css";
import Footer from "../../components/footer/Footer";

const FindHome = () => {
  return (
    <div className="find-home-container">
      <HomeNavigationBar></HomeNavigationBar>
      <div className="find-home-content-container">
        <h1 className="find-home-header">Find Home For Your Pet</h1>
        <p className="find-home-text"> Lorem ipsum dolor amet</p>
        <div className="create-pet-listing">
          <div className="create-pet-listing-input-container">
            <label className="create-pet-listing-label-text">Header</label>
            <input
              className="create-pet-listing-text-input-field"
              dir="ltr"
              id="title"
              placeholder="Enter a header for pet listing e.g: Playful Bulldog"
              type="text"
            />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default FindHome;
