import React, { useState } from "react";
import HomeNavigationBar from "../../components/HomeNavigationbar";

import "./findHome.css";
import Footer from "../../components/footer/Footer";

import app from "../../config";
import { getFirestore, collection, addDoc } from "firebase/firestore";
const db = getFirestore(app);

const FindHome = () => {
  const [header, setHeader] = useState("");
  const [type, setType] = useState("");
  const [age, setAge] = useState("");
  const [adoptionFee, setAdoptionFee] = useState("");
  const [gender, setGender] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

  const handlePhotoChange = (files) => {
    if (files.length > 0) {
      setPhoto(files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Additional client-side validation (optional)
    if (!header || !type || !age || !adoptionFee || !gender || !description) {
      alert("Please fill out all required fields.");
      return;
    }

    try {
      await addDoc(collection(db, "pets"), {
        header,
        type,
        age,
        adoptionFee,
        gender,
        description,
        createdAt: new Date().toISOString(), // Add createdAt field with current timestamp
      });
      console.log(header, type, age, adoptionFee, gender, description);
      alert("Pet information added successfully");
      setHeader("");
      setType("");
      setAge("");
      setAdoptionFee("");
      setGender("");
      setDescription("");
    } catch (error) {
      console.error("Error adding pet information: ", error);
    }
  };

  return (
    <div className="find-home-container">
      <HomeNavigationBar></HomeNavigationBar>
      <div className="find-home-content-container">
        <h1 className="find-home-header">Find Home For Your Pet</h1>
        <p className="find-home-text">
          Fill the form to find a home for your beloved pet.
        </p>
        <div className="create-pet-listing">
          <form onSubmit={handleSubmit}>
            <div className="create-pet-listing-input-container">
              <label className="create-pet-listing-label-text">
                Photo of your pet
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => handlePhotoChange(e.target.files)}
                required
              />
              {photo && (
                <img
                  src={URL.createObjectURL(photo)}
                  alt="Selected Pet"
                  className="create-pet-listing-preview-image"
                />
              )}
            </div>
            <div className="create-pet-listing-input-container">
              <label>Type</label>
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="create-pet-listing-select-field"
                required
              >
                <option value="">Select a type</option>
                <option value="dog">Dog</option>
                <option value="cat">Cat</option>
                <option value="bird">Bird</option>
                <option value="rabbit">Rabbit</option>
              </select>
            </div>
            <div className="create-pet-listing-input-container">
              <label>Age</label>
              <select
                value={age}
                onChange={(e) => setAge(e.target.value)}
                className="create-pet-listing-select-field"
                required
              >
                <option value="">Select age</option>
                <option value="puppy">Puppy</option>
                <option value="adult">Adult</option>
                <option value="senior">Senior</option>
              </select>
            </div>
            <div className="create-pet-listing-input-container">
              <label className="create-pet-listing-label-text">
                Adoption Fee
              </label>
              <input
                type="number"
                value={adoptionFee}
                onChange={(e) => setAdoptionFee(e.target.value)}
                className="create-pet-listing-text-input-field"
                required
              />
            </div>
            <div className="create-pet-listing-input-container">
              <label>Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="create-pet-listing-select-field"
                required
              >
                <option value="">Select gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="create-pet-listing-input-container">
              <label className="create-pet-listing-label-text">
                Description
              </label>
              <textarea
                type="text"
                value={description}
                className="create-pet-listing-text-input-field"
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default FindHome;
