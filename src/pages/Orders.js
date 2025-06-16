import "./Orders.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import OrdersSummary from "./OrdersSummary";
import AfterSigninHeader from "../components/afterSigninHeader";
import LeftSidebar from "../components/sidebar";
import FooterBottom from "../components/FooterBottom";
import OrderCancel from "./OrderCancel";
import search from "../assets/search.svg";

const mockOrders = [
  {
    id: "ORD123",
    date: "2025-06-12",
    store: "Jaya Nagar",
    city: "Bangalore",
    phone: "9876543210",
    items: 3,
    price: 120,
    status: "Ready to Pickup",
  },
  {
    id: "ORD124",
    date: "2025-06-11",
    store: "BTM Layout",
    city: "Bangalore",
    phone: "9845098450",
    items: 5,
    price: 150,
    status: "In Washing",
  },
  {
    id: "ORD125",
    date: "2025-06-10",
    store: "Whitefield",
    city: "Bangalore",
    phone: "9876541230",
    items: 2,
    price: 95,
    status: "In Ironing",
  },
  {
    id: "ORD126",
    date: "2025-06-09",
    store: "Marathahalli",
    city: "Bangalore",
    phone: "9812345678",
    items: 7,
    price: 200,
    status: "Ready to Pickup",
  },
];

const Orders = () => {
  const navigate = useNavigate();
  const [showOrderSummary, setShowOrderSummary] = useState(false);
  const [cancelPopupOrderId, setCancelPopupOrderId] = useState(null);
  const [cancelledOrders, setCancelledOrders] = useState([]);

  const handleCreateClick = () => {
    navigate("/dashboard?create=true");
  };

  const handleCancelConfirmed = (orderId) => {
    setCancelledOrders((prev) => [...prev, orderId]);
    setCancelPopupOrderId(null);
  };

  return (
    <div className="orders-page">
      <AfterSigninHeader />
      <div className="orders-main">
        <LeftSidebar activeIcon={"list"} />

        <div className="orders-section">
          <div className="orders-page-header">
            <div className="orders-page-title">Orders</div>
            <div className="orders-page-controls">
              <button className="orders-page-create-btn" onClick={handleCreateClick}>
                Create
              </button>
              <div className="orders-page-search-wrapper">
                <input
                  type="text"
                  placeholder="Search"
                  className="orders-page-search"
                />
                <img src={search} alt="search" className="orders-page-search-icon" />
              </div>
            </div>
          </div>

          <table className="orders-table">
            <thead>
              <tr>
                <th>Order ID</th>
                <th>Date</th>
                <th>Store Location</th>
                <th>City</th>
                <th>Store Phone</th>
                <th>Total Item</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {mockOrders.map((order) => (
                <tr
                  key={order.id}
                  onClick={() => {
                    if (order.status !== "Ready to Pickup") {
                      setShowOrderSummary(true);
                    }
                  }}
                  className={
                    order.status !== "Ready to Pickup" ? "clickable-row" : ""
                  }
                >
                  <td>{order.id}</td>
                  <td>{order.date}</td>
                  <td>{order.store}</td>
                  <td>{order.city}</td>
                  <td>{order.phone}</td>
                  <td>{order.items}</td>
                  <td>₹{order.price}</td>
                  <td>{order.status}</td>
                  <td>
                    {order.status === "Ready to Pickup" ? (
                      cancelledOrders.includes(order.id) ? (
                        <span style={{ color: "red", fontWeight: "bold" }}>Cancelled</span>
                      ) : (
                        <button
                          className="cancel-btn"
                          onClick={(e) => {
                            e.stopPropagation(); // prevent row click
                            setCancelPopupOrderId(order.id);
                          }}
                        >
                          Cancel
                        </button>
                      )
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showOrderSummary && (
        <div className="summary-backdrop">
          <OrdersSummary onClose={() => setShowOrderSummary(false)} />
        </div>
      )}

      {cancelPopupOrderId && (
        <div className="summary-backdrop">
          <OrderCancel
            orderId={cancelPopupOrderId}
            onClose={() => setCancelPopupOrderId(null)}
            onCancelConfirmed={handleCancelConfirmed}
          />
        </div>
      )}

      <FooterBottom />
    </div>
  );
};

export default Orders;
