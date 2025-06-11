import './Footer.css';
import instagram from '../assets/instagram.svg'
import facebook from '../assets/facebook.svg'
import linkedin from '../assets/linkedin.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <p>Now Refer & Earn ₹500 for every referral*</p>
      <div className="footer-links-section">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>About Us</h4>
             <span className="footer-link">Doorstep Wash & Dryclean Service</span>
          </div>

          <div className="footer-column">
            <h4>Home</h4>
            <span className="footer-link">Sign-In</span>
            <span className="footer-link">Register</span>
          </div>

          <div className="footer-column">
            <h4>Pricing</h4>
          </div>

          <div className="footer-column">
            <h4>Career</h4>
            <span className="footer-link">Blogs</span>
            <span className="footer-link">create</span>
          </div>

          <div className="footer-column">
            <h4>Contact</h4>
          </div>

          <div className="footer-column">
            <h4>SOCIAL MEDIA</h4>
            <div className='social-media-logo'>
              <img src= {instagram} alt='Instagram'/>
              <img src= {facebook} alt='Facebook' />
              <img src= {linkedin} alt='Linkedin' />
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom-line">
      <div className="footer-text">2021 © Laundry</div>
      </div>
    </footer>
  );
};

export default Footer;