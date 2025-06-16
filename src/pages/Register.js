import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Footer from "../components/Footer";

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    district: "",
    address: "",
    pincode: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Password match check
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const res = await fetch("http://localhost:5001/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(data.message);
        setTimeout(() => navigate("/signin"), 1500);
      } else {
        setError(data.error || "Registration failed");
      }
    } catch (err) {
      console.error("Register error:", err);
      setError("Something went wrong. Try again.");
    }
  };

  return (
    <div className="register-page">
      <div className="container">
        <div className="register-left-section">
          <div className="register-left-content">
            <h1>
              Laundry
              <br />
              Service
            </h1>
            <p>Doorstep Wash & Dryclean Service</p>
          </div>
          <div className="signin-section">
            <p>Already Have Account</p>
            <button onClick={() => navigate("/signin")}>Sign In</button>
          </div>
        </div>

        <div className="register-right-section">
          <h2>Register</h2>

          {error && <p className="error">{error}</p>}
          {success && <p className="success">{success}</p>}

          <form onSubmit={handleSubmit}>
            {[
              { label: "Name", type: "text", name: "name" },
              { label: "Email", type: "email", name: "email" },
              { label: "Phone", type: "number", name: "phone" },
              { label: "Address", type: "text", name: "address" },
              { label: "Pincode", type: "number", name: "pincode" },
              { label: "Password", type: "password", name: "password" },
              { label: "Confirm Password", type: "password", name: "confirmPassword" },
            ].map((field) => (
              <div className="form-group" key={field.name}>
                <label htmlFor={field.name}>{field.label}</label>
                <input
                  type={field.type}
                  id={field.name}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                />
              </div>
            ))}

            <div className="form-group">
              <label htmlFor="state">State</label>
              <select id="state" name="state" value={formData.state} onChange={handleChange}>
                <option value="">Select State</option>
                <option value="karnataka">Karnataka</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="delhi">Delhi</option>
                <option value="gujarat">Gujarat</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="district">District</label>
              <select id="district" name="district" value={formData.district} onChange={handleChange}>
                <option value="">Select District</option>
                <option value="bangalore">Bangalore</option>
                <option value="mumbai">Mumbai</option>
                <option value="delhi">Delhi</option>
                <option value="surat">Surat</option>
              </select>
            </div>

            <div className="form-footer">
              <div className="checkbox-container">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">
                  <p>I agree to the Terms & Conditions</p>
                </label>
              </div>

              <button className="register-btn" type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
