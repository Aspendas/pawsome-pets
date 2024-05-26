import React, { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import app from "../../config";
import PetListingCard from "../../components/petListingCard/PetListingCard";
import { collection, getDocs, orderBy, limit, query } from "firebase/firestore";
import Footer from "../../components/footer/Footer";
import HomeNavigationBar from "../../components/HomeNavigationbar";
import "./findPet.css";

const db = getFirestore(app);

const FindPet = () => {
  const [petsData, setPetsData] = useState([]);

  useEffect(() => {
    const petsCollection = collection(db, "pets");
    const petsQuery = query(petsCollection);

    getDocs(petsQuery).then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setPetsData(data);
    });
  }, []);

  console.log("Pets Data", petsData);
  return (
    <div className="find-pet-container">
      <HomeNavigationBar></HomeNavigationBar>
      <div className="pet-listing">
        <h2 className="pet-listing-header">Choose Your Pet</h2>
        <div className="pet-listing-container">
          {petsData.map((pet) => (
            <PetListingCard key={pet.id} pet={pet} />
          ))}
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default FindPet;
