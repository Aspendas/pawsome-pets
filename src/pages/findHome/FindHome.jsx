import React, { useState } from "react";
import HomeNavigationBar from "../../components/HomeNavigationbar";

import "./findHome.css";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";

import app from "../../config";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const db = getFirestore(app);

const firebaseApp = getApp();
const storage = getStorage(firebaseApp);

const FindHome = () => {
  const [header, setHeader] = useState("");
  const [type, setType] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [behaviour, setBehaviour] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [description, setDescription] = useState("");
  const [photo, setPhoto] = useState(null);

  const navigate = useNavigate();

  const navigateToPetListing = () => {
    navigate("/find-pet");
  };

  const handlePhotoChange = (files) => {
    if (files.length > 0) {
      setPhoto(files[0]);
    }
  };

  const uploadPhoto = async () => {
    const storageRef = ref(storage, `${photo.name}`);
    let downloadURL = "";
    if (photo) {
      await uploadBytes(storageRef, photo).then((snapshot) => {
        console.log("Uploaded a blob or file!");
        return getDownloadURL(snapshot.ref).then((url) => {
          console.log("File available at", url);
          downloadURL = url;
        });
      });
    }
    return downloadURL;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const imageUrl = await uploadPhoto();
      await addDoc(collection(db, "pets"), {
        header,
        type,
        age,
        gender,
        behaviour,
        phoneNumber,
        description,
        imageUrl,
        createdAt: new Date().toISOString(), // Add createdAt field with current timestamp
        isActive: true,
      });
      console.log(header, type, age, gender, description);
      alert("Pet information added successfully");
      setPhoto(null);
      setHeader("");
      setType("");
      setAge("");
      setGender("");
      setBehaviour("");
      setPhoneNumber("");
      setDescription("");
      navigateToPetListing();
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
              <label className="create-pet-listing-label-text">
                Title of the pet listing
              </label>
              <input
                type="text"
                value={header}
                onChange={(e) => setHeader(e.target.value)}
                className="create-pet-listing-text-input-field"
                required
              />
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
                <option value="hamster">Other</option>
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
                <option value="1 months old">1 months old</option>
                <option value="2 months old">2 months old</option>
                <option value="3 months old">3 months old</option>
                <option value="4 months old">4 months old</option>
                <option value="5 months old">5 months old</option>
                <option value="6 months old">6 months old</option>
                <option value="7 months old">7 months old</option>
                <option value="8 months old">8 months old</option>
                <option value="9 months old">9 months old</option>
                <option value="10 months old">10 months old</option>
                <option value="11 months old">11 months old</option>
                <option value="1 year old">1 year old</option>
                <option value="2 years old">2 years old</option>
                <option value="3 years old">3 years old</option>
                <option value="4 years old">4 years old</option>
                <option value="5 years old">5 years old</option>
                <option value="6 years old">6 years old</option>
                <option value="7 years old">7 years old</option>
                <option value="8 years old">8 years old</option>
                <option value="9 years old">More than 8 years old</option>
              </select>
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
              <label>Behaviour</label>
              <select
                value={behaviour}
                onChange={(e) => setBehaviour(e.target.value)}
                className="create-pet-listing-select-field"
                required
              >
                <option value="">Select behaviour</option>
                <option value="male">Aggresive</option>
                <option value="friendly">Friendly</option>
                <option value="playful">Playful</option>
                <option value="calm">Calm</option>
                <option value="shy">Shy</option>
                <option value="energetic">Energetic</option>
                <option value="independent">Independent</option>
              </select>
            </div>
            <div className="create-pet-listing-input-container">
              <label className="create-pet-listing-label-text">
                Phone Number
              </label>
              <input
                type="number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="create-pet-listing-text-input-field"
                required
              />
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
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default FindHome;
