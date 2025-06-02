import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import lockIcon from '../assets/padlock.svg';
import Footer from '../components/Footer';
import './SignIn.css';

const SignIn = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
    setError('');
  };

  const validatePhone = () => {
    const phoneRegex = /^[6-9]\d{9}$/;
    if (!phoneRegex.test(phone)) {
      setError('Please enter a valid phone number');
    }
  };

    const goToRegister = () => {
    navigate('/register');
    };
    
  return (
  <>
    <div className="signin-container">
      <div className="main-content">
        {/* Left Section */}
        <div className="left-section">
          <div className="left-content">
            <h2>
              Laundry <br /> Service
            </h2>
            <p>Doorstep Wash & Dryclean Service</p>
            <div className="register-box">
              <p>Don't Have An Account?</p>
              <button className="register-btn" onClick={goToRegister}>Register</button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <h2>Sign In</h2>

          <label>Mobile / Email</label>
          <input
            type="text"
            value={phone}
            onChange={handlePhoneChange}
            onBlur={validatePhone}
            className={error ? 'input-error' : ''}
          />
          {error && <p className="error">{error}</p>}

          <label>Password</label>
          <div className="password-wrapper">
            <input type="password" />
            <img src={lockIcon} alt="lock icon" className="lock-icon" />
          </div>

          <p className="forgot-password">Forgot Password?</p>

          <button>Sign In</button>
        </div>
      </div>
      <Footer/>
    </div>
  </>
  );
};

export default SignIn;
