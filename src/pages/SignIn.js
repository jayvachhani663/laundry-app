import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import lockIcon from '../assets/padlock.svg';
import Footer from '../components/Footer';
import './SignIn.css';

const SignIn = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const validateInput = () => {
    const phoneRegex = /^[6-9]\d{9}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailOrPhone || !password) {
      setError('Please fill in all fields');
      return false;
    }

    // Check if it's either valid phone or email
    if (!phoneRegex.test(emailOrPhone) && !emailRegex.test(emailOrPhone)) {
      setError('Enter a valid phone number or email');
      return false;
    }

    return true;
  };

  const handleLogin = async () => {
    setError('');

    if (!validateInput()) return;

    try {
      const res = await fetch('https://laundry-app-72v5.onrender.com//api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ emailOrPhone, password }),
      });

      const data = await res.json();

      if (res.ok) {
        console.log('Login successful:', data);
        localStorage.setItem('userName', data.user.name);
        navigate('/dashboard');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Something went wrong');
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
                <button className="register-btn-signIn" onClick={goToRegister}>
                  Register
                </button>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="right-section">
            <h2>Sign In</h2>

            <label>Mobile / Email</label>
            <input
              type="text"
              value={emailOrPhone}
              onChange={(e) => {
                setEmailOrPhone(e.target.value);
                setError('');
              }}
              className={error ? 'input-error' : ''}
            />

            <label>Password</label>
            <div className="password-wrapper">
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
              />
              <img src={lockIcon} alt="lock icon" className="lock-icon" />
            </div>

            {error && <p className="error">{error}</p>}

            <p className="forgot-password">Forgot Password?</p>

            <button onClick={handleLogin}>Sign In</button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default SignIn;
