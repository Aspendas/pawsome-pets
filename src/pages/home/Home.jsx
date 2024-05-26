import React, { useEffect, useState } from "react";
import HomeNavigationBar from "../../components/HomeNavigationbar";
import "./home.css";
import PetPhoto from "../../assets/pet-photo.png";
import { getFirestore } from "firebase/firestore";
import app from "../../config";
import {
  collection,
  getDocs,
  orderBy,
  where,
  limit,
  query,
} from "firebase/firestore";
import PetListingCard from "../../components/petListingCard/PetListingCard";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";

const db = getFirestore(app);

function Home() {
  const [petsData, setPetsData] = useState([]);

  const navigate = useNavigate();

  const navigateToPetListing = () => {
    navigate("/find-pet");
  };

  const navigateToFindHome = () => {
    navigate("/find-home");
  };

  console.log("Pets Data", petsData);
  useEffect(() => {
    const petsCollection = collection(db, "pets");
    const petsQuery = query(
      petsCollection,
      where("isActive", "==", true),
      orderBy("createdAt", "desc"),
      limit(4)
    );

    getDocs(petsQuery).then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setPetsData(data);
    });
  }, []);
  console.log("data", petsData);

  return (
    <div className="home-container">
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
              <button className="btn" onClick={navigateToPetListing}>
                Find Pet
              </button>{" "}
              <button className="btn" onClick={navigateToFindHome}>
                Find Home
              </button>
            </div>
          </div>
          <div>
            <img className="landing-image" src={PetPhoto} alt="Pet photo" />
          </div>
        </div>
      </section>
      <section className="pet-gallery">
        <div className="pet-gallery-header-container">
          <h2 className="pet-gallery-header">
            Take a look at some of our pets
          </h2>
          <button className="btn find-more-pet" onClick={navigateToPetListing}>
            View more
          </button>
        </div>
        <div className="pet-gallery-container">
          {petsData.map((pet, index) => (
            <div key={index}>
              <PetListingCard pet={pet} />
            </div>
          ))}
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}

export default Home;
