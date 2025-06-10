import React, { useState } from "react";
import "./SummaryAddAddress.css";

function SummaryAddAddress({ onClose, onSave }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSave = () => {
    const newAddress = {
      name: name.trim(),
      phone: phone.trim(),
      address: address.trim(),
    };

    if (!name || !phone || !address) {
      alert("Please fill all fields");
      return;
    }

    onSave(newAddress); // Send address to parent
    onClose(); // Close the popup
  };

  return (
    <div className="address-popup">
      <div className="address-form">
        <p className="add-address-heading">Add New Address</p>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <textarea
          placeholder="Full Address"
          rows="4"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>

        <div className="address-buttons">
          <button onClick={onClose}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </div>
      </div>
    </div>
  );
}

export default SummaryAddAddress;
