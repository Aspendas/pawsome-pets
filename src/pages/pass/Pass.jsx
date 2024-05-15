import { useState } from "react";
import { getAuth, updatePassword } from "firebase/auth";
import "./pass.css";
import LoginNavigationBar from "../../components/LoginNavigationbar";

const Pass = () => {
  const auth = getAuth();
  const currentUser = auth.currentUser;
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleChangePassword = async (e) => {
    e.preventDefault();
    setError(null);
    setSuccessMessage(null);

    if (newPassword !== confirmNewPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await updatePassword(currentUser, newPassword);

      setNewPassword("");
      setConfirmNewPassword("");

      setSuccessMessage("Password changed successfully");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="background">
      <LoginNavigationBar />
      <div className="change-password-container">
        <div className="container">
          <h1>Change Password</h1>
          <form className="form-signin" onSubmit={handleChangePassword}>
            <input
              type="password"
              placeholder="Current Password"
              value={currentPassword}
              className="form-control"
              onChange={(e) => setCurrentPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="New Password"
              className="form-control"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Confirm New Password"
              className="form-control"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
              required
            />
            <button className="auth-btn" type="submit">
              Change Password
            </button>
          </form>
        </div>
        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
  );
};

export default Pass;
