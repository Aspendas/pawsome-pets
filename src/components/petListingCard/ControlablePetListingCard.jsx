import React from "react";
import { Link } from "react-router-dom";
import "./petListingCard.css";
import { doc, updateDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import app from "../../config";

const db = getFirestore(app);

const ControlablePetListingCard = ({ pet }) => {
  console.log("Pet", pet);

  const updatePet = async () => {
    const petRef = doc(db, "pets", pet.id);

    // Set the "isActive" field of the pet to false
    await updateDoc(petRef, {
      isActive: !pet.isActive,
    }).then(() => {
      alert("Pet listings status updated successfully");
      window.location.reload();
    });
  };

  return (
    <div className="pet-listing-card">
      <Link
        key={pet.id}
        to={`/find-pet/${pet.id}`}
        className="pet-gallery-card-link"
      >
        <div>
          {pet.imageUrl && (
            <img src={pet.imageUrl} alt={pet.type} className="pet-img" />
          )}
        </div>
      </Link>
      <p className="card-heading-text">{pet.heading}</p>
      <p className="card-heading-subtext">
        {pet.gender} - {pet.age}
      </p>
      {pet.isActive ? (
        <div>
          <button className="btn-active" onClick={updatePet}>
            Active
          </button>
        </div>
      ) : (
        <div>
          <button className="btn-inactive" onClick={updatePet}>
            Inactive
          </button>
        </div>
      )}
    </div>
  );
};

export default ControlablePetListingCard;
