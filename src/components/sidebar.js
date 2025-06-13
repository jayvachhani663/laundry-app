import "./sidebar.css";
import home from "../assets/home-run.svg";
import more from "../assets/more.svg";
import list from "../assets/list.svg";
import listBlue from "../assets/listblue.svg";

const LeftSidebar = ({ activeIcon }) => {
  return (
    <div className="left-sidebar">
      <div className={`sidebar-icon ${activeIcon === "home" ? "active" : ""}`}>
        <img src={home} alt="Home" />
      </div>
      <div className={`sidebar-icon ${activeIcon === "add" ? "active" : ""}`}>
        <img src={more} alt="Add Order" />
      </div>
      <div className={`sidebar-icon ${activeIcon === "list" ? "active" : ""}`}>
        <img src={activeIcon === "list" ? listBlue : list} alt="List" />
      </div>
    </div>
  );
};

export default LeftSidebar;
