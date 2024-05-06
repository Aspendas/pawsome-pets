import LoginNavigationBar from "../../components/LoginNavigationbar";
import { useNavigate } from "react-router-dom";
import "./Authentication.css";

export default function Auth() {
  const navigate = useNavigate();

  const navigateToHomepage = () => {
    // Navigate to the '/about' route
    navigate("/home");
  };

  return (
    <div className="background">
      <LoginNavigationBar />
      <div className="authentication">
        <div className="authentication-container">
          <div className="left-container">
            <h1>Photo</h1>
          </div>
          <div className="right-container">
            <h1>Welcome to Pawsome Pets</h1>
            <form className="form-signin">
              <p className="form-signin-text">Please login to proceed</p>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Email Address"
                required
                autofocus
              />
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required
              />
              <button className="btn" onClick={navigateToHomepage}>
                Login
              </button>
            </form>
            <p className="form-signin-subtext">
              If you don't have an account{" "}
              <span className="fake-hyperlink">register</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
