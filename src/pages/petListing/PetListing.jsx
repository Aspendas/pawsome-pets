import React, { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import app from "../../config";
import PetListingCard from "../../components/petListingCard/PetListingCard";
import { collection, getDocs, orderBy, limit, query } from "firebase/firestore";
import HomeNavigationBar from "../../components/HomeNavigationbar";
import "./petListing.css";

const db = getFirestore(app);

const PetListing = () => {
  const [petsData, setPetsData] = useState([]);

  useEffect(() => {
    const petsCollection = collection(db, "pets");
    const petsQuery = query(petsCollection, );

    getDocs(petsQuery).then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setPetsData(data);
    });
  }, []);
  return (
    <div>
      <HomeNavigationBar></HomeNavigationBar>
      <h2 className="pet-listing-header">Choose Your Pet</h2>
      <div className="pet-listing-container">
        {petsData.map((pet) => (
          <PetListingCard key={pet.id} pet={pet} />
        ))}
      </div>
    </div>
  );
};

export default PetListing;
