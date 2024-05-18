import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import app from "../../config";

import HomeNavigationBar from "../../components/HomeNavigationbar";
import Footer from "../../components/footer/Footer";

import "./findPetDetail.css";

const db = getFirestore(app);

const FindPetDetail = () => {
  const { id } = useParams();
  const [pet, setPet] = useState(null);

  useEffect(() => {
    const fetchPet = async () => {
      const docRef = doc(db, "pets", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setPet(docSnap.data());
      } else {
        console.log("Pet not found");
      }
    };

    fetchPet();
    console.log("Pet", pet);
  }, [id, pet]);

  return (
    <div className="find-pet-detail">
      <HomeNavigationBar></HomeNavigationBar>
      <div className="find-pet-detail-content-container">
        <div className="pet-photo">
          <img src={pet?.imageUrl} alt="Pet" className="pet-img"></img>
        </div>
        <div className="pet-informations">
          <h2 className="pet-informations-header">{pet?.header}</h2>
          <p className="pet-informations-subtext">Type: {pet?.type}</p>
          <p className="pet-informations-subtext">Gender: {pet?.gender}</p>
          <p className="pet-informations-subtext">Age: {pet?.age}</p>
          <p className="pet-informations-subtext">
            Behaviour: {pet?.behaviour}
          </p>
          <p className="pet-informations-subtext">
            Adoption Fee: {pet?.adoptionFee}
          </p>
          <div className="contact-information-box">
            Contact Information <br />
            {pet?.phoneNumber ?? "05432104470"}
          </div>
        </div>
        <div className="pet-decription">
          <h3 className="description-header">Description</h3>
          <p>{pet?.description ?? "There is no description"}</p>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default FindPetDetail;
