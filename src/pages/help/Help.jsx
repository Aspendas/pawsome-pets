import React from "react";

import LoginNavigationBar from "../../components/LoginNavigationbar";
import "./help.css";

export default function Help() {
  return (
    <div>
      <LoginNavigationBar></LoginNavigationBar>
      <h1 className="help-header">Getting Started</h1>
      <p>
        To get started, you will need to create an account. You can do this by
        clicking on the "Sign Up" link at the top of the homepage. Once you have
        created an account, you can log in by entering your email address and
        password on the homepage.
      </p>
    </div>
  );
}
