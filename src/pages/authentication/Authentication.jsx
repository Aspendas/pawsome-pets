import LoginNavigationBar from "../../components/LoginNavigationbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Authentication.css";
import {
  getAuth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

export default function Auth() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigateToHomepage = () => {
    navigate("/home");
  };

  const navigateToRegpage = () => {
    navigate("/register");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed in:", userCredential.user);
      navigateToHomepage();
    } catch (error) {
      if (error.code === "auth/user-not-found") {
        setError("User does not exist. Please register.");
      } else {
        setError(error.message);
      }
      console.error("Error signing in:", error.message);
      alert("Invalid credentials. Please try again");
    }
  };

  const handlePasswordReset = async () => {
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      alert("Password reset email sent successfully");
      // navigateToRegpage();
    } catch (error) {
      setError(error.message);
      console.error("Error sending password reset email:", error.message);
    }
  };

  return (
    <div className="background">
      <LoginNavigationBar />
      <div className="authentication">
        <div className="authentication-container">
          <div className="container">
            <h1>Welcome to Pawsome Pets</h1>
            <form className="form-signin" onSubmit={handleLogin}>
              <p className="form-signin-text">Please login to proceed</p>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Email Address"
                required
                autoFocus
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="auth-btn" type="submit">
                Login
              </button>
            </form>
            <p className="form-signin-subtext">
              If you don't have an account <b />
              <span onClick={navigateToRegpage} className="fake-hyperlink">
                register
              </span>
            </p>
            <p className="form-signin-subtext">
              Forgot your <b />
              <span onClick={handlePasswordReset} className="fake-hyperlink">
                password
              </span>
              ?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
