import React, { useEffect, useState } from "react";
import HomeNavigationBar from "../../components/HomeNavigationbar";
import "./home.css";
import PetPhoto from "../../assets/pet-photo.png";
import { ReactComponent as SiteLogo } from "../../assets/paw-solid.svg";
import { getFirestore } from "firebase/firestore";
import app from "../../config";
import { collection, getDocs, orderBy, limit, query } from "firebase/firestore";

const db = getFirestore(app);

function Home() {
  const [petsData, setPetsData] = useState([]);

  useEffect(() => {
    const petsCollection = collection(db, "pets");
    const petsQuery = query(petsCollection, limit(4));

    getDocs(petsQuery).then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => doc.data());
      setPetsData(data);
    });
  }, []);

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
          {petsData.map((pet, index) => (
            <div key={index}>
              <p>Pet Name: {pet.description}</p>
              <p>Pet Type: {pet.type}</p>
            </div>
          ))}
        </div>
      </section>
      <footer className="footer-background">
        <div className="footer-container">
          <div className="footer-left">
            <h3 className="footer-logo">
              <SiteLogo />
            </h3>
            <p className="footer-text">
              Pawpals is a platform that connects pet lovers with pets. We
              believe that pets are family and that every pet deserves a loving
              home.
            </p>
          </div>
          <div className="footer-mid">
            <h3>Site Navigation</h3>
            <ul>
              <li>Home</li>
              <li>Find Pet</li>
              <li>Find Home</li>
              <li>Help</li>
            </ul>
          </div>
          <div className="footer-right">
            <h3 className="footer-header">Contact Us</h3>
            <p className="footer-text">Email: info@pawsomepets.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
