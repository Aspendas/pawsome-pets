import React, { useEffect, useState } from "react";
import { getFirestore } from "firebase/firestore";
import app from "../../config";
import { getAuth } from "firebase/auth";
import { collection, getDocs, orderBy, where, query } from "firebase/firestore";
import ControlablePetListingCard from "../../components/petListingCard/ControlablePetListingCard";
import HomeNavigationBar from "../../components/HomeNavigationbar";
import Footer from "../../components/footer/Footer";

const db = getFirestore(app);

const UserListings = () => {
  const [petsData, setPetsData] = useState([]);

  const auth = getAuth(app);
  const user = auth.currentUser;
  const userId = user ? user.uid : null;

  useEffect(() => {
    const petsCollection = collection(db, "pets");

    const orderedPetsQuery = query(
      petsCollection,
      where("userId", "==", userId),
      orderBy("createdAt", "desc")
    );
    getDocs(orderedPetsQuery).then((querySnapshot) => {
      const data = querySnapshot.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setPetsData(data);
    });
  }, []);
  console.log("Pets Data", petsData);

  return (
    <div>
      <div className="find-pet-container">
        <HomeNavigationBar></HomeNavigationBar>
        <div className="pet-listing">
          <h2 className="pet-listing-header">Choose Your Pet</h2>
          <div className="pet-listing-container">
            {petsData.map((pet) => (
              <ControlablePetListingCard key={pet.id} pet={pet} />
            ))}
          </div>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default UserListings;
