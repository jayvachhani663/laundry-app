import "./OrderHeader.css";
import search from "../assets/search.svg";

const OrderHeader = ({ isCreatingOrder, searchQuery, onSearchChange }) => {
  return (
    <>
      <div className="orders-header">
        <div className="orders-count">
          {isCreatingOrder ? "Create Order" : "Orders | 0"}
        </div>

        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="orders-search"
          />
          <img src={search} alt="search" className="search-icon" />
        </div>
      </div>
    </>
  );
};

export default OrderHeader;
