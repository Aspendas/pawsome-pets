import React from "react";

import LoginNavigationBar from "../../components/LoginNavigationbar";
import "./help.css";

export default function Help() {
  return (
    <div>
      <LoginNavigationBar></LoginNavigationBar>
      <div className="help-container">
        <h1 className="help-header">Getting Started</h1>
        <p className="help-paragraph">
          To get started, you will need to create an account. You can do this by
          clicking on the "Sign Up" link at the top of the homepage. Once you
          have created an account, you can log in by entering your email address
          and password on the homepage.
        </p>
        <h2 className="help-subheader">Finding a home for your pet's clubs</h2>{" "}
        <p className="help-paragraph help-subparagraph">
          If you are looking to find a home for your pet's cubs, you can create
          a listing on our web site. To create a listing, follow these steps:
          <br></br>
          <ol className="ordered-list">
            <li>Click on the "Find Home" button on the homepage.</li>
            <li>Upload a photo of your pet</li>
            <li>Enter the title of your listing.</li>
            <li>
              Select the type, age, gender, behaviour of pet you are listing.
            </li>

            <li>Enter the contact number for communication.</li>
            <li>
              Include a description of your cubs, including their age,
              temperment, and vaccination status.
            </li>
            <li>
              Once you have completed all of the required fields, click on the
              "Submit" button.
            </li>
          </ol>
        </p>
        <h2 className="help-subheader">Finding pet for your home</h2>{" "}
        <p className="help-paragraph help-subparagraph">
          If you are looking for a pet', you can search through listing on our
          web site. To find pet, follow these steps:
          <br></br>
          <ol className="ordered-list">
            <li>Click on the "Find Pet" button on the homepage.</li>
            <li>Upload a photo of your pet</li>
            <li>Navigate through various listings</li>
            <li>Find suitable pet for yourself.</li>
            <li>Contact with the pet owner using "Contact Information"</li>
          </ol>
        </p>
      </div>
    </div>
  );
}
