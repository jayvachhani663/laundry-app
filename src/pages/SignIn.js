import { useState } from 'react';
import './SignIn.css';

const SignIn = () => {
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');

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

  return (
    <div className="signin-container">
      <div className="left-section">
        <h1>Laundry Service</h1>
        <p>Doorstep Wash & Dryclean Service</p>
        <p>Don't Have An Account?</p>
        <button>Register</button>
      </div>

      <div className="right-section">
        <h2>Sign In</h2>
        <label>Mobile / Email</label>
        <input
          type="text"
          value={phone}
          onChange={handlePhoneChange}
          onBlur={validatePhone}
        />
        {error && <p className="error">{error}</p>}

        <label>Password</label>
        <input type="password" />

        <button>Sign In</button>
      </div>
    </div>
  );
};

export default SignIn;
