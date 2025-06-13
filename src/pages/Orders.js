import AfterSigninHeader from "../components/afterSigninHeader";
import LeftSidebar from "../components/sidebar";
import FooterBottom from "../components/FooterBottom";
import search from "../assets/search.svg";
import "./Orders.css";

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
  return (
    <div className="orders-page">
      <AfterSigninHeader />
      <div className="orders-main">
        <LeftSidebar activeIcon={"list"} />

        {/* 🆕 Right side container */}
        <div className="orders-section">
          <div className="orders-page-header">
            <div className="orders-page-title">Orders</div>
            <div className="orders-page-controls">
              <button className="orders-page-create-btn">Create</button>
              <div className="orders-page-search-wrapper">
                <input
                  type="text"
                  placeholder="Search"
                  className="orders-page-search"
                />
                <img
                  src={search}
                  alt="search"
                  className="orders-page-search-icon"
                />
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
                <tr key={order.id}>
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
                      <button className="cancel-btn">Cancel</button>
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
      <FooterBottom />
    </div>
  );
};

export default Orders;
