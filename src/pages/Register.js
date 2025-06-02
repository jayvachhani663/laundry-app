import "./Register.css";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Register = () => {
  const navigate = useNavigate();
  const goToSignin = () =>{
    navigate("/signin");
  }
  return (
    <div className="register-page">
      <div className="container">
        <div className="register-left-section">
          <div class="register-left-content">
            <h1>
              Laundry
              <br />
              Service
            </h1>
            <p>Doorstep Wash & Dryclean Service</p>
          </div>
          <div className="signin-section">
            <p>Already Have Account</p>
            <button onClick={goToSignin}>Sign In</button>
          </div>
        </div>
        <div className="register-right-section">
          <h2>Register</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input type="number" id="phone" name="phone" />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <select id="state" name="state">
                <option value="">Select State</option>
                <option value="karnataka">Karnataka</option>
                <option value="maharashtra">Maharashtra</option>
                <option value="delhi">Delhi</option>
                <option value="gujarat">Gujarat</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="district">District</label>
              <select id="district" name="district">
                <option value={""}>Select District</option>
                <option value={"bangalore"}>Bangalore</option>
                <option value={"mumbai"}>Mumbai</option>
                <option value={"delhi"}>Delhi</option>
                <option value={"surat"}>Surat</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" />
            </div>
            <div className="form-group">
              <label htmlFor="pincode">Pincode</label>
              <input type="number" id="pincode" name="pincode" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <div className="form-group half-width">
              <label htmlFor="confirm-password">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                name="confirm-password"
              />
            </div>
            <div className="form-footer">
              <div className="checkbox-container">
                <input type="checkbox" id="terms" name="terms" required />
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
