import React from "react";
import { Link } from "react-router-dom";
import "./petListingCard.css";

const PetListingCard = ({ pet }) => {
  return (
    <Link
      key={pet.id}
      to={`/find-pet/${pet.id}`}
      className="pet-gallery-card-link"
    >
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
        <p className="card-price">{pet.header}</p>
      </div>
    </Link>
  );
};

export default PetListingCard;
