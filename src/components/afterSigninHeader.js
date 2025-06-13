import "./afterSigninHeader.css";
import { Link } from "react-router-dom";
import profileImg from "../assets/profile.png";

const AfterSigninHeader = () => {
  return (
    <nav className="afterSigninHeader-navbar">
      <div className="afterSigninHeader-logo">LAUNDRY</div>
      <div className="afterSigninHeader-nav-links">
        <Link to="#">Pricing</Link>
        <Link to="#">Career</Link>
        <div className="afterSigninHeader-profile-box">
          <img src={profileImg} alt="Profile" className="afterSigninHeader-profile-image" />
          <span className="afterSigninHeader-username">User Name</span>
        </div>
      </div>
    </nav>
  );
};

export default AfterSigninHeader;