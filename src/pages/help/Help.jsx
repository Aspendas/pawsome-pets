import React from "react";

import LoginNavigationBar from "../../components/LoginNavigationbar";
import "./help.css";

export default function Help() {
  return (
    <div>
      <LoginNavigationBar></LoginNavigationBar>
      <div className="help-container">
        <h1 className="help-header">Getting Started</h1>
        <p>
          To get started, you will need to create an account. You can do this by
          clicking on the "Sign Up" link at the top of the homepage. Once you
          have created an account, you can log in by entering your email address
          and password on the homepage.
        </p>
        <h2 classname="help-header">Finding a home for your pet's clubs</h2>{" "}
        <p classname="help-paragraph">
          If you are looking to find a home for your pet's cubs, you can create
          a listing on our web site. To create a listing, follow these steps:
          <br></br>
          <ol>
            <li>Click on the "Create a Listing" link on the homepage.</li>
            <li>Select the type of pet you are listing.</li>
            <li>Enter the breed of your pet.</li>
            <li>Enter the number of cubs you have available.</li>
            <li>
              Include a description of your cubs, including their age,
              temperment, and vaccination status.
            </li>
            <li>
              Upload photos of your cubs. 7. Once you have completed all of the
              required fields, click on the "Submit" button.
            </li>
          </ol>
        </p>
      </div>
    </div>
  );
}
