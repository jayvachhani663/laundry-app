import "./OrderHeader.css";
import search from "../assets/search.svg";

const OrderHeader = ({ isCreatingOrder, onCreateClick }) => {
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
            className="orders-search"
          />
          <img src={search} alt="search" className="search-icon" />
        </div>
      </div>
    </>
  );
};

export default OrderHeader;
