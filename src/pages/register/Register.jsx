import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import LoginNavigationBar from "../../components/LoginNavigationbar";
import { useNavigate } from "react-router-dom";
import "./register.css";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigateToHomepage = () => {
    navigate("/home");
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed up:", userCredential.user);
      navigateToHomepage();
    } catch (error) {
      setError(error.message);
      console.error("Error signing up:", error.message);
    }
  };

  return (
    <div className="background">
      <LoginNavigationBar />
      <div className="authentication">
        <div className="register-container">
          <div className="container">
            <h1>Welcome to Pawsome Pets</h1>
            <form className="form-signin" onSubmit={handleSignUp}>
              <p className="form-signin-text">Please Sign Up to proceed</p>
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
                Sign Up
              </button>
            </form>
            {error && <p className="error-message">{error}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
