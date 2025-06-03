import "./DashboardLayout.css";
import { Link, Outlet } from "react-router-dom";
import profileImg from "../assets/profile.png";
import home from "../assets/home-run.svg";
import more from "../assets/more.svg";
import list from "../assets/list.svg";
import search from "../assets/search.svg";

const DashboardLayout = () => {
  return (
    <>
      <nav className="dashboard-navbar">
        <div className="dashboard-logo">LAUNDRY</div>
        <div className="dashboard-nav-links">
          <Link to="#">Pricing</Link>
          <Link to="#">Career</Link>

          <div className="dashboard-profile-box">
            <img
              src={profileImg}
              alt="Profile"
              className="dashboard-profile-image"
            />
            <span className="dashboard-username">User Name</span>
          </div>
        </div>
      </nav>

      <div className="dashboard-container">
        <div className="left-sidebar">
          <div className="sidebar-icon">
            <img src={home} alt="Home" />
          </div>
          <div className="sidebar-icon active">
            <img src={more} alt="Add Order" />
          </div>
          <div className="sidebar-icon">
            <img src={list} alt="List" />
          </div>
        </div>
        <div className="orders-section">
          <div className="orders-header">
            <div className="orders-count">Orders | 0</div>
            <div className="search-wrapper">
              <input
                type="text"
                placeholder="Search"
                className="orders-search"
              />
              <img src={search} alt="search" className="search-icon" />
            </div>
          </div>

          <div className="no-orders-container">
            <div className="no-orders-message">No Orders Available</div>
            <button className="create-order-button">Create</button>
          </div>
        </div>
        <main style={{ padding: "1rem" }}>
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default DashboardLayout;
