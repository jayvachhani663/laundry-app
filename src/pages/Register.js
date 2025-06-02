import './Register.css';
import Footer from '../components/Footer';

const Register = () => {
  return (
    <div className="register-page">
        <div className="container">
            <div className="register-left-section">
                <h1>Laundry Service</h1>
                <p>Doorstep Wash & Dryclean Service</p>
                <button>Sign In</button>
            </div>
            <div className="register-right-section">
            <h2>Register</h2>
        </div>
      </div>
      <Footer/>
    </div>
    
  );
};

export default Register;
