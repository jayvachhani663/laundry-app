import "./afterSigninHeader.css";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import profileImg from "../assets/profile.png";

const AfterSigninHeader = () => {
  const [userName, setUserName] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedName = localStorage.getItem("userName");
    if (storedName) {
      setUserName(storedName);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("userName");
    navigate("/signin");
  };
  return (
    <nav className="afterSigninHeader-navbar">
      <div className="afterSigninHeader-logo">LAUNDRY</div>
      <div className="afterSigninHeader-nav-links">
        <Link to="#">Pricing</Link>
        <Link to="#">Career</Link>
        <div className="afterSigninHeader-profile-box">
          <img src={profileImg} alt="Profile" className="afterSigninHeader-profile-image" />
          <span
            className="afterSigninHeader-username"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            {userName || "User"}
          </span>

          {showDropdown && (
            <button className="logout-button" onClick={handleLogout}>
              Logout
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default AfterSigninHeader;