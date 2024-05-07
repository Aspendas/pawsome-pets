import React from "react";
import HomeNavigationBar from "../../components/HomeNavigationbar";
import "./home.css";
import PetPhoto from "../../assets/pet-photo.png";

function Home() {
  return (
    <div>
      <HomeNavigationBar></HomeNavigationBar>
      <section className="landing-content">
        <div className="landing-content">
          <div className="landing-content-container">
            <h1 className="landing-content-header">Welcome to Pawpals</h1>
            <p className="landing-content-text">
              Discover the world of adorable pets. Find your perfect match or
              share the joy of pet ownership with responsible families.
            </p>
            <div>
              <button className="btn">Find Pet</button>{" "}
              <button className="btn">Find Home</button>
            </div>
          </div>
          <div>
            <img className="landing-image" src={PetPhoto} alt="Pet photo" />
          </div>
        </div>
      </section>
      <section className="pet-gallery">
        <div className="pet-gallery-container">
          <h2 className="pet-gallery-header">
            Take a look at some of our pets
          </h2>
          <button className="btn find-more-pet">View more</button>
          <div className="pet-listing-card"></div>
        </div>
      </section>
    </div>
  );
}

export default Home;
