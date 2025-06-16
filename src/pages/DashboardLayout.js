import "./DashboardLayout.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Summary from "./Summary";
import OrderHeader from "../components/OrderHeader";
import FooterBottom from "../components/FooterBottom";
import AfterSigninHeader from "../components/afterSigninHeader";
import Sidebar from "../components/sidebar";
import washIcon from "../assets/orderIcons/washing-machine-1.svg";
import blueWashIcon from "../assets/orderIcons/clickedIcons/washing-machine.svg";
import ironIcon from "../assets/orderIcons/ironing-1.svg";
import blueIronIcon from "../assets/orderIcons/clickedIcons/ironing.svg";
import towelIcon from "../assets/orderIcons/towel.svg";
import blueTowelIcon from "../assets/orderIcons/clickedIcons/blueTowelIcon.svg";
import bleachIcon from "../assets/orderIcons/bleach-1.svg";
import blueBleachIcon from "../assets/orderIcons/clickedIcons/bleach.svg";
import shirtImg from "../assets/productImg/shirtImg.png";
import tshirtImg from "../assets/productImg/tshirt.png";
import trouserImg from "../assets/productImg/trouser.png";
import jeansImg from "../assets/productImg/jeans.png";
import boxersImg from "../assets/productImg/boxer.png";
import joggersImg from "../assets/productImg/joggers.png";

const PRODUCTS = [
  {
    id: 1,
    name: "Shirt",
    desc: "Lorem ipsum dolor sit amet",
    image: shirtImg,
  },
  {
    id: 2,
    name: "T-Shirt",
    desc: "Lorem ipsum dolor sit amet,",
    image: tshirtImg,
  },
  {
    id: 3,
    name: "Trouser",
    desc: "Lorem ipsum dolor sit amet,",
    image: trouserImg,
  },
  {
    id: 4,
    name: "Jeans",
    desc: "Lorem ipsum dolor sit amet,.",
    image: jeansImg,
  },
  {
    id: 5,
    name: "Boxers",
    desc: "Lorem ipsum dolor sit amet,",
    image: boxersImg,
  },
  {
    id: 6,
    name: "joggers",
    desc: "Lorem ipsum dolor sit amet,",
    image: joggersImg,
  },
];

const DashboardLayout = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const createParam = searchParams.get("create") === "true";
  const [isCreatingOrder, setIsCreatingOrder] = useState(createParam);
  const [showSummary, setShowSummary] = useState(false);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const isCreate = queryParams.get("create");
    if (isCreate === "true") {
      setIsCreatingOrder(true);
    }
  }, [location.search]);
  
  const [orderItems, setOrderItems] = useState(
    PRODUCTS.map((product) => ({
      product,
      quantity: 0,
      selectedServices: {
        wash: false,
        iron: false,
        towel: false,
        bleach: false,
      },
    }))
  );

  const SERVICE_PRICES = {
    wash: 10,
    iron: 15,
    towel: 20,
    bleach: 25,
  };

  const handleCreateClick = () => {
    setIsCreatingOrder(true);
  };

  return (
    <>
      <AfterSigninHeader />
      <div className="dashboard-container">
        <Sidebar activeIcon={"add"} />
        <div className="orders-section">
          <OrderHeader
            isCreatingOrder={isCreatingOrder}
            handleCreateClick={handleCreateClick}
          />
          {/* 👉 This is the "No Orders Available + Create" section */}
          {!isCreatingOrder && (
            <div className="no-orders-container">
              <div className="no-orders-message">No Orders Available</div>
              <button
                className="create-order-button"
                onClick={handleCreateClick}
              >
                Create
              </button>
            </div>
          )}

          {/* 👉 If Create is clicked, show the order creation section */}
          {isCreatingOrder && (
            <>
              <div className="order-create-table">
                <div className="order-header-row">
                  <div className="order-col product-name">Product Type</div>
                  <div className="order-col">Quantity</div>
                  <div className="order-col">Wash Type</div>
                  <div className="order-col">Price</div>
                </div>

                {orderItems.map((item, index) => {
                  const { product, quantity, selectedServices } = item;

                  const selectedPrice = Object.entries(selectedServices).reduce(
                    (total, [type, isSelected]) =>
                      isSelected ? total + SERVICE_PRICES[type] : total,
                    0
                  );
                  const price = quantity * selectedPrice;

                  const handleServiceToggle = (type) => {
                    const updated = [...orderItems];
                    updated[index].selectedServices[type] =
                      !updated[index].selectedServices[type];
                    setOrderItems(updated);
                  };

                  const handleQuantityChange = (e) => {
                    const value = parseInt(e.target.value) || 0;
                    const updated = [...orderItems];
                    updated[index].quantity = value;
                    setOrderItems(updated);
                  };

                  const handleReset = () => {
                    const updated = [...orderItems];
                    updated[index] = {
                      ...updated[index],
                      quantity: 0,
                      selectedServices: {
                        wash: false,
                        iron: false,
                        towel: false,
                        bleach: false,
                      },
                    };
                    setOrderItems(updated);
                  };

                  return (
                    <div key={product.id} className="order-row">
                      <div className="order-col product-name">
                        <div className="product-info">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="product-image"
                          />
                          <div className="product-details">
                            <div className="product-title">{product.name}</div>
                            <div className="product-desc">{product.desc}</div>
                          </div>
                        </div>
                      </div>

                      <div className="order-col">
                        <input
                          type="number"
                          min="0"
                          className="quantity-input"
                          placeholder="0"
                          value={quantity}
                          onChange={handleQuantityChange}
                        />
                      </div>

                      <div className="order-col wash-icons">
                        <img
                          src={selectedServices.wash ? blueWashIcon : washIcon}
                          alt="Wash"
                          onClick={() => handleServiceToggle("wash")}
                        />
                        <img
                          src={selectedServices.iron ? blueIronIcon : ironIcon}
                          alt="Iron"
                          onClick={() => handleServiceToggle("iron")}
                        />
                        <img
                          src={
                            selectedServices.towel ? blueTowelIcon : towelIcon
                          }
                          alt="Towel"
                          onClick={() => handleServiceToggle("towel")}
                        />
                        <img
                          src={
                            selectedServices.bleach
                              ? blueBleachIcon
                              : bleachIcon
                          }
                          alt="Bleach"
                          onClick={() => handleServiceToggle("bleach")}
                        />
                      </div>

                      <div className="order-col price price-reset-wrapper">
                        <span className="price-text">
                          {quantity > 0 &&
                          Object.values(selectedServices).includes(true)
                            ? `${quantity} x ${selectedPrice} = ${price}`
                            : "--"}
                        </span>
                        <button onClick={handleReset} className="reset-btn">
                          Reset
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="action-buttons">
                <button
                  className="proceed-btn"
                  onClick={() => setShowSummary(true)}
                >
                  Proceed
                </button>
              </div>
            </>
          )}

          {/* 👉 Summary popup after Proceed */}
          {showSummary && (
            <div className="summary-backdrop">
              <Summary
                onClose={() => setShowSummary(false)}
                orderItems={orderItems}
              />
            </div>
          )}
        </div>
      </div>
      <FooterBottom />
    </>
  );
};

export default DashboardLayout;
