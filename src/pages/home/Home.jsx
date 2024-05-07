import React from "react";
import HomeNavigationBar from "../../components/HomeNavigationbar";
import "./home.css";

function Home() {
  return (
    <div>
      <HomeNavigationBar></HomeNavigationBar>
      <div className="home-content">
        <div className="landing-content">
          <div className="landing-content-container">
            <h1 className="landing-content-header">Welcome to Pawpals</h1>
            <p className="landing-content-text">
              Discover the world of adorable pets. Find your perfect match or
              share the joy of pet ownership with responsible families.
            </p>
          </div>
          <div className="landing-image"></div>
        </div>
      </div>
    </div>
  );
}

export default Home;
