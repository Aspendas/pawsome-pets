import React from "react";
import "./petListingCard.css";

const PetListingCard = ({ pet }) => {
  console.log(pet);
  return (
    <div className="pet-listing-card">
      <div>
        {pet.imageUrl && (
          <img src={pet.imageUrl} alt={pet.type} className="pet-img" />
        )}
      </div>
      <p className="card-heading-text">{pet.heading}</p>
      <p className="card-heading-subtext">
        {pet.gender} - {pet.age}
      </p>
      <p className="card-price">{pet.adoptionFee}$</p>
    </div>
  );
};

export default PetListingCard;
